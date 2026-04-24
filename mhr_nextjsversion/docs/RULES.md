# Project Coding Rules

> These rules are **mandatory**. Every file in this project must comply.
> No exceptions. No shortcuts.

---

## 1. TypeScript — Strict Mode, No Escape Hatches

- **Never use `any`**. If you don't know the type, use `unknown` and narrow it.
- **Never use `as SomeType`** to silence a type error — fix the root cause.
- **Never use `@ts-ignore` or `@ts-expect-error`** unless paired with a comment explaining exactly why.
- **Never use non-null assertion (`!`)** unless you have proven the value cannot be null at that point.
- All function parameters and return types must be explicitly typed.
- All objects passed between layers must have a named `type` alias — no inline `{ key: value }` shapes as function signatures.
  - For DB-derived shapes, the named type must be inferred from the Drizzle schema (see Rule 8) — do **not** write a duplicate by hand.

```ts
// ❌ FORBIDDEN
function getUser(id: any): any { ... }
const user = data as User;

// ✅ REQUIRED
function getUser(id: string): Promise<User> { ... }
const user = parseUser(data); // parseUser validates and returns User
```

---

## 2. API Response Shape — Always Consistent

Every API route (`app/api/**/route.ts`) must return this exact shape and nothing else:

```ts
{
  success: boolean;  // true on success, false on error
  message: string;   // human-readable description of what happened
  data?: T;          // payload on success; omit or null on error
}
```

- `success` is **always present** — never omit it.
- `message` is **always present** — never omit it.
- `data` is present on success; omit it (or set to `null`) on error responses.

Never return a raw object, array, or primitive directly from an API route.

```ts
// ❌ FORBIDDEN
return NextResponse.json(products);
return NextResponse.json({ products, total });
return NextResponse.json({ error: 'Not found' }, { status: 404 });

// ✅ REQUIRED — success
return NextResponse.json({ success: true, message: 'Products fetched', data: { products, total } });

// ✅ REQUIRED — error
return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
```

---

## 3. Error Handling — Log With Location

- **Every `catch` block must `console.error`** — silent catches are forbidden.
- The log message must include the **file path and function name** so errors are traceable without a debugger.
- Always log the raw `error` object as the second argument so the stack trace is preserved.
- API routes must catch all errors and return a proper error response — never let an unhandled error reach Next.js's default error page.

```ts
// ❌ FORBIDDEN
try {
  await doSomething();
} catch {
  return NextResponse.json({ error: 'Failed' }, { status: 500 });
}

// ✅ REQUIRED
try {
  await doSomething();
} catch (error) {
  console.error('[app/api/products/route.ts > GET]', error);
  return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 });
}
```

Log format: `[path/to/file.ts > functionName]`

---

## 4. File Length — Maximum 100 Lines

- **No file may exceed 100 lines.**
- If a file grows past 100 lines, split it immediately:
  - Extract a helper into a new file in the same folder.
  - Split a large component into focused sub-components under `_components/`.
  - Split a large service into focused modules (e.g., `productsReadService.ts`, `productsWriteService.ts`).
- Line count is measured on the saved file excluding blank lines that are pure formatting.
- **Prefer components over long files** — if something can be a component, it must be one.

---

## 5. Server Components — Default to Server, Opt Into Client

- **`page.tsx` must NEVER have `'use client'`.** It is always a Server Component — no exceptions.
- **Every component is a Server Component by default.** Do NOT add `'use client'` unless you have a concrete reason.
- Valid reasons for `'use client'`: browser-only APIs (`window`, `document`), event handlers, React state (`useState`/`useReducer`), or TanStack Query hooks.
- Never fetch data inside a Client Component when a Server Component can do it instead.
- Pass data down as props from Server → Client; never fetch up.

```tsx
// ❌ FORBIDDEN — fetching in a client component when server could do it
'use client';
export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => { fetch('/api/products').then(...) }, []);
  ...
}

// ✅ REQUIRED — server component fetches, client component renders
// ProductListPage.tsx (Server Component — no directive needed)
export default async function ProductListPage() {
  const products = await getProducts(); // direct service call
  return <ProductList products={products} />;
}
```

---

## 6. Data Fetching — TanStack Query for Client-Side Fetching

- When data must be fetched on the client (user interactions, real-time, post-login), use **TanStack Query (`useQuery` / `useMutation`)** — never raw `fetch` inside `useEffect`.
- Every query must have a stable, descriptive `queryKey`.
- Mutations must `invalidateQueries` on success to keep the cache consistent.
- Server Components must fetch via direct service/db calls — TanStack Query is client-only.
- `queryFn` must unwrap the `data` field from the API response (see Rule 2).

```tsx
// ❌ FORBIDDEN — raw fetch in useEffect
useEffect(() => {
  fetch('/api/products').then(r => r.json()).then(setProducts);
}, []);

// ✅ REQUIRED — TanStack Query, unwrapping Rule 2 response shape
const { data: products, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: async () => {
    const res = await fetch('/api/products');
    const json = await res.json(); // { success, message, data }
    return json.data;
  },
});
```

---

## 6a. Filtered Data — Always Use URL Query Params

Any data that can be filtered, searched, sorted, or paginated **must store that state in URL query parameters**, not in `useState`. This makes every filtered view shareable: anyone with the same URL gets the same data.

### Rules
- Read filters from the URL with `useSearchParams()` — never store them in local state.
- Update filters with `router.push` / `router.replace` — never with `setState`.
- The TanStack Query `queryKey` must include the full filter object so it re-fetches automatically when the URL changes.
- The API route must read filters from `request.nextUrl.searchParams` and apply them to the DB query.
- Default values belong in the `queryFn` / service layer, not scattered across components.

```tsx
// ❌ FORBIDDEN — filter state in useState, not shareable
'use client';
export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const { data } = useQuery({
    queryKey: ['products'], // ← wrong: doesn't change when filters change
    queryFn: () => fetch('/api/products').then(r => r.json()).then(j => j.data),
  });
}

// ✅ REQUIRED — filters live in the URL, queryKey includes them
'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filters = {
    search:   searchParams.get('search')   ?? '',
    category: searchParams.get('category') ?? 'all',
    page:     searchParams.get('page')     ?? '1',
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', filters], // ← re-fetches on every filter change
    queryFn: async () => {
      const params = new URLSearchParams(filters);
      const res  = await fetch(`/api/products?${params}`);
      const json = await res.json();
      return json.data;
    },
  });

  function setFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set('page', '1'); // reset page on filter change
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      <input value={filters.search} onChange={e => setFilter('search', e.target.value)} />
      {/* render products */}
    </>
  );
}
```

### API route — read params from the URL
```ts
// app/api/products/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search   = searchParams.get('search')   ?? '';
  const category = searchParams.get('category') ?? 'all';
  const page     = Number(searchParams.get('page') ?? '1');

  const products = await getProducts({ search, category, page });
  return NextResponse.json({ success: true, message: 'Products fetched', data: products });
}
```

---

## 7. Code Quality — Readable and Maintainable

### Naming
- Files: `camelCase.ts` for logic, `PascalCase.tsx` for components.
- Variables and functions: `camelCase`.
- Types and interfaces: `PascalCase`. Interfaces must NOT be prefixed with `I`.
- Constants: `UPPER_SNAKE_CASE` for true constants, `camelCase` for config objects.

### Functions
- One function = one responsibility. If a function does two things, split it.
- Maximum function length: **30 lines**. If longer, extract helpers.
- Avoid deeply nested code. Use early returns to flatten logic.

```ts
// ❌ FORBIDDEN — deep nesting
function process(input: Input): Result {
  if (input) {
    if (input.data) {
      if (input.data.length > 0) {
        return transform(input.data);
      }
    }
  }
  return defaultResult;
}

// ✅ REQUIRED — early return
function process(input: Input): Result {
  if (!input?.data?.length) return defaultResult;
  return transform(input.data);
}
```

### Comments
- Do NOT comment what the code does — name your functions and variables well enough that it's obvious.
- Only comment **why** something is done when the reason is non-obvious (a workaround, a constraint, a gotcha).
- No commented-out dead code. Delete it — git history preserves it.

### Imports
- No circular imports.
- Import order: `node built-ins → external packages → internal absolute → internal relative`.
- Never import from a higher-level layer (e.g., `_services` must not import from `_server`).

---

## 8. Layer Boundaries — Must Not Be Crossed

| Layer | Allowed to import from |
|---|---|
| `page.tsx` | `_server`, `_components`, `_types` |
| `_components` | `_types` only |
| `_server` | `_services`, `_types` |
| `_services` | `db`, `_types`, external packages |
| `app/api/**/route.ts` | `_server`, `_types` |

Crossing these boundaries (e.g., a component calling a service directly) is forbidden.

---

## 9. Feature Folder Structure — Every Feature Is Self-Contained

Every feature must live in its own folder and contain exactly these sub-folders. No exceptions, no dumping files at the root.

### App feature (`app/(features)/<feature>/`)
```
app/
└── (features)/
    └── products/
        ├── page.tsx              ← Server Component — NEVER 'use client'
        ├── _components/          ← UI pieces for this feature only
        │   ├── ProductCard.tsx
        │   └── ProductFilters.tsx
        ├── _services/            ← Direct DB queries via Drizzle (server-only)
        │   ├── productsReadService.ts
        │   └── productsWriteService.ts
        ├── _types/               ← Re-exports of Drizzle-inferred types for this feature
        │   └── index.ts
        └── _utils/               ← Pure helper functions (formatting, validation, transforms)
            └── formatProduct.ts
```

### API feature (`app/api/<feature>/`)
```
app/
└── api/
    └── products/
        ├── route.ts              ← GET / POST handlers only — no business logic inline
        ├── [id]/
        │   └── route.ts          ← GET / PUT / DELETE by ID
        ├── _services/            ← Thin wrappers that call the feature _services above
        │   └── productsApiService.ts
        ├── _types/               ← Request/response param types for this API
        │   └── index.ts
        └── _utils/               ← Helpers specific to parsing/validating API input
            └── parseProductParams.ts
```

### Rules
- `_components` for this feature must not be imported by other features — make it shared only if truly reused.
- `_services` are server-only — never import them in client components or `'use client'` files.
- `_types` must only re-export or extend Drizzle-inferred types (see Rule 11) — no manual DB shapes.
- `_utils` must be pure functions with no side effects and no DB/API calls.
- The API `_services` call the feature `_services`; they do not duplicate DB logic.

```ts
// ❌ FORBIDDEN — logic dumped into route.ts
export async function GET(request: Request) {
  const products = await db.select().from(productsTable).where(...); // DB logic in route
  return NextResponse.json({ success: true, message: 'ok', data: products });
}

// ✅ REQUIRED — route delegates to _services
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filters = parseProductParams(searchParams);         // _utils
    const products = await getProducts(filters);              // _services
    return NextResponse.json({ success: true, message: 'Products fetched', data: products });
  } catch (error) {
    console.error('[app/api/products/route.ts > GET]', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch products' }, { status: 500 });
  }
}
```

---

## 10. Environment Variables

- Never hardcode secrets, URLs, or credentials in source code.
- All environment variables must be accessed via `process.env.VARIABLE_NAME`.
- Server-only variables (e.g., `DATABASE_URL`) must never be imported in client components.
- Add every new variable to `.env.local` (with a placeholder value) and document it here.

### Required Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |

---

## 11. Drizzle — Schema Is the Single Source of Truth

Drizzle infers TypeScript types directly from the schema. **Never duplicate those types by hand.**

- Use `typeof table.$inferSelect` for row types (reading from DB).
- Use `typeof table.$inferInsert` for insert types (writing to DB).
- Use `Partial<typeof table.$inferInsert>` for update types — never write a manual update shape.
- Use Drizzle's inferred enum types (e.g., `typeof myEnum.enumValues[number]`) — never redefine them as a separate `type` or `enum`.
- Never write a manual `interface` or `type` that mirrors a table shape — it will silently drift when the schema changes.

```ts
// ❌ FORBIDDEN — manual types that duplicate the schema
interface User { id: string; email: string; role: 'admin' | 'user'; }
interface UpdateUserDto { email?: string; role?: 'admin' | 'user'; }

// ✅ REQUIRED — every type inferred from Drizzle schema
import { users, roleEnum } from '@/db/schema';

type User       = typeof users.$inferSelect;           // full row
type NewUser    = typeof users.$inferInsert;            // insert payload
type UpdateUser = Partial<typeof users.$inferInsert>;   // update payload
type Role       = typeof roleEnum.enumValues[number];   // 'admin' | 'user'
```

- All service functions and API handlers must use these inferred types as their parameter and return types.
- If you need a subset of a row (e.g., a public-facing DTO), derive it with `Pick<User, 'id' | 'email'>` rather than writing a new type from scratch.

---

## 12. Performance — Always the First-Class Constraint

Performance is not a nice-to-have. Every line of code must be written with it in mind.

| Concern | Rule |
|---|---|
| **Rendering** | Server Components by default — every `'use client'` must justify its bundle cost |
| **Data fetching** | Fetch on the server; use `Promise.all` to parallelize — never sequential awaits that could run together |
| **Images** | Always `next/image` with correct `width`, `height`; add `priority` on above-the-fold images — never raw `<img>` |
| **Fonts** | Always `next/font` — never `<link>` or CSS `@import` for fonts |
| **DB queries** | Select only needed columns — never `SELECT *`; add indexes on every filtered/sorted column |
| **Imports** | Import only what you use — never import an entire library for one function |
| **Caching** | Use Next.js fetch cache, `unstable_cache`, or TanStack Query cache — never re-fetch unchanged data |
| **Code splitting** | Lazy-load heavy components with `dynamic(() => import(...))` when not needed on first paint |

```ts
// ❌ FORBIDDEN — sequential fetches that could be parallel
const user    = await getUser(id);
const orders  = await getOrders(id);

// ✅ REQUIRED — parallel
const [user, orders] = await Promise.all([getUser(id), getOrders(id)]);

// ❌ FORBIDDEN — raw img, no optimisation
<img src="/hero.jpg" />

// ✅ REQUIRED — next/image with dimensions and priority
<Image src="/hero.jpg" width={1200} height={600} priority alt="Hero" />
```

---

## 13. Enforcement Checklist (Before Every Commit)

- [ ] No raw `<img>` — always `next/image` with `width`, `height`, and `priority` on above-the-fold images
- [ ] No font `<link>` or CSS `@import` — always `next/font`
- [ ] No sequential `await` calls that could be `Promise.all`
- [ ] No `SELECT *` — only needed columns selected in DB queries
- [ ] Heavy components not needed on first paint are lazy-loaded with `dynamic()`
- [ ] No `any` types anywhere
- [ ] All functions have explicit return types
- [ ] Every `catch` block logs `[file > function]` + the error object
- [ ] All API routes return `{ success, message, data? }` shape — including error responses
- [ ] No file exceeds 100 lines
- [ ] `page.tsx` has no `'use client'` directive — it is always a Server Component
- [ ] No `'use client'` without a concrete reason (state, browser API, TanStack hook)
- [ ] Client-side fetching uses TanStack Query, not raw `fetch` in `useEffect`
- [ ] TanStack `queryFn` unwraps `.data` from the API response shape
- [ ] All filterable/searchable/paginated data stores state in URL query params, not `useState`
- [ ] TanStack `queryKey` includes the full filter object so it re-fetches on URL change
- [ ] API routes read filters from `request.url` / `searchParams`, not from the request body
- [ ] No manually written types/interfaces that duplicate a Drizzle table or enum
- [ ] All DB row types use `$inferSelect` / `$inferInsert` / `Partial<$inferInsert>` for updates
- [ ] Every feature has `_components/`, `_services/`, `_types/`, `_utils/` folders
- [ ] API routes contain no inline DB logic — delegated to `_services/`
- [ ] No layer boundary violations
- [ ] No hardcoded secrets or URLs
