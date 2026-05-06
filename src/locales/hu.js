export default {
    nav: {
        about: 'rólam',
        work: 'projektek',
        skills: 'készségek',
        experience: 'tapasztalat',
        contact: 'kapcsolat',
    },

    hero: {
        name: 'Hajdú Réka',
        roles: ['Frontend Fejlesztő', 'Programozó'],
        location: 'Magyarország',
        focus: ['frontend', 'ui', 'creative-code'],
        viewProjects: '$ view --projects',
        downloadCv: '$ download cv.pdf',
        log: [
            'kép betöltve',
            'kapcsolat aktív',
            'üdv a portfólión!',
        ],
    },

    about: {
        bio: "Frontend fejlesztőként az a célom, hogy olyan weboldalakat hozzak létre, amelyek nemcsak működnek — hanem jó érzés használni őket. Úgy gondolom, a UX és az esztétika elválaszthatatlan. Beleástam magam a UI/UX és a Figma világába, hogy egy projektet az ötlettől a megvalósításig végigkísérjek — és hidat építsek designer és fejlesztő között.",
        cards: [
            { label: 'JELENLEG', title: 'HM Zrínyi', sub: 'Webfejlesztő' },
            { label: 'VÉGZETT', title: '2024', sub: 'Neumann János Egyetem' },
            { label: 'FÓKUSZ', title: 'Frontend', sub: '+ kreatív UI' },
            { label: 'TANUL', title: 'Mobile / UX', sub: 'következő szint' },
        ],
        sectionTitle: "rólam",
        sectionComment: "",
    },
    projects: {
        sectionTitle: 'ls projects/',
        comment: 'Néhány dolog, amit építettem',
        items: [
            {
                path: '~/projects/f1-track-weather',
                title: 'F1 Track Weather App',
                desc: 'Valós idejű időjárás-adatok az aktuális F1-es naptár minden pályájához, mindig a következő versenyt mutatja. PWA-ként telepíthető.',
                stack: ['Vue 3', 'Vite', 'OpenWeatherMap API', 'Jolpica F1 API'],
                year: '2025',
                link: 'https://github.com/r-jj09/F1-Track-Weather-App',
            },
            {
                path: '~/projects/linktree-clone-vue',
                title: 'Linktree Clone',
                desc: 'Személyes link-hub Vue 3-mal építve. SEO- és akadálymentesség-fókuszú, egyedi domainnel deployolva.',
                stack: ['Vue 3', 'Vite', 'Tailwind'],
                year: '2026',
                link: 'https://github.com/r-jj09/Linktree-Clone-Vue',
            },
            {
                path: '~/projects/minesweeper',
                title: 'Minesweeper',
                desc: 'JavaScript gyakorlóprojekt — a klasszikus aknakereső újraépítve.',
                stack: ['HTML', 'CSS', 'JavaScript'],
                year: '2023',
                link: 'https://github.com/r-jj09/minesweeper_game',
            },
        ],
    },

    skills: {
        sectionTitle: 'cat skills.json',
        comment: 'Eszközök, amikkel dolgozom',
    },

    experience: {
        sectionTitle: 'git log --timeline',
        comment: 'tanulmányok és tapasztalat',
        items: [
            {
                date: '2024.03 – Jelen',
                role: 'Webfejlesztő',
                place: 'HM Zrínyi Geoinformációs és Toborzástámogató Nonprofit Kft.',
                color: 'text-green',
            },
            {
                date: '2023.09 – 2023.12',
                role: 'Webfejlesztő gyakornok',
                place: 'HM Zrínyi Geoinformációs és Toborzástámogató Nonprofit Kft.',
                color: 'text-green',
            },
            {
                date: '2021.09 – 2024.02',
                role: 'Programtervező Informatikus FOSZK',
                place: 'Neumann János Egyetem, GAMF Kar',
                color: 'text-blue',
            },
        ],
    },

    contact: {
        echo: 'Nyitott vagyok új lehetőségekre',
        email: 'hajdu.reka.009@email.com',
        links: [
            { label: 'github', url: 'https://github.com/r-jj09' },
            { label: 'linkedin', url: 'https://www.linkedin.com/in/rekahajdu1109/' },
            { label: 'cv.pdf', url: '/src/assets/HajdúRékaCV(HUN).pdf' },
        ],
    },
}