

// Fonction pour charger le fichier XML avec fetch
async function loadXMLDoc(filename) {
    try {
        const response = await fetch(filename)
        if (!response.ok) {
            throw new error('Problème de chargement.')
        }
        const textXml = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(textXml, "text/xml");
        return doc;

    } catch (error) {
        console.error(error);
    }
}

// Fonction pour afficher les livres
function displayBooks(xml) {

    const bookListElement = document.getElementById("book-list");
    books = xml.querySelectorAll("livre");
    console.log(books);
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].titre);


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