const present = new Date().getFullYear();

export type SkillType = 'Language' | 'Framework' | 'Library' | 'Other';

export type ContactLink = {
    title: string;
    href: string;
};

export type Skill = {
    title: string;
    progress: number;
    years: number;
    type: SkillType;
};

export type ExperienceItem = {
    companyName: string;
    title: string;
    description: string[];
    location: string;
    startedOn: number;
    finishedOn?: number;
    page?: number;
    volunteer?: boolean;
};

export type Certification = {
    title: string;
    source: string;
    issuedYear: number;
    expiresYear?: number;
};

export type ResumeData = {
    title: string;
    subtitle: string;
    contactLinks: ContactLink[];
    introduction: string;
    skills: Skill[];
    experience: ExperienceItem[];
    skillTypes: SkillType[];
    certifications: Certification[];
};

export default {
    title: 'Brian S. Reed',
    subtitle: 'Front-End Architect · Staff Engineer',
    contactLinks: [
        {
            title: 'me@iambrian.com',
            href: 'mailto:me@iambrian.com',
        },
        {
            title: 'iambrian.com',
            href: 'https://iambrian.com',
        },
        {
            title: 'LinkedIn/iambriansreed',
            href: 'https://www.linkedin.com/in/iambriansreed/',
        },
        {
            title: 'GitHub/iambriansreed',
            href: 'https://github.com/iambriansreed',
        },
    ],

    introduction:
        'Front-End Architect and Staff Engineer with 15+ years of experience designing scalable, high-quality UI systems. Deep expertise in React, TypeScript, and design systems, with a strong focus on accessibility, performance, and developer experience. Known for translating ambiguous product requirements into durable technical architecture and mentoring engineers across teams.',

    skillTypes: ['Language', 'Framework', 'Library', 'Other'],

    skills: [
        // Languages
        {
            title: 'JavaScript',
            progress: 95,
            years: 15,
            type: 'Language',
        },
        {
            title: 'TypeScript',
            progress: 95,
            years: 8,
            type: 'Language',
        },
        {
            title: 'HTML',
            progress: 98,
            years: 15,
            type: 'Language',
        },
        {
            title: 'CSS / SCSS',
            progress: 95,
            years: 15,
            type: 'Language',
        },
        {
            title: 'GraphQL',
            progress: 80,
            years: 5,
            type: 'Language',
        },

        // Frameworks
        {
            title: 'React',
            progress: 95,
            years: 9,
            type: 'Framework',
        },
        {
            title: 'Angular',
            progress: 85,
            years: 6,
            type: 'Framework',
        },
        {
            title: 'React Native',
            progress: 80,
            years: 2,
            type: 'Framework',
        },

        // // Libraries
        // {
        //     title: 'Redux',
        //     progress: 85,
        //     years: 7,
        //     type: 'Library',
        // },
        // {
        //     title: 'Tailwind CSS',
        //     progress: 85,
        //     years: 4,
        //     type: 'Library',
        // },

        // Other
        {
            title: 'Design Systems',
            progress: 95,
            years: 8,
            type: 'Other',
        },
        {
            title: 'Accessibility (WCAG)',
            progress: 90,
            years: 6,
            type: 'Other',
        },
        {
            title: 'Performance Optimization',
            progress: 90,
            years: 10,
            type: 'Other',
        },
        {
            title: 'CI/CD',
            progress: 80,
            years: 6,
            type: 'Other',
        },
        {
            title: 'Technical Leadership & Mentorship',
            progress: 95,
            years: 10,
            type: 'Other',
        },
    ],

    experience: [
        {
            volunteer: true,
            companyName: 'VB Rescue',
            title: 'Emergency Medical Technician (Volunteer)',
            description: [
                'Conducted patient assessments, administered treatments, and monitored vital signs during transport.',
                'Collaborated with emergency response teams and communicated effectively with medical personnel.',
                'Delivered compassionate patient care and support to individuals and families during emergencies.',
            ],
            location: '',
            startedOn: 1662004800000,
            finishedOn: 1730419200000,
        },
        {
            page: 1,
            companyName: 'Anywhere Real Estate',
            title: 'Senior Software Engineer / Front-End Architect',
            location: 'Remote',
            startedOn: 1725494400000,
            description: [
                'Architected and led adoption of a scalable React & Angular based design system used across multiple product teams.',
                'Built a custom Figma plugin to synchronize design tokens between design and code, creating a single source of truth.',
                'Integrated component library workflows into CI/CD pipelines to ensure versioned, reliable releases.',
                'Established front-end standards for performance, accessibility, and developer experience.',
            ],
        },
        {
            page: 1,
            companyName: 'Butterfly Network, Inc.',
            title: 'Senior Software Engineer / Front-End Lead',
            location: 'Remote',
            startedOn: 1630468800000,
            finishedOn: 1725494400000,
            description: [
                'Partnered closely with product and design to translate business requirements into scalable front-end solutions.',
                'Expanded and maintained internal React component libraries for enterprise SaaS applications.',
                'Improved delivery velocity by refining Agile practices, documentation, and technical ownership.',
                'Reduced defects and rework through clearer acceptance criteria and front-end testing strategies.',
            ],
        },
        {
            page: 1,
            companyName: 'CoStar Group',
            title: 'Senior Software Engineer',
            location: 'Richmond, VA',
            startedOn: 1561953600000,
            finishedOn: 1630468800000,
            description: [
                'Led re-architecture of shared React UI libraries used across multiple business units.',
                'Improved UI performance and consistency across desktop and mobile platforms.',
                'Mentored engineers on front-end best practices, testing, and component design.',
            ],
        },
        {
            page: 1,
            companyName: 'Anthem, Inc.',
            title: 'Engineer Advisor / React Native Architect',
            location: 'Norfolk, Virginia',
            startedOn: 1548997200000,
            finishedOn: 1561953600000,
            description: [
                'Advised multiple teams on adopting a shared React Native architecture.',
                'Designed reusable cross-platform UI components to improve maintainability.',
            ],
        },
        {
            page: 2,
            companyName: 'ADP',
            title: 'Senior Application Engineer',
            description: [
                'Led the team in code reviews, providing best practice recommendations to ensure high-quality code standards.',
                'Collaborated with Product Managers, the UX team, and Business Managers to discuss, analyze, and strategize product design.',
                'Interviewed prospective employees and mentored junior software developers, fostering a culture of continuous learning and development.',
            ],
            location: 'Norfolk, Virginia',
            startedOn: 1506830400000,
            finishedOn: 1548997200000,
        },
        {
            page: 2,
            companyName: '80/20 Software Consulting · Array Digital, LLC',
            title: 'Senior Software Engineer',
            location: 'Virginia Beach, Virginia',
            startedOn: 1422766800000,
            finishedOn: 1506830400000,
            description: [
                'Built complex front-end applications using Angular and modern JavaScript.',
                'Collaborated on backend services using Node.js and PHP.',
                'Delivered custom solutions for a variety of enterprise clients.',
            ],
        },
        {
            page: 2,
            companyName: 'City of Virginia Beach',
            title: 'Software Engineer II',
            location: 'Virginia Beach, Virginia',
            startedOn: 1246420800000,
            finishedOn: 1422766800000,
            description: [
                'Designed and built public-facing web applications and internal tools.',
                'Worked with APIs, mapping solutions, and CMS-driven UI components.',
                'Balanced design and development to create accessible, user-friendly experiences.',
            ],
        },
    ],

    certifications: [
        {
            title: 'Certified ScrumMaster (CSM)',
            source: 'Scrum Alliance',
            issuedYear: 2021,
        },
        {
            title: 'NREMT EMT-Specialist',
            source: 'National Registry of Emergency Medical Technicians',
            issuedYear: 2023,
            expiresYear: 2025,
        },
    ],
};
