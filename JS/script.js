// Add an event listener to the window object that calls the scrollFunc function whenever the user scrolls
window.addEventListener("scroll", scrollFunction);


// Fonction qui est appelée lorsque l'utilisateur fait défiler la page
window.onscroll = function () {
    scrollFunction();
};

// Fonction qui gère l'affichage du bouton "To Top" en fonction de la position de défilement
function scrollFunction() {
    // Récupère l'élément du bouton "To Top" par son ID
    const toTopButton = document.getElementById("toTopButton");

    // Vérifie si l'utilisateur a défilé vers le bas de plus de 20 pixels
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si oui, affiche le bouton en le stylisant pour qu'il soit visible
        toTopButton.style.display = "block";
    } else {
        // Sinon, cache le bouton
        toTopButton.style.display = "none";
    }
}

// Ajoute un gestionnaire d'événement au bouton "To Top" pour gérer les clics
document.getElementById("toTopButton").onclick = function () {
    // Lorsque le bouton est cliqué, fait défiler la page jusqu'en haut
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
};