

// =========================
// KZETRAL — INTERACTIONS
// =========================

// LANGUE FR / EN

let currentLanguage = localStorage.getItem("kzetral-language") || "fr";

function applyLanguage() {
    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach((element) => {
        element.innerHTML =
            currentLanguage === "fr"
                ? element.dataset.fr
                : element.dataset.en;
    });

    const button = document.getElementById("language");

    if (button) {
        button.textContent = currentLanguage === "fr" ? "EN" : "FR";
    }

    document.documentElement.lang = currentLanguage;
}

function changeLanguage() {
    const button = document.getElementById("language");

    document.body.classList.add("language-changing");

    currentLanguage = currentLanguage === "fr" ? "en" : "fr";

    localStorage.setItem("kzetral-language", currentLanguage);

    applyLanguage();

    setTimeout(() => {
        document.body.classList.remove("language-changing");
    }, 200);
}

const languageButton = document.getElementById("language");

if (languageButton) {
    languageButton.addEventListener("click", changeLanguage);
}

applyLanguage();


// ANNÉE AUTOMATIQUE

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// APPARITION DES SECTIONS AU DÉFILEMENT

const revealElements = document.querySelectorAll(
    ".vision, .vehicle, .technology, .contact, .tech-grid article, .page-content"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


// ANIMATION DES CARACTERISTIQUES EH-X

const specificationCards = document.querySelectorAll(".specifications div");

specificationCards.forEach((card, index) => {
    card.classList.add("reveal");
    card.style.transitionDelay = `${index * 150}ms`;
});

// ANIMATION DES LIENS INTERNES

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
