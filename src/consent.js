import { watch } from "vue";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./consent.css";
import { useLang } from "./composables/useLang";
import { privacyLang, privacyPaths } from "./routes";

const GA_ID = import.meta.env.VITE_GA_ID;

// Only called from the analytics service's onAccept — never on page load
function loadGoogleAnalytics() {
    if (!GA_ID || window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    document.head.appendChild(script);
}

// Privacy page language > saved site language > browser language > English
function initialLanguage() {
    if (privacyLang) return privacyLang;
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "hu") return saved;
    return navigator.language?.toLowerCase().startsWith("hu") ? "hu" : "en";
}

const translations = {
    en: {
        consentModal: {
            title: "$ cookies --consent",
            description:
                "This site uses one necessary cookie to remember your choice. With your permission, it also uses Google Analytics to see how many people visit and which pages they read. Analytics stays off unless you accept.",
            acceptAllBtn: "accept",
            acceptNecessaryBtn: "reject",
            showPreferencesBtn: "manage",
            footer: `<a href="${privacyPaths.en}">privacy policy</a>`,
        },
        preferencesModal: {
            title: "cookie settings",
            acceptAllBtn: "accept all",
            acceptNecessaryBtn: "reject all",
            savePreferencesBtn: "save choices",
            closeIconLabel: "Close",
            sections: [
                {
                    description:
                        "Choose which cookies you allow. You can change your mind at any time via \"cookie settings\" in the footer.",
                },
                {
                    title: "Strictly necessary",
                    description:
                        "Stores your cookie choice so this banner doesn't reappear on every page. Always on.",
                    linkedCategory: "necessary",
                },
                {
                    title: "Analytics",
                    description:
                        "Google Analytics 4 counts visits and page views so I can see what's useful. Data is processed by Google.",
                    linkedCategory: "analytics",
                },
                {
                    description: `More details in the <a href="${privacyPaths.en}">privacy policy</a>.`,
                },
            ],
        },
    },
    hu: {
        consentModal: {
            title: "$ cookies --consent",
            description:
                "Ez az oldal egy szükséges sütit használ a döntésed megjegyzésére. Hozzájárulásod esetén a Google Analytics segítségével azt is méri, hányan látogatják és mely oldalakat olvassák. Az analitika csak elfogadás után kapcsol be.",
            acceptAllBtn: "elfogadom",
            acceptNecessaryBtn: "elutasítom",
            showPreferencesBtn: "beállítások",
            footer: `<a href="${privacyPaths.hu}">adatvédelmi tájékoztató</a>`,
        },
        preferencesModal: {
            title: "süti beállítások",
            acceptAllBtn: "összes elfogadása",
            acceptNecessaryBtn: "összes elutasítása",
            savePreferencesBtn: "mentés",
            closeIconLabel: "Bezárás",
            sections: [
                {
                    description:
                        "Válaszd ki, mely sütiket engedélyezed. A döntésedet bármikor módosíthatod a lábléc „süti beállítások” linkjével.",
                },
                {
                    title: "Feltétlenül szükséges",
                    description:
                        "Eltárolja a süti-döntésedet, hogy ez az ablak ne jelenjen meg minden oldalon. Mindig aktív.",
                    linkedCategory: "necessary",
                },
                {
                    title: "Analitika",
                    description:
                        "A Google Analytics 4 a látogatások és oldalmegtekintések számát méri, hogy lássam, mi hasznos. Az adatokat a Google kezeli.",
                    linkedCategory: "analytics",
                },
                {
                    description: `Részletek az <a href="${privacyPaths.hu}">adatvédelmi tájékoztatóban</a>.`,
                },
            ],
        },
    },
};

export function initConsent() {
    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: "box",
                position: "bottom right",
                equalWeightButtons: true,
            },
            preferencesModal: {
                layout: "box",
                equalWeightButtons: true,
            },
        },

        categories: {
            necessary: {
                enabled: true,
                readOnly: true,
            },
            analytics: {
                autoClear: {
                    cookies: [{ name: /^_ga/ }],
                    // GA keeps running in memory after its cookies are removed
                    reloadPage: true,
                },
                services: {
                    ga4: {
                        label: "Google Analytics 4",
                        onAccept: loadGoogleAnalytics,
                        onReject: () => {
                            if (GA_ID) window[`ga-disable-${GA_ID}`] = true;
                        },
                        cookies: [{ name: /^_ga/ }],
                    },
                },
            },
        },

        language: {
            default: initialLanguage(),
            translations,
        },
    });

    // On the privacy pages the banner follows the page language, not the site toggle
    if (!privacyLang) {
        const { lang } = useLang();
        watch(lang, (l) => CookieConsent.setLanguage(l));
    }
}
