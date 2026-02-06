(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const categoryItems = document.querySelectorAll('.category-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter categories
            categoryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Force video to play (some browsers require this)
    const video = document.querySelector('.video-background video');
    if(video) {
        video.play().catch(e => {
            console.log("Video autoplay prevented, showing fallback");
            document.querySelector('.fallback-image').style.display = 'none';
        });
    }
    
    // Pause video when tab is inactive
    document.addEventListener('visibilitychange', function() {
        if(video) {
            if(document.hidden) {
                video.pause();
            } else {
                video.play();
            }
        }
    });
});

// Logo hover effects
document.querySelectorAll('.partner-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = '';
        item.style.boxShadow = '';
    });
});

// Auto-adjust speed based on container width
function adjustScrollSpeed() {
    const container = document.querySelector('.partner-logos');
    const track = document.querySelector('.partner-track');
    const speed = track.scrollWidth / 1000; // Adjust divisor to change speed
    
    document.documentElement.style.setProperty('--scroll-speed', `${speed}s`);
}

window.addEventListener('load', adjustScrollSpeed);
window.addEventListener('resize', adjustScrollSpeed);

 // Course details data for all courses
        const courseDetails = {
            // Technology Programs
            "full-stack-dev": {
                title: "Full Stack Development",
                description: "Comprehensive training in both front-end and back-end technologies to build complete web applications.",
                duration: "48  Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "HTML5, CSS3, JavaScript fundamentals",
                    "React.js frontend framework",
                    "Node.js and Express backend",
                    "MongoDB database integration",
                    "RESTful API design",
                    "Authentication and security",
                    "Deployment strategies"
                ],
                syllabus: [
                    "Week 1-12: Frontend Development (HTML, CSS, JavaScript)",
                    "Week 13-25: React.js Framework",
                    "Week 26-35: Backend with Node.js/Express",
                    "Week 36-48: Database and Final Project"
                ],
                requirements: [
                    "Basic computer skills",
                    "No prior programming experience required",
                    "Laptop with minimum 4GB RAM"
                ],
                image: "full stack.jpg"
            },
            "front-end-dev": {
                title: "Front-End Web Development",
                description: "Learn HTML5, CSS3, JavaScript and React to build modern, responsive websites.",
                duration: "24 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Responsive web design principles",
                    "JavaScript programming fundamentals",
                    "React.js framework",
                    "UI/UX best practices",
                    "Web performance optimization",
                    "Cross-browser compatibility"
                ],
                syllabus: [
                    "Week 1-8: HTML5 & CSS3 Fundamentals",
                    "Week 9-14: JavaScript Programming",
                    "Week 15-20: React.js Framework",
                    "Week 21-24: Advanced Frontend Techniques"
                ],
                requirements: [
                    "Basic computer literacy",
                    "Interest in web design",
                    "Laptop with minimum 4GB RAM"
                ],
                image: "front end.jpg"
            },
            "back-end-dev": {
                title: "Back-End Development",
                description: "Master Node.js, Express, and MongoDB to build powerful server-side applications.",
                duration: "24 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Node.js runtime environment",
                    "Express framework",
                    "MongoDB database management",
                    "API development",
                    "Authentication systems",
                    "SQL",
                    "Server deployment"
                ],
                syllabus: [
                    "Week 1-8: JavaScript for Backend",
                    "Week 9-14: Node.js/Express.js Fundamentals",
                    "Week 15-20: Database Integration",
                    "Week 21-24: API Development"
                ],
                requirements: [
                    "Basic JavaScript knowledge",
                    "Understanding of web concepts",
                    "Laptop with minimum 4GB RAM"
                ],
                image: "back end.jpg"
            },
            "ict-literacy": {
                title: "Computer Literacy & Digital Skills",
                description: "Essential computer skills for the modern workplace and academic success.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Computer fundamentals",
                    "Microsoft Office proficiency",
                    "Internet and email skills",
                    "Basic AI concepts",
                    "Digital communication",
                    "Online safety and security"
                ],
                syllabus: [
                    "Week 1: Computer Basics",
                    "Week 2-8: Microsoft Office",
                    "Week 9-10: Internet and email skills",
                    "Week 11-12: Basic AI concepts"
                ],
                requirements: [
                    "No prior experience needed",
                    "Access to a computer"
                ],
                image: "computer lit.jpg"
            },
            "graphic-design": {
                title: "Graphic Design",
                description: "Learn industry-standard tools and principles for creating professional visual designs.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Adobe Photoshop skills",
                    "Adobe Illustrator proficiency",
                    "Design principles and theory",
                    "Branding basics",
                    "Typography fundamentals",
                    "Color theory application"
                ],
                syllabus: [
                    "Week 1-2: Design Principles",
                    "Week 3-7: Photoshop Essentials",
                    "Week 8-10: Illustrator Techniques",
                    "Week 11-12: Final Design Project"
                ],
                requirements: [
                    "Creative mindset",
                    "Access to Adobe Creative Cloud (trial available)",
                    "Access to a computer"
                ],
                image: "graphic des.jpg"
            },
            "cloud-computing": {
                title: "Cloud Computing Basics",
                description: "Introduction to cloud services, deployment models, and cloud security fundamentals.",
                duration: "6 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Cloud service models (IaaS, PaaS, SaaS)",
                    "AWS fundamentals",
                    "Web hosting & Deloyment",
                    "Cloud security principles",
                    "Virtualization concepts",
                    "Cloud deployment strategies"
                ],
                syllabus: [
                    "Week 1: Cloud Concepts",
                    "Week 2: AWS Overview",
                    "Week 3: Web hosting & Deloyment",
                    "Week 4: Cloud Security",
                    "Week 5-6: Practical Applications"
                ],
                requirements: [
                    "Basic networking knowledge",
                    "Understanding of operating systems",
                    "Access to a computer"
                ],
                image: "cloud comp.jpg"
            },
            "ai-essentials": {
                title: "AI Essentials",
                description: "Introduction to artificial intelligence concepts and practical applications.",
                duration: "4 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "AI fundamentals",
                    "Machine learning basics",
                    "AI For work",
                    "AI Monetization",
                    "Real-world AI applications",
                    "Prompt perfectionism",
                    "Ethical considerations in AI"
                ],
                syllabus: [
                    "Week 1: AI Concepts",
                    "Week 2: Machine Learning Basics",
                    "Week 3: AI for work & Monetization",
                    "Week 4: Practical Applications"
                ],
                requirements: [
                    "Interest in emerging technologies"
                ],
                image: "AI ESSENTIAL.jpg"
            },
            "english-mastery": {
                title: "English Language Mastery",
                description: "Comprehensive training in reading, writing, speaking and listening skills.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Grammar fundamentals",
                    "Vocabulary building",
                    "Conversation practice",
                    "Pronunciation training",
                    "Reading comprehension",
                    "Writing skills"
                ],
                syllabus: [
                    "listening Skills",
                    "Speaking Skills",
                    "Reading skills",
                    "Writing skills"
                ],
                requirements: [
                    "Willingness to practice"
                    
                ],
                image: "english beg.jpg"
            },
            "english-fluency": {
                title: "English proficiency",
                description: "Develop professional communication skills for meetings, presentations, and workplace interactions.",
                duration: "8 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Professional vocabulary",
                    "Business writing skills",
                    "Presentation techniques",
                    "Meeting participation",
                    "Pitching Techniques",
                    "Fluency in communication"
                ],
                syllabus: [
                    "Professional vocabulary",
                    "Business writing skills",
                    "Presentation techniques",
                    "Meeting participation",
                    "Pitching Techniques",
                    "Fluency in communication"
                ],
                requirements: [
                    "Intermediate English level",
                    "Professional context"
                ],
                image: "english pro.jpg"
            },
            "business-english": {
                title: "Business English Communication",
                description: "Specialized English training for professional communication.",
                duration: "8 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Business terminology",
                    "Report writing",
                    "Negotiation language",
                    "Presentation skills",
                    "Cross-cultural communication",
                    "Professional networking"
                ],
                syllabus: [
                    "Week 1-2: Business Correspondence",
                    "Week 3-4: Meetings & Negotiations",
                    "Week 5-6: Presentations",
                    "Week 7-8: Case Studies"
                ],
                requirements: [
                    "Intermediate English",
                    "Professional environment"
                ],
                image: "business-english.jpg"
            },
            "french-fluency": {
                title: "French language",
                description: "Develop practical communication skills for business and travel.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Basic to advanced French",
                    "Business communication",
                    "Cultural understanding",
                    "DELF exam preparation",
                    "Travel vocabulary",
                    "Everyday conversations"
                ],
                syllabus: [
                    "listening Skills",
                    "Speaking Skills",
                    "Reading skills",
                    "Writing skills"
                ],
                requirements: [
                    "No prior French needed",
                    "Commitment to practice"
                ],
                image: "french beg.jpg"
            },
            "french-tourism": {
                title: "French Proficiency",
                description: "Language skills especifically for professionals.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Hospitality vocabulary",
                    "Customer service phrases",
                    "Cultural awareness",
                    "Situation simulations",
                    "Travel industry terms",
                    "Guest relations"
                ],
                syllabus: [
                    "Professional vocabulary",
                    "Business writing skills",
                    "Presentation techniques",
                    "Meeting participation",
                    "Pitching Techniques",
                    "Fluency in communication"
                ],
                requirements: [
                    "Basic French helpful"
                ],
                image: "french pro.jpg"
            },
            "kiswahili-beginners": {
                title: "Kiswahili language",
                description: "Essential communication skills for business and daily interactions.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Basic vocabulary",
                    "Grammar essentials",
                    "Conversation practice",
                    "Cultural context",
                    "Everyday phrases",
                    "Practical communication"
                ],
                syllabus: [
                    "listening Skills",
                    "Speaking Skills",
                    "Reading skills",
                    "Writing skills"
                ],
                requirements: [
                    "No prior Swahili needed",
                    "Interest in East African culture"
                ],
                image: "kiswahili beginer.jpg"
            },
            "kiswahili-advanced": {
                title: "Advanced Proficiency",
                description: "For those looking to achieve fluency in Kiswahili for professional use.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Advanced grammar",
                    "Business communication",
                    "Formal writing",
                    "Media comprehension",
                    "Professional vocabulary",
                    "Regional variations"
                ],
                syllabus: [
                    "Professional vocabulary",
                    "Business writing skills",
                    "Presentation techniques",
                    "Meeting participation",
                    "Pitching Techniques",
                    "Fluency in communication"
                ],
                requirements: [
                    "Intermediate Kiswahili",
                    "Professional context"
                ],
                image: "kiswahili pro.jpg"
            },
            "piano-mastery": {
                title: "Piano Mastery Program",
                description: "From basic chords to advanced compositions with our structured piano training program.",
                duration: "24 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Music theory fundamentals",
                    "Sight-reading skills",
                    "Chord progressions",
                    "Performance techniques",
                    "Ear training",
                    "Repertoire development"
                ],
                syllabus: [
                    "Week 1-4: Piano Basics",
                    "Week 5-12: Music Theory",
                    "Week 12-20: Technique Development",
                    "Week 21-24: Performance Preparation"
                ],
                requirements: [
                    "Access to piano/keyboard",
                    "Regular practice time"
                ],
                image: "piano class.jpg"
            },
            "guitar-training": {
                title: "Acoustic Guitar Training",
                description: "From strumming basics to advanced fingerstyle techniques.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Basic chords and strumming",
                    "Fingerstyle techniques",
                    "Music theory for guitar",
                    "Song arrangement",
                    "Improvisation basics",
                    "Performance skills"
                ],
                syllabus: [
                    "Week 1-3: Guitar Fundamentals",
                    "Week 4-6: Chord Progressions",
                    "Week 7-9: Fingerstyle Techniques",
                    "Week 10-12: Song Performance"
                ],
                requirements: [
                    "Own guitar",
                    "Commitment to practice"
                ],
                image: "Accostic guitar.jpg"
            },
            "drumming-fundamentals": {
                title: "Drumming Fundamentals",
                description: "Develop rhythm, coordination and musicality through drumming.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Basic drum patterns",
                    "Rhythm development",
                    "Drum set techniques",
                    "Playing with music",
                    "Groove development",
                    "Basic music reading"
                ],
                syllabus: [
                    "Week 1-4: Basic Rhythms",
                    "Week 4-8: Drum Set Coordination",
                    "Week 9-11: Playing with Music",
                    "Week 11-12: Performance Techniques"
                ],
                requirements: [
                    "Access to drum kit",
                    "Sense of rhythm"
                ],
                image: "drums class.jpg"
            },
            "bass-guitar": {
                title: "Solo Guitar",
                description: "Master the foundational instrument that drives the rhythm section.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Solo lines creation",
                    "Fingerstyle techniques",
                    "Music theory for solo",
                    "Playing in a band",
                    "development"
                ],
                syllabus: [
                    "Week 1-3: solo Fundamentals",
                    "Week 4-6: Development",
                    "Week 7-8: Music Theory",
                    "Week 9-12: Band Context"
                ],
                requirements: [
                    "Own guitar",
                    "Basic rhythm sense"
                ],
                image: "solo guitar.jpg"
            },
            "music-production": {
                title: "Bass Guitar class",
                description: "Master the foundational instrument that drives the rhythm section.",
                duration: "12 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "Bass lines creation",
                    "Fingerstyle techniques",
                    "Music theory for bass",
                    "Playing in a band",
                    "Groove development",
                    "Slap bass basics"
                ],
                syllabus: [
                    "Week 1-3: Bass Fundamentals",
                    "Week 4-6: Groove Development",
                    "Week 7-8: Music Theory",
                    "Week 9-12: Band Context"
                ],
                requirements: [
                    "Own guitar",
                    "Basic rhythm sense"
                ],
                image: "bass guitar.jpg"
            },
            "vocal-training": {
                title: "Music production",
                description: "Learn to create professional music using digital audio workstations.",
                duration: "16 Weeks",
                price: "Scholarship Available",
                outcomes: [
                    "MIDI Control",
                    "Beat making",
                    "Mixing and Mastering",
                    "Vocal arrangements"
                ],
                syllabus: [
                    "Week 1-4: Beat making",
                    "Week 5-6: Recording",
                    "Week 6-14: Mixing and Mastering",
                    "Week 14-16: Pro arrangements"
                ],
                requirements: [
                    "Willingness to learn",
                    "Instruments skills"
                ],
                image: "music pro.jpg"
            },
            // Add these to your existing courseDetails object
"software-eng-fundamentals": {
    title: "Software Engineering Fundamentals",
    description: "FREE introductory course covering core software engineering principles, development methodologies, and industry best practices. Perfect for beginners starting their software development journey.",
    duration: "8 Weeks",
    price: "FREE - No cost",
    outcomes: [
        "Understanding of Software Development Life Cycle (SDLC)",
        "Agile and Scrum methodologies",
        "Version control with Git and GitHub",
        "Clean code principles and best practices",
        "Basic software design patterns",
        "Documentation and collaboration tools",
        "Introduction to DevOps concepts"
    ],
    syllabus: [
        "Week 1: Introduction to Software Engineering",
        "Week 2: SDLC Methodologies (Waterfall, Agile, DevOps)",
        "Week 3: Version Control with Git & GitHub",
        "Week 4: Clean Code Principles",
        "Week 5: Software Design Patterns Basics",
        "Week 6: Testing Fundamentals",
        "Week 7: Documentation & Collaboration",
        "Week 8: Capstone Project"
    ],
    requirements: [
        "Basic computer literacy",
        "No prior programming experience required",
        "Internet access",
        "Commitment to complete the course"
    ],
    image: "software-eng-fundamentals.jpg"
},
"cyber-security": {
    title: "Cyber Security",
    description: "Comprehensive cybersecurity training covering threat prevention, network security, encryption, and security implementation techniques to protect digital assets.",
    duration: "16 Weeks",
    price: "Scholarship Available",
    outcomes: [
        "Network security fundamentals",
        "Threat detection and prevention techniques",
        "Encryption and cryptography",
        "Firewall configuration and management",
        "Vulnerability assessment",
        "Incident response planning",
        "Security policies and compliance",
        "Ethical hacking basics"
    ],
    syllabus: [
        "Week 1-3: Cybersecurity Fundamentals",
        "Week 4-6: Network Security & Protocols",
        "Week 7-9: Cryptography & Encryption",
        "Week 10-12: Threat Detection & Prevention",
        "Week 13-14: Security Tools & Technologies",
        "Week 15-16: Capstone Security Project"
    ],
    requirements: [
        "Basic understanding of computer networks",
        "Familiarity with operating systems",
        "Analytical thinking skills",
        "Laptop with minimum 4GB RAM"
    ],
    image: "cyber-security.jpg"
},
"software-testing": {
    title: "Software Testing",
    description: "Master software testing methodologies, automation tools, and quality assurance processes to ensure software reliability and performance.",
    duration: "12 Weeks",
    price: "Scholarship Available",
    outcomes: [
        "Manual testing techniques and strategies",
        "Test automation with Selenium WebDriver",
        "Performance and load testing",
        "API testing with Postman",
        "Mobile application testing",
        "Test management tools (JIRA, TestRail)",
        "Quality assurance best practices",
        "Bug tracking and reporting"
    ],
    syllabus: [
        "Week 1-3: Software Testing Fundamentals",
        "Week 4-6: Manual Testing Techniques",
        "Week 7-9: Automation Testing with Selenium",
        "Week 10: API & Performance Testing",
        "Week 11: Mobile & Cross-browser Testing",
        "Week 12: Final Testing Project"
    ],
    requirements: [
        "Basic understanding of software development",
        "Logical thinking and attention to detail",
        "Knowledge of any programming language (helpful but not required)",
        "Laptop with minimum 4GB RAM"
    ],
    image: "software-testing.jpg"
}
        };

        // Function to show course details in modal
function showCourseDetails(courseId) {
    const course = courseDetails[courseId];
    if (!course) {
        console.error("Course details not found for:", courseId);
        return;
    }
    
    // Build the modal content
    let modalContent = `
        <div class="row">
            <div class="col-md-6">
                <img src="img/${course.image || 'course-default.jpg'}" class="img-fluid rounded mb-3" alt="${course.title}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <div class="d-flex justify-content-between m-3">
                    <span class="badge bg-primary p-3"><i class="fas fa-clock me-1"></i> ${course.duration}</span>
                    <h5 class="text-primary mb-0">${course.price}</h5>
                </div>
            </div>
            <div class="col-md-6">
                <h5><i class="fas fa-check-circle text-primary me-2"></i>Learning   Outcomes</h5>
                <ul class="program-outcomes mb-4">`;
    
    course.outcomes.forEach(outcome => {
        modalContent += `<li>${outcome}</li>`;
    });
    
    modalContent += `
                </ul>
                
                <h5><i class="fas fa-book text-primary me-2"></i>Course Syllabus</h5>
                <ul class="program-outcomes mb-4">`;
    
    course.syllabus.forEach(item => {
        modalContent += `<li>${item}</li>`;
    });
    
    modalContent += `
                </ul>
                <h5><i class="fas fa-clipboard-check text-primary me-2"></i>Requirements</h5>
                <ul class="program-outcomes">`;
    
    course.requirements.forEach(req => {
        modalContent += `<li>${req}</li>`;
    });
    
    modalContent += `
                </ul>
            </div>
        </div>
    `;
    
    // Set the modal content
    document.getElementById('courseDetailsContent').innerHTML = modalContent;
    document.getElementById('courseDetailsModalLabel').textContent = course.title;
    
    // Get the modal element
    const modalElement = document.getElementById('courseDetailsModal');
    
    // Create modal instance if it doesn't exist
    if (!modalElement._modal) {
        modalElement._modal = new bootstrap.Modal(modalElement);
    }
    
    // Show the modal
    modalElement._modal.show();
    
    // Clean up when modal is hidden
    modalElement.addEventListener('hidden.bs.modal', function() {
        // Remove any leftover backdrop
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach(backdrop => backdrop.remove());
        
        // Reset body styles
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
        document.body.classList.remove('modal-open');
    });
    
    // Ensure backdrop is visible
    setTimeout(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.style.opacity = '0.5';
        }
    }, 10);
}
        /// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle all detail buttons
    document.querySelectorAll('[data-course-id]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = this.getAttribute('data-course-id');
            showCourseDetails(courseId);
        });
    });

    // Initialize modal cleanup handler
    const modalElement = document.getElementById('courseDetailsModal');
    if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', function() {
            // Clean up any leftover modal artifacts
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(backdrop => backdrop.remove());
            
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0';
            document.body.classList.remove('modal-open');
        });
    }

            // Initialize counter animation
            if (typeof $.fn.counterUp !== 'undefined') {
                $('[data-toggle="counter-up"]').counterUp({
                    delay: 10,
                    time: 1000
                });
            }
            
            // Initialize testimonial carousel
            if (typeof $.fn.owlCarousel !== 'undefined') {
                $('.testimonial-carousel').owlCarousel({
                    autoplay: true,
                    smartSpeed: 1000,
                    margin: 30,
                    dots: true,
                    loop: true,
                    center: true,
                    responsive: {
                        0: { items: 1 },
                        576: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 }
                    }
                });
            }

            // Back to top button
            window.addEventListener('scroll', function() {
                const backToTop = document.querySelector('.back-to-top');
                if (window.scrollY > 300) {
                    backToTop.style.display = 'block';
                } else {
                    backToTop.style.display = 'none';
                }
            });

            // Smooth scroll for back to top
            document.querySelector('.back-to-top').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Form submission handler
            const inquiryForm = document.getElementById('course-inquiry-form');
            if (inquiryForm) {
                inquiryForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your inquiry! We will contact you shortly.');
                    this.reset();
                });
            }
        });

        // Add before </body>
    document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'img/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available';
        };
    });
});
// Debugging script for images
document.addEventListener('DOMContentLoaded', function() {
    console.log("Checking all images...");
    
    document.querySelectorAll('img').forEach(img => {
        // Log each image source
        console.log(`Image src: ${img.src}`);
        
        // Add error handling
        img.onerror = function() {
            console.error(`IMAGE FAILED TO LOAD: ${this.src}`);
            this.style.border = "3px solid red"; // Visual indicator
        };
        
        // Add success indicator
        img.onload = function() {
            console.log(`Image loaded: ${this.src}`);
            this.style.border = "3px solid green";
        };
    });
});

// Portfolio Filter
    $(document).ready(function(){
        // Show all items initially
        $('.portfolio-item').addClass('show');
        
        // Filter items when button is clicked
        $('.filter-buttons button').click(function(){
            $('.filter-buttons button').removeClass('active');
            $(this).addClass('active');
            
            var filterValue = $(this).attr('data-filter');
            
            $('.portfolio-item').removeClass('show');
            
            if(filterValue === 'all') {
                $('.portfolio-item').addClass('show');
            } else {
                $('.portfolio-item[data-category="' + filterValue + '"]').addClass('show');
            }
        });
    });