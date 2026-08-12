// ===============================
// C2D ENTREPRISE
// script.js
// ===============================

// Mise à jour automatique de l'année dans le footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} C2D ENTREPRISE - Tous droits réservés.`;
}

// Animation d'apparition des cartes de services
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

// Effet sur le bouton WhatsApp
const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {

    setInterval(() => {

        whatsappBtn.classList.toggle("pulse");

    }, 1000);

}

// Effet de réduction du menu lors du défilement
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.padding = "10px 8%";
        header.style.background = "#08306b";
    } else {
        header.style.padding = "15px 8%";
        header.style.background = "#0d47a1";
    }

});

// Message de bienvenue
window.addEventListener("load", () => {

    console.log("Bienvenue sur le site de C2D ENTREPRISE.");

});