
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIconOpen = document.querySelector('.fa-bars'); // Icône "menu ouvert"
const menuIconClose = document.querySelector('.fa-close'); // Icône "menu fermé"

if (hamburger && mobileMenu && menuIconOpen && menuIconClose) {
    // Ajout de l'écouteur d'événements
    hamburger.addEventListener('click', () => {
        const isVisible = mobileMenu.getAttribute('data-visible') === 'true';

        // Basculer l'état du menu mobile
        mobileMenu.setAttribute('data-visible', isVisible ? 'false' : 'true');

        // Basculer la visibilité des icônes
        menuIconOpen.setAttribute('data-visible', isVisible ? 'true' : 'false');
        menuIconClose.setAttribute('data-visible', isVisible ? 'false' : 'true');
    });
} else {
    console.error('Un ou plusieurs éléments nécessaires pour le menu mobile sont introuvables.');
}
