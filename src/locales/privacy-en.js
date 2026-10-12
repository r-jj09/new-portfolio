export default {
    docTitle: 'Privacy policy | Hajdú Réka',
    back: 'cd ~',
    command: '$ cat privacy.md',
    title: 'Privacy policy',
    updated: 'Last updated: 12 October 2026',

    sections: [
        {
            title: 'who runs this site',
            paragraphs: [
                'This website (hajdureka.hu) is a personal portfolio run by Hajdú Réka, who is the data controller for the processing described below.',
                'Contact: <a href="mailto:hajdu.reka.009@gmail.com">hajdu.reka.009@gmail.com</a>',
            ],
        },
        {
            title: 'what is collected and why',
            paragraphs: [
                '<strong>Server logs (Vercel).</strong> The site is hosted by Vercel Inc. When you load a page, Vercel\'s servers automatically process technical request data, such as your IP address, browser user agent, the requested URL, the referrer and the time of the request. This is needed to deliver the site and keep it secure.',
                'Legal basis: legitimate interest in operating a working, secure website (GDPR Art. 6(1)(f)). Retention: request logs are available to me in the Vercel dashboard for about 1 hour. Vercel may keep log data for longer under its own data processing terms.',
                '<strong>Analytics (Google Analytics 4) — only with your consent.</strong> If you accept analytics cookies, the site loads Google Analytics 4, provided by Google. It collects usage data such as pages viewed, time spent, referrer, device and browser type, and approximate location, so I can see how the site is used.',
                'Legal basis: your consent (GDPR Art. 6(1)(a)). If you reject or ignore the banner, Google Analytics is not loaded at all. You can withdraw consent at any time via "cookie settings" in the footer, which also deletes the _ga cookies. Retention in Google Analytics: 2 months.',
                'The site has no contact forms, user accounts or comments.',
            ],
        },
        {
            title: 'cookies and local storage',
            table: true,
            paragraphs: [
                '&lt;ID&gt; stands for the site\'s Google Analytics measurement ID without the "G-" prefix. Durations are the defaults set by the respective provider.',
            ],
        },
        {
            title: 'international transfers',
            paragraphs: [
                'Vercel Inc. and Google LLC are based in the United States, so data processed by them may be transferred outside the European Economic Area. These transfers rely on the EU-U.S. Data Privacy Framework (both companies are certified), with Standard Contractual Clauses in their data processing terms as a fallback.',
            ],
        },
        {
            title: 'domain registrar',
            paragraphs: [
                'The domain name hajdureka.hu is registered through Rackhost (Hungary). The website itself is hosted by Vercel.',
            ],
        },
        {
            title: 'your rights',
            paragraphs: [
                'Under the GDPR you have the right to:',
            ],
            list: [
                'access the personal data held about you (Art. 15)',
                'have inaccurate data corrected (Art. 16)',
                'have your data erased (Art. 17)',
                'restrict processing (Art. 18)',
                'data portability (Art. 20)',
                'object to processing based on legitimate interest (Art. 21)',
                'withdraw your consent at any time, without affecting the lawfulness of processing before the withdrawal (Art. 7(3))',
            ],
            after: [
                'To exercise any of these rights, email <a href="mailto:hajdu.reka.009@gmail.com">hajdu.reka.009@gmail.com</a>.',
            ],
        },
        {
            title: 'complaints',
            paragraphs: [
                'You have the right to lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH, <a href="https://naih.hu" target="_blank" rel="noopener">naih.hu</a>), or with the supervisory authority in the EU country where you live.',
            ],
        },
    ],

    cookieTable: {
        headers: ['name', 'provider', 'purpose', 'duration', 'category'],
        rows: [
            ['cc_cookie', 'hajdureka.hu', 'Stores your cookie consent choices', '182 days', 'necessary'],
            ['lang (local storage)', 'hajdureka.hu', 'Remembers your language, only set when you use the language switch', 'until you clear browser data', 'necessary'],
            ['_ga', 'Google', 'Distinguishes visitors for Google Analytics', '2 years', 'analytics (consent)'],
            ['_ga_<ID>', 'Google', 'Keeps session state for Google Analytics', '2 years', 'analytics (consent)'],
        ],
    },
}
