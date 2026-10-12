export const privacyPaths = {
    en: "/privacy",
    hu: "/adatvedelem",
};

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

// "en" / "hu" when on a privacy page, otherwise null
export const privacyLang =
    Object.keys(privacyPaths).find((l) => privacyPaths[l] === currentPath) || null;
