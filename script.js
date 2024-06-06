// Fonction pour charger le fichier XML avec fetch
async function loadXMLDoc(filename) {
    try {
        
    } catch (error) {
        console.error(error);
    }
}

// Fonction pour afficher les livres
function displayBooks(xml) {
   
    for (let i = 0; i < books.length; i++) {
        

       
    }
}

// Charger et afficher les livres au chargement de la page
window.onload = function () {
    loadXMLDoc("books.xml")
        .then(displayBooks)
        .catch(function (error) {
            console.error(error);
        });
};