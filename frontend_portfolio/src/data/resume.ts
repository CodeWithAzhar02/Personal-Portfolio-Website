export const resumeData = {
    name: "Ajaharuddin Ansari",
    role: "Full-Stack Developer",
    contact: {
        email: "ajhar11112222@gmail.com",
        phone: "+91-7752856672",
        linkedin: "https://linkedin.com/in/AzharAli02",
        github: "https://github.com/CodeWithAzhar02",
        location: "India"
    },
    summary: "Full-Stack Developer with hands-on experience in building scalable EdTech and E-Commerce platforms using React, Node.js, and MongoDB. Skilled in secure authentication, cloud deployment, and delivering production-ready applications.",
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React / Next.js", level: 95, icon: "/skills/react.png" },
                { name: "HTML", level: 95, icon: "/skills/html.png" },
                { name: "CSS", level: 95, icon: "/skills/css.png" },
                { name: "JavaScript", level: 90, icon: "/skills/javascript.png" },
                { name: "Tailwind CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Framer Motion", level: 85, icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git", level: 90, icon: "/skills/git.png" },
                { name: "GitHub", level: 90, icon: "/skills/github.png" },
                { name: "Vercel", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
                { name: "Firebase", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "Render", level: 80, icon: "https://cdn.simpleicons.org/render/white" }
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "StudyCircle-EdTech Platform",
            category: "Web App",
            description: "A Smart Learning Management System (SLMS) featuring interactive course delivery and secure user management.",
            tech: ["React.js", "Redux", "Node.js", "MongoDB"],
            links: { demo: "https://studywith.vercel.app/", github: "https://github.com/CodeWithAzhar02/StudyCircle" },
            image: "/projects/Logo-Full-Light.png"
        },
        {
            id: 2,
            title: "E-Commerce Product Page",
            category: "Web App",
            description: "Developed a dynamic product listing page with advanced filtering features (category, price range, keyword) and instant updates.",
            tech: ["React", "MongoDB"],
            links: { demo: "#", github: "https://github.com/CodeWithAzhar02" },
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" // Placeholder
        }
    ],
    achievements: [
        { name: "Internship", issuer: "UniConverge Technologies Pvt. Ltd.", image: "/achievements/internship_UniConverge Technologies Pvt. Ltd..png" },
        { name: "Cloud Technologies", issuer: "Infosys Springboard", image: "/achievements/Infosys_Cloud Technologies.png" },
        { name: "Basics of Python", issuer: "Infosys Springboard", image: "/achievements/Infosys.png" },
        { name: "Coding Development", issuer: "Deloitte", image: "/achievements/Coding Development_Deloitte.png" },
        { name: "Detect Objects in Images", issuer: "Microsoft", image: "/achievements/Detect objects in images.png" },
        { name: "Classify Images", issuer: "Microsoft", image: "/achievements/Classify images.png" },
        { name: "Analyze Video", issuer: "Microsoft", image: "/achievements/Analyze video.png" },
        { name: "Face Recognition", issuer: "Microsoft", image: "/achievements/Detect, analyze, and recognize faces.png" },
        { name: "Read Text in Images", issuer: "Microsoft", image: "/achievements/Read text in images.png" },
        { name: "AI Concepts", issuer: "Microsoft", image: "/achievements/Introduction to AI concepts.png" }
    ],
    timeline: [
        {
            year: "2025",
            title: "Internship",
            company: "UniConverge Technologies Pvt. Ltd.",
            description: "Gained hands-on experience with modern web technologies."
        },
        {
            year: "2024",
            title: "Full-Stack Developer",
            company: "Freelance",
            description: "Building scalable web applications and enhancing user experiences."
        }
    ]
};
