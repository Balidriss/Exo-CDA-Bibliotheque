
function createElement(container, tag, name, indexDom, index) {
    const element = document.createElement(tag);
    element.textContent = name + " : " + books[index]['children'][indexDom].textContent;
    element.classList.add("card-text");
    container.appendChild(element);
    return element;
}

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
    bookListElement.classList.add('row');
    books = xml.getElementsByTagName("livre");

    for (let i = 0; i < books.length; i++) {
        const bookElement = document.createElement("div");
        const bodyElement = document.createElement("div");
        const moreElement = document.createElement('button');
        moreElement.textContent = "Voir plus...";
        createElement(bodyElement, "h2", "Titre", 0, i).classList.add('text-primary');
        createElement(bodyElement, "p", "Auteur", 1, i).classList.add('text-secondary');
        createElement(bodyElement, "p", "Genre", 2, i).classList.add('text-secondary');
        createElement(bodyElement, "p", "Editeur", 3, i).classList.add('text-secondary');
        createElement(bodyElement, "p", "Date", 4, i).classList.add('text-secondary');
        const synospisElement = createElement(bodyElement, "p", "Synospis", 5, i);

        bookListElement.appendChild(bookElement);
        bookElement.appendChild(bodyElement);
        bookElement.classList.add("card", "col-sm-3", "m-5", "p-5");
        bodyElement.classList.add("card-body");
        bodyElement.appendChild(moreElement);
        synospisElement.classList.add('invisible', 'text-secondary');
        moreElement.classList.add('btn', 'btn-primary', 'hide')
        // moreElement.classList.add('btn', 'btn-primary','data-bs-toggle')
        // moreElement.setAttribute(data-bs-toggle, "modal");
        // moreElement.setAttribute(data-bs-target, "#synopsys"+this.);

        moreElement.addEventListener('click', (e) => {
            synospisElement.classList.toggle('invisible');

        })
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