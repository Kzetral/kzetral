
// =========================
// KZETRAL — LANGUE FR / EN
// =========================

let currentLanguage = "fr";

const languageButton = document.getElementById("language");

function changeLanguage() {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";

    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach((element) => {
        element.innerHTML =
            currentLanguage === "fr"
                ? element.dataset.fr
                : element.dataset.en;
    });

    languageButton.textContent =
        currentLanguage === "fr" ? "EN" : "FR";

    document.documentElement.lang = currentLanguage;
}

if (languageButton) {
    languageButton.addEventListener("click", changeLanguage);
}
