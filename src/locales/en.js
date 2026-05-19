export default {
    nav: {
        about: 'about',
        work: 'projects',
        skills: 'skills',
        experience: 'experience',
        contact: 'contact',
    },

    hero: {
        name: 'Réka Hajdú',
        roles: ['Frontend Developer', 'Programozó'],
        location: 'Hungary',
        focus: ['frontend', 'ui', 'creative-code'],
        viewProjects: '$ view --projects',
        downloadCv: '$ download cv.pdf',
        log: [
            'image loaded',
            'connection ok',
            'welcome to my portfolio',
        ],
    },

    about: {
        bio: "My goal as a frontend developer is to build websites that don't just work — they feel good to use. I believe UX and visual design go hand in hand. I've been diving into UI/UX and Figma so I can follow a project from concept to implementation, and I care about bridging the gap between designers and developers.",
        cards: [
            { label: 'CURRENTLY', title: 'HM Zrínyi', sub: 'Web Developer' },
            { label: 'GRADUATED', title: '2024', sub: 'John von Neumann University' },
            { label: 'FOCUS', title: 'Frontend', sub: '+ creative UI' },
            { label: 'LEARNING', title: 'UX / UI and Figma', sub: 'next up' },
        ],
        sectionTitle: "about",
        sectionComment: "",
    },
    projects: {
        sectionTitle: 'ls projects/',
        comment: 'A few things I\'ve built',
        items: [
            {
                path: '~/projects/f1-track-weather',
                title: 'F1 Track Weather App',
                desc: 'Real-time weather data for every circuit on the current F1 calendar, always showing the next upcoming race. Installable as a PWA.',
                stack: ['Vue 3', 'Vite', 'OpenWeatherMap API', 'Jolpica F1 API'],
                year: '2025',
                link: 'https://github.com/r-jj09/F1-Track-Weather-App',
            },
            {
                path: '~/projects/linktree-clone-vue',
                title: 'Linktree Clone',
                desc: 'A personal link hub built with Vue 3. SEO and accessibility focused, deployed with a custom domain.',
                stack: ['Vue 3', 'Vite', 'Tailwind'],
                year: '2026',
                link: 'https://github.com/r-jj09/Linktree-Clone-Vue',
            },
            {
                path: '~/projects/minesweeper',
                title: 'Minesweeper',
                desc: 'A JavaScript Minesweeper practice project — rebuilding the classic game.',
                stack: ['HTML', 'CSS', 'JavaScript'],
                year: '2023',
                link: 'https://github.com/r-jj09/minesweeper_game',
            },
        ],
    },

    skills: {
        sectionTitle: 'cat skills.json',
        comment: 'Tools I work with',
    },

    experience: {
        sectionTitle: 'git log --timeline',
        comment: 'studies and experience',
        items: [
            {
                date: '2024.03 – Present',
                role: 'Web Developer',
                place: 'HM Zrínyi NKft. / MoD Geoinformation and Recruitment support Non-profit Ltd.',
                color: 'text-green',
            },
            {
                date: '2023.09 – 2023.12',
                role: 'Web Developer Intern',
                place: 'HM Zrínyi NKft. / MoD Geoinformation and Recruitment support Non-profit Ltd.',
                color: 'text-green',
            },
            {
                date: '2021.09 – 2024.02',
                role: 'Software Engineering Associate Degree',
                place: 'John von Neumann University, GAMF Faculty',
                color: 'text-blue',
            },
        ],
    },

    contact: {
        echo: 'Open to new opportunities',
        email: 'hajdu.reka.009@email.com',
        links: [
            { label: 'github', url: 'https://github.com/r-jj09' },
            { label: 'linkedin', url: 'https://www.linkedin.com/in/rekahajdu1109/' },
            { label: 'cv.pdf', url: '/src/assets/HajdúRékaCV(HUN).pdf' },
        ],
    },
}