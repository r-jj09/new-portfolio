export default {
    docTitle: 'Adatvédelmi tájékoztató | Hajdú Réka',
    back: 'cd ~',
    command: '$ cat adatvedelem.md',
    title: 'Adatvédelmi tájékoztató',
    updated: 'Utolsó frissítés: 2026. október 12.',

    sections: [
        {
            title: 'ki üzemelteti az oldalt',
            paragraphs: [
                'Ez a weboldal (hajdureka.hu) Hajdú Réka személyes portfóliója. Az alább leírt adatkezelések adatkezelője Hajdú Réka.',
                'Kapcsolat: <a href="mailto:hajdu.reka.009@gmail.com">hajdu.reka.009@gmail.com</a>',
            ],
        },
        {
            title: 'milyen adatok kerülnek kezelésre és miért',
            paragraphs: [
                '<strong>Szervernaplók (Vercel).</strong> Az oldalt a Vercel Inc. tárhelyszolgáltató szolgálja ki. Egy oldal betöltésekor a Vercel szerverei automatikusan kezelnek technikai adatokat, például az IP-címedet, a böngésződ azonosítóját (user agent), a kért URL-t, a hivatkozó oldalt és a kérés időpontját. Erre az oldal kiszolgálásához és biztonságos működtetéséhez van szükség.',
                'Jogalap: jogos érdek a működő és biztonságos weboldal üzemeltetéséhez (GDPR 6. cikk (1) bekezdés f) pont). Megőrzési idő: a kérésnaplók kb. 1 óráig érhetők el számomra a Vercel felületén. A Vercel a saját adatfeldolgozási feltételei szerint ennél tovább is tárolhat naplóadatokat.',
                '<strong>Analitika (Google Analytics 4) — csak hozzájárulással.</strong> Ha elfogadod az analitikai sütiket, az oldal betölti a Google által nyújtott Google Analytics 4 szolgáltatást. Ez használati adatokat gyűjt, például a megtekintett oldalakat, az eltöltött időt, a hivatkozó oldalt, az eszköz és a böngésző típusát, valamint a hozzávetőleges tartózkodási helyet, hogy lássam, hogyan használják az oldalt.',
                'Jogalap: a hozzájárulásod (GDPR 6. cikk (1) bekezdés a) pont). Ha elutasítod vagy figyelmen kívül hagyod a sütiablakot, a Google Analytics egyáltalán nem töltődik be. Hozzájárulásodat bármikor visszavonhatod a lábléc „süti beállítások” linkjével, ami a _ga sütiket is törli. Megőrzési idő a Google Analyticsben: 2 hónap.',
                'Az oldalon nincs kapcsolatfelvételi űrlap, felhasználói fiók vagy hozzászólás.',
            ],
        },
        {
            title: 'sütik és helyi tárolás',
            table: true,
            paragraphs: [
                'Az &lt;ID&gt; az oldal Google Analytics mérési azonosítója a „G-” előtag nélkül. Az időtartamok az adott szolgáltató alapértelmezett beállításai.',
            ],
        },
        {
            title: 'nemzetközi adattovábbítás',
            paragraphs: [
                'A Vercel Inc. és a Google LLC az Egyesült Államokban működik, ezért az általuk kezelt adatok az Európai Gazdasági Térségen kívülre kerülhetnek. Az adattovábbítás alapja az EU–USA adatvédelmi keretrendszer (Data Privacy Framework; mindkét cég tanúsított), tartalékként pedig az adatfeldolgozási feltételeikben szereplő általános szerződési feltételek (SCC).',
            ],
        },
        {
            title: 'domain regisztrátor',
            paragraphs: [
                'A hajdureka.hu domainnevet a Rackhost (Magyarország) útján regisztráltam. Magát a weboldalt a Vercel szolgálja ki.',
            ],
        },
        {
            title: 'a jogaid',
            paragraphs: [
                'A GDPR alapján jogod van:',
            ],
            list: [
                'hozzáférni a rólad kezelt személyes adatokhoz (15. cikk)',
                'a pontatlan adatok helyesbítését kérni (16. cikk)',
                'az adataid törlését kérni (17. cikk)',
                'az adatkezelés korlátozását kérni (18. cikk)',
                'az adathordozhatósághoz (20. cikk)',
                'tiltakozni a jogos érdeken alapuló adatkezelés ellen (21. cikk)',
                'hozzájárulásodat bármikor visszavonni, ami nem érinti a visszavonás előtti adatkezelés jogszerűségét (7. cikk (3) bekezdés)',
            ],
            after: [
                'Jogaid gyakorlásához írj a <a href="mailto:hajdu.reka.009@gmail.com">hajdu.reka.009@gmail.com</a> címre.',
            ],
        },
        {
            title: 'panasz',
            paragraphs: [
                'Panaszt nyújthatsz be a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, <a href="https://naih.hu" target="_blank" rel="noopener">naih.hu</a>), vagy a lakóhelyed szerinti EU-tagállam felügyeleti hatóságához.',
            ],
        },
    ],

    cookieTable: {
        headers: ['név', 'szolgáltató', 'cél', 'időtartam', 'kategória'],
        rows: [
            ['cc_cookie', 'hajdureka.hu', 'Eltárolja a süti-hozzájárulással kapcsolatos döntésedet', '182 nap', 'szükséges'],
            ['lang (local storage)', 'hajdureka.hu', 'Megjegyzi a nyelvet; csak akkor jön létre, ha használod a nyelvváltót', 'a böngészőadatok törléséig', 'szükséges'],
            ['_ga', 'Google', 'Megkülönbözteti a látogatókat a Google Analytics számára', '2 év', 'analitika (hozzájárulás)'],
            ['_ga_<ID>', 'Google', 'A munkamenet állapotát tárolja a Google Analytics számára', '2 év', 'analitika (hozzájárulás)'],
        ],
    },
}
