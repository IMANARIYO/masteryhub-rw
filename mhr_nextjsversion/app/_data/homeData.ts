import type {
  HeroSlide,
  CategoryCard,
  WhyCard,
  FeaturedCourse,
  Testimonial,
  Partner,
} from "../_types/home";

export const heroSlides: HeroSlide[] = [
  {
    id: "cfi-competition",
    image: "/img/MHR1-min.jpg",
    alt: "masteryhub-technology",
    tag: "Build What Matters!",
    title: "Code For Impact Competition",
    description:
      "The Code for Impact Competition is a national digital innovation and entrepreneurship competition organized by Mastery Hub of Rwanda in collaboration with ALX Africa, and officially endorsed by the Ministry of ICT and Innovation.",
    descriptionHidden:
      "This competition seeks to mobilize Rwanda's brightest young minds to propose, design, and build tech-powered solutions to pressing societal challenges, moving beyond traditional hackathons to create an actual pipeline of sustainable, youth-led startups. The competition contributes to Rwanda's Vision 2030 by supporting a knowledge-driven, digital economy fueled by youth innovation, with the goal of incubating 50+ youth-led companies by 2029.",
    primaryCta: { label: "Know More", href: "https://codeforimpact.rw", external: true },
    secondaryCta: { label: "Join Now", href: "https://codeforimpact.rw/competition2", external: true },
  },
  {
    id: "coding-robotics",
    image: "/img/MHR3-min.jpg",
    alt: "Coding & Robotics Club",
    tag: "Enroll your school in",
    title: "CODING & ROBOTICS CLUBS",
    subtitle: "Our flagship program",
    description:
      "In partnership with the Ministry of ICT and Innovation Rwanda, we bring innovative Coding & Robotics Clubs to schools across the country. This flagship program introduces students to essential 21st-century skills through hands-on learning in programming, robotics, and computational thinking.",
    descriptionHidden:
      "We are actively seeking partnerships with schools to implement this transformative program. Whether you're a public or private institution, join us in preparing the next generation of innovators and problem-solvers.",
    primaryCta: { label: "Partner With Us", href: "https://form.jotform.com/250560825113045", external: true },
    secondaryCta: { label: "Request Program Details", href: "https://form.jotform.com/250560825113045", external: true },
  },
  {
    id: "teachers-digital",
    image: "/img/MHR2-min.jpg",
    alt: "Teachers Digital Literacy",
    tag: "Enroll your teachers in",
    title: "TEACHERS' DIGITAL LITERACY PROGRAM",
    description:
      "In collaboration with the Rwanda Basic Education Board (REB), we offer comprehensive digital literacy training designed specifically for educators. This program equips teachers with essential technology skills to enhance classroom instruction and prepare students for the digital age.",
    primaryCta: { label: "Program Curriculum", href: "/about#moreAbout" },
    secondaryCta: { label: "Enroll Teachers", href: "https://form.jotform.com/250560825113045", external: true },
  },
  {
    id: "young-masters",
    image: "/img/mhr about2.jpg",
    alt: "Young Masters Program",
    tag: "Enroll your child in",
    title: "YOUNG MASTERS AFTER SCHOOL PROGRAM",
    description:
      "Our specially designed after-school program helps young students develop essential skills for the 21st century. Through engaging, hands-on activities, students aged 8–16 explore coding fundamentals, music appreciation, language learning, and creative arts.",
    primaryCta: { label: "View Program Details", href: "#program-details" },
    secondaryCta: { label: "Enroll Now", href: "https://form.jotform.com/250560825113045", external: true },
  },
  {
    id: "sw-internship",
    image: "/img/MHR1-min.jpg",
    alt: "Software Development Internship",
    tag: "Academic Partnership Program",
    title: "SOFTWARE DEVELOPMENT ACADEMIC INTERNSHIP",
    description:
      "We partner with universities and secondary schools across Rwanda to provide structured software development internships that bridge the gap between academic learning and real-world industry experience. Our program is designed to complement classroom education with practical, hands-on training.",
    primaryCta: { label: "View Internship Details", href: "/internership" },
    secondaryCta: { label: "Partner Your Institution", href: "https://form.jotform.com/250560825113045", external: true },
  },
];

export const categoryCards: CategoryCard[] = [
  {
    id: "software-engineering",
    image: "/img/full stack.jpg",
    alt: "Software Development",
    badge: "Most Popular",
    badgeColor: "primary",
    programCount: 4,
    categoryLabel: "Tech",
    filter: "tech",
    title: "Software Engineering",
    description: "Master modern development stacks and build real-world applications",
    programs: [
      { name: "Front-End Web Dev", duration: "6 Months" },
      { name: "Back-End Web Dev", duration: "6 Months" },
      { name: "Full-stack SE", duration: "12 Months" },
      { name: "Cloud & Web hosting", duration: "6 Weeks" },
    ],
    href: "/courses#tech-courses",
  },
  {
    id: "design",
    image: "/img/graphic des.jpg",
    alt: "Graphic Design",
    badge: "Popular",
    badgeColor: "primary",
    programCount: 2,
    categoryLabel: "Design",
    filter: "tech",
    title: "Design",
    description: "Create stunning visuals and master industry-standard design tools",
    programs: [
      { name: "UI/UX Design", duration: "3 Months" },
      { name: "Graphic Design", duration: "3 Months" },
      { name: "Video Lyrics Design", duration: "4 Weeks" },
      { name: "AI in Animation", duration: "4 Weeks" },
    ],
    href: "/courses#tech-courses",
  },
  {
    id: "english",
    image: "/img/english beg.jpg",
    alt: "English Language",
    badge: "Essential",
    badgeColor: "primary",
    programCount: 3,
    categoryLabel: "Language",
    filter: "language",
    title: "English Language",
    description: "Develop fluency and cultural understanding in English by learning all 4 language skills",
    programs: [
      { name: "Beginner to pro", duration: "3 Months" },
      { name: "Fluency and Certification", duration: "8 Weeks" },
      { name: "Proficiency Exams prep", duration: "8 Weeks" },
    ],
    href: "/courses#language-courses",
  },
  {
    id: "french",
    image: "/img/french beg.jpg",
    alt: "French Language",
    badge: "Essential",
    badgeColor: "primary",
    programCount: 3,
    categoryLabel: "Language",
    filter: "language",
    title: "French Language",
    description: "Develop fluency and cultural understanding in French by learning all 4 language skills",
    programs: [
      { name: "Beginner to pro", duration: "3 Months" },
      { name: "Fluency and Certification", duration: "8 Weeks" },
      { name: "Proficiency Exams prep", duration: "8 Weeks" },
    ],
    href: "/courses#language-courses",
  },
  {
    id: "kiswahili",
    image: "/img/kiswahili beginer.jpg",
    alt: "Kiswahili Language",
    badge: "Essential",
    badgeColor: "primary",
    programCount: 3,
    categoryLabel: "Language",
    filter: "language",
    title: "Kiswahili Language",
    description: "Develop fluency and cultural understanding in Kiswahili by learning all 4 language skills",
    programs: [
      { name: "Beginner to pro", duration: "3 Months" },
      { name: "Fluency and Certification", duration: "8 Weeks" },
      { name: "Proficiency Exams prep", duration: "8 Weeks" },
    ],
    href: "/courses#language-courses",
  },
  {
    id: "tech-literacy",
    image: "/img/computer lit.jpg",
    alt: "Technology Literacy",
    badge: "Essential",
    badgeColor: "secondary",
    programCount: 4,
    categoryLabel: "Tech",
    filter: "tech",
    title: "Technology Literacy",
    description: "Build foundational digital skills for the modern workplace",
    programs: [
      { name: "Computer Literacy", duration: "4 Months" },
      { name: "ICT Integration", duration: "2 Months" },
      { name: "AI Essential", duration: "6 Weeks" },
    ],
    href: "/courses#tech-courses",
  },
  {
    id: "piano",
    image: "/img/piano class.jpg",
    alt: "Piano Classes",
    badge: "Popular",
    badgeColor: "success",
    programCount: 3,
    categoryLabel: "Music",
    filter: "music",
    title: "Piano Classes",
    description: "Master the piano from basic chords to advanced compositions with our structured programs",
    programs: [
      { name: "Beginner Piano", duration: "12 Weeks" },
      { name: "Intermediate Piano", duration: "16 Weeks" },
      { name: "Classical Mastery", duration: "6 Months" },
    ],
    href: "/courses#music-courses",
  },
  {
    id: "guitar",
    image: "/img/Accostic guitar.jpg",
    alt: "Guitar Classes",
    badge: "New",
    badgeColor: "warning",
    programCount: 4,
    categoryLabel: "Music",
    filter: "music",
    title: "Guitar Classes",
    description: "From strumming basics to advanced fingerstyle techniques, become the guitarist you want to be",
    programs: [
      { name: "Acoustic Guitar", duration: "8 Weeks" },
      { name: "Solo Guitar", duration: "12 Weeks" },
      { name: "Bass Guitar", duration: "10 Weeks" },
    ],
    href: "/courses#music-courses",
  },
  {
    id: "drums",
    image: "/img/drums class.jpg",
    alt: "Drums Classes",
    badge: "Intensive",
    badgeColor: "danger",
    programCount: 3,
    categoryLabel: "Music",
    filter: "music",
    title: "Drums Classes",
    description: "Develop rhythm, coordination and musicality through comprehensive drumming programs",
    programs: [
      { name: "Drum Kit Basics", duration: "4 Weeks" },
      { name: "Advanced Techniques", duration: "12 Weeks" },
    ],
    href: "/courses#music-courses",
  },
];

export const whyCards: WhyCard[] = [
  {
    id: "instructors",
    icon: "graduation-cap",
    title: "Skilled Instructors",
    description:
      'As saying goes "A good Instructor explains, a superior demonstrates while the greatest inspires"',
  },
  {
    id: "career",
    icon: "globe",
    title: "Career Guidance",
    description:
      "We are not leaving that seed of skills we planted in you rot, no… We follow up your growth",
  },
  {
    id: "doing",
    icon: "wrench",
    title: "Learn By Doing",
    description:
      "Come and learn by working on real world projects that will sharpen your skills",
  },
  {
    id: "skills",
    icon: "book-open",
    title: "On-demand Skills",
    description:
      "We are not packing you with left-behind technologies. Only the best",
  },
];

export const featuredCourses: FeaturedCourse[] = [
  {
    id: "full-stack-dev",
    image: "/img/full stack.jpg",
    alt: "Web Development at MasteryHub Rwanda",
    badge: "Popular",
    badgeColor: "bg-primary",
    duration: "12 Months",
    level: "Beginner",
    title: "Full-Stack Development",
    description:
      "Master modern web technologies including HTML5, CSS3, JavaScript and popular frameworks.",
    rating: 4,
    reviewCount: 24,
    enrollUrl: "https://form.jotform.com/250560825113045",
    details: {
      overview:
        "A comprehensive 12-month program covering the full web development stack from HTML/CSS fundamentals to deploying production applications using modern frameworks.",
      curriculum: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript ES6+",
        "React.js & Next.js",
        "Node.js & Express",
        "Database Design (SQL & NoSQL)",
        "Cloud Deployment & DevOps Basics",
      ],
      requirements: ["Basic computer literacy", "Dedication and consistency"],
      outcomes: [
        "Build complete full-stack web applications",
        "Ready for junior developer roles",
        "Portfolio of real-world projects",
        "Industry-recognized certificate",
      ],
    },
  },
  {
    id: "ict-literacy",
    image: "/img/computer lit.jpg",
    alt: "ICT Literacy at MasteryHub",
    badge: "New",
    badgeColor: "bg-success",
    duration: "3 Months",
    level: "All Levels",
    title: "IsangeMO Program",
    description:
      "Essential digital skills for the modern workplace including office software, internet safety, and basic troubleshooting.",
    rating: 5,
    reviewCount: 18,
    enrollUrl: "https://form.jotform.com/250560825113045",
    details: {
      overview:
        "The IsangeMO program equips participants of all backgrounds with practical digital skills needed to thrive in today's technology-driven workplace.",
      curriculum: [
        "Microsoft Office Suite (Word, Excel, PowerPoint)",
        "Internet Safety & Digital Ethics",
        "Email & Professional Communication",
        "Basic Hardware Troubleshooting",
        "Cloud Tools (Google Workspace)",
      ],
      requirements: ["No prior tech experience needed"],
      outcomes: [
        "Confident use of office productivity tools",
        "Safe and effective internet navigation",
        "Improved workplace productivity",
        "Digital literacy certificate",
      ],
    },
  },
  {
    id: "english-fluency",
    image: "/img/english beg.jpg",
    alt: "English at MasteryHub",
    badge: "Special Offer",
    badgeColor: "bg-info",
    duration: "3 Months",
    level: "Intermediate",
    title: "English Language",
    description:
      "Improve your English communication skills for professional and academic success with our immersive program.",
    rating: 3,
    reviewCount: 12,
    enrollUrl: "https://form.jotform.com/250560825113045",
    details: {
      overview:
        "An immersive 3-month program designed to build fluent English communication skills across all four language skills: speaking, listening, reading, and writing.",
      curriculum: [
        "Speaking & Pronunciation",
        "Listening Comprehension",
        "Reading & Vocabulary Building",
        "Grammar & Writing Skills",
        "Business English & Professional Communication",
      ],
      requirements: ["Basic English reading ability"],
      outcomes: [
        "Fluent professional English communication",
        "Confidence in academic and business settings",
        "Preparation for international exams (IELTS, TOEFL)",
        "Language proficiency certificate",
      ],
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "peter-drucker",
    name: "Peter Drucker",
    role: "Author",
    avatar: "/avatar-placeholder.svg",
    quote:
      "The best way to predict the future is to create it. Technology is evolving every day, and the ones who stay ahead are the ones who never stop learning. Join us, and let's build something incredible together.",
  },
  {
    id: "bjarne-stroustup",
    name: "Bjarne Stroustrup",
    role: "C++ Creator",
    avatar: "/img/Stroustup Bjarne.jpg",
    quote:
      "The future belongs to those who build it. Every line of code is a step toward innovation, every challenge an opportunity to create something extraordinary. Technology isn't just about solving problems—it's about shaping possibilities.",
  },
];

export const partners: Partner[] = [
  {
    id: "ict-chamber",
    name: "ICT Chamber Rwanda",
    logo: "/img/ict-chamber-masteryhub.jpg",
    href: "https://www.ictchamber.rw/",
    alt: "ICT Chamber Rwanda logo",
  },
  {
    id: "bk-music",
    name: "BK Music Limited",
    logo: "/img/BK LTD.png",
    href: "https://www.youtube.com/channel/UCNyYehvjqp7uos7izEvnD2A",
    alt: "BK Music Limited logo",
  },
  {
    id: "alx",
    name: "ALX Africa",
    logo: "/img/ALX.jpeg",
    href: "https://www.alxafrica.com/",
    alt: "ALX Africa logo",
  },
  {
    id: "1mrc",
    name: "One Million Rwandan Coders",
    logo: "/img/1MRC.jpg",
    href: "https://mcoders.minict.gov.rw/",
    alt: "One Million Rwandan Coders logo",
  },
  {
    id: "minict",
    name: "Ministry of ICT and Innovation",
    logo: "/img/MINICT.png",
    href: "https://www.minict.gov.rw/",
    alt: "Ministry of ICT and Innovation logo",
  },
];
