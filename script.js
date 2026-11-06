
let currentLanguage = localStorage.getItem("kzetral-language") || "fr";

const languageButton = document.getElementById("language");

function applyLanguage() {
    document.querySelectorAll("[data-fr][data-en]").forEach(element => {
        element.innerHTML =
            currentLanguage === "fr"
                ? element.dataset.fr
                : element.dataset.en;
    });

    if (languageButton) {
        languageButton.textContent =
            currentLanguage === "fr" ? "EN" : "FR";
    }

    document.documentElement.lang = currentLanguage;
}

function changeLanguage() {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem("kzetral-language", currentLanguage);
    applyLanguage();
}

if (languageButton) {
    languageButton.addEventListener("click", changeLanguage);
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

applyLanguage();

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
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

/* Reveal animations */
const revealElements = document.querySelectorAll(
    ".ehx-section, .spec-section, .vision-section, .technology-section, .final-section"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
