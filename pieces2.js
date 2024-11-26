// Import de la fonction qui gère les avis
import { ajoutListenerAvis } from "./avis.js";

/**
 * COMPARAISON DES APPROCHES ASYNCHRONES EN JAVASCRIPT
 * 
 * Approche .then() (avant) :
 * fetch("http://localhost:8081/pieces")
 *     .then(response => response.json())
 *     .then(pieces => {
 *         afficherPieces(pieces);
 *     });
 * 
 * Avantages de .then() :
 * - Bon pour des opérations en chaîne simple
 * - Utile pour le traitement parallèle avec Promise.all()
 * - Compatible avec les navigateurs plus anciens
 * 
 * Approche async/await (maintenant) :
 * - Plus facile à lire et à comprendre
 * - Meilleure gestion des erreurs avec try/catch
 * - Code plus linéaire et synchrone en apparence
 * - Attente explicite des résultats avec 'await'
 */

// Fonction pour initialiser les boutons de tri
function initialiserBoutonsTri(pieces) {
    const boutonTrier = document.querySelector(".btn-trier");
    if (boutonTrier) {
        boutonTrier.addEventListener("click", () => {
            const piecesOrdonnees = Array.from(pieces).sort((a, b) => a.prix - b.prix);
            afficherPieces(piecesOrdonnees);
        });
    }
//fonction pour trier les pieces par prix decroissant
    const boutonTrierDecroissant = document.querySelector(".btn-decroissant");
    if (boutonTrierDecroissant) {
        boutonTrierDecroissant.addEventListener("click", () => {
            const piecesOrdonnees = Array.from(pieces).sort((a, b) => b.prix - a.prix);
            afficherPieces(piecesOrdonnees);
        });
    }
}

// Fonction pour initialiser les boutons de filtrage
function initialiserBoutonsFiltrage(pieces) {
    const boutonFiltrer = document.querySelector(".btn-filtrer");
    if (boutonFiltrer) {
        boutonFiltrer.addEventListener("click", () => {
            const piecesFiltrees = pieces.filter(piece => piece.prix <= 35);
            afficherPieces(piecesFiltrees);
        });
    }
//fonction pour filtrer les pieces sans description
    const boutonFiltrerSansDescription = document.querySelector(".btn-nodescription");
    if (boutonFiltrerSansDescription) {
        boutonFiltrerSansDescription.addEventListener("click", () => {
            const piecesSansDescription = pieces.filter(piece => !piece.description);
            afficherPieces(piecesSansDescription);
        });
    }

    const boutonFiltrerAbordables = document.querySelector(".btn-filter");
    if (boutonFiltrerAbordables) {
        boutonFiltrerAbordables.addEventListener("click", () => {
            const piecesNonAbordables = pieces.filter(piece => piece.prix > 35);
            afficherPieces(piecesNonAbordables);
        });
    }
}

// Fonction pour initialiser les listes spéciales
function initialiserListesSpeciales(pieces) {
    const boutonPrixAbordable = document.querySelector(".btn-filtrer-prix-abordable");
    if (boutonPrixAbordable) {
        boutonPrixAbordable.addEventListener("click", () => {
            const piecesFiltrees = pieces.filter(piece => piece.prix <= 35);
            const nomsPiecesAbordables = piecesFiltrees.map(piece => piece.nom);
            document.querySelector(".pieces-abordables").innerHTML = nomsPiecesAbordables.join(", ");
        });
    }

    const boutonPiecesDispo = document.querySelector(".btn-filtrer-pieces-dispo");
    if (boutonPiecesDispo) {
        boutonPiecesDispo.addEventListener("click", () => {
            const piecesFiltrees = pieces.filter(piece => piece.disponibilite);
            const nomsPiecesDispo = piecesFiltrees.map(piece => piece.nom);
            document.querySelector(".pieces-disponibles").innerHTML = nomsPiecesDispo.join(", ");
        });
    }
}

// Fonction pour initialiser l'input range
function initialiserInputRange(pieces) {
    const inputPrixMax = document.getElementById("prix-max");
    if (inputPrixMax) {
        inputPrixMax.addEventListener("input", () => {
            const piecesFiltrees = pieces.filter(piece => piece.prix <= inputPrixMax.value);
            afficherPieces(piecesFiltrees);
        });
    }
}

// Fonction pour afficher les listes de pièces disponibles
function afficherListesPieces(pieces) {
    // Création des listes
    console.log("fonction afficherListesPieces");
    console.log("pièces reçues :", pieces);
    const nomsDisponibles = pieces.filter(piece => piece.disponibilite).map(piece => piece.nom);
    const prixDisponibles = pieces.filter(piece => piece.disponibilite).map(piece => piece.prix);
console.log("nomsDisponibles :", nomsDisponibles);
console.log("prixDisponibles :", prixDisponibles);

    // Création de la liste HTML
    const disponiblesElements = document.createElement("ul");
    for (let i = 0; i < nomsDisponibles.length; i++) {
        const nomElement = document.createElement('li');
        nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
        disponiblesElements.appendChild(nomElement);
    }

    // Ajout à la page
    const conteneurDisponible = document.querySelector('.disponible');
    console.log("conteneur trouvé :", conteneurDisponible);
    if (conteneurDisponible) {
        conteneurDisponible.innerHTML = ''; // Nettoyer le contenu existant
        conteneurDisponible.appendChild(disponiblesElements);
        console.log("liste ajoutée au conteneur", conteneurDisponible);
    }
}

// Fonction principale asynchrone qui gère le chargement et l'affichage des pièces
async function initialiserPieces() {
    console.log("🚀 Démarrage initialiserPieces");
    try {
        // Chargement des données
        const reponse = await fetch("http://localhost:8081/pieces");
        const pieces = await reponse.json();
        console.log("📥 Données reçues de l'API:", pieces);
        
        afficherPieces(pieces);
        afficherListesPieces(pieces);
        
        // Initialisation des différentes fonctionnalités
        initialiserBoutonsTri(pieces);
        initialiserBoutonsFiltrage(pieces);
        initialiserListesSpeciales(pieces);
        initialiserInputRange(pieces);
        
        // Ajout des listeners pour les avis
        ajoutListenerAvis();

    } catch (error) {
        console.error("❌ Erreur lors du chargement des pièces:", error);
    }
}

// Fonction d'affichage des pièces
function afficherPieces(pieces) {
    const sectionFiches = document.querySelector(".fiches");
    if (sectionFiches === null) return;
    
    // Efface l'écran et affiche les nouvelles pièces
    sectionFiches.innerHTML = "";
    
    pieces.forEach(piece => {
        // Création de l'élément HTML pour chaque pièce
        const pieceElement = document.createElement("article");
        pieceElement.classList.add("piece");

        const imageElement = document.createElement("img");
        imageElement.src = piece.image;

        const nomElement = document.createElement("h2");
        nomElement.innerText = piece.nom;

        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${piece.prix} € (${piece.prix < 35 ? "€" : "€€€"})`;

        const categoriesElement = document.createElement("p");
        categoriesElement.innerText = piece.categorie;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = piece.description || "Pas de description";

        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categoriesElement);
        pieceElement.appendChild(descriptionElement);

        sectionFiches.appendChild(pieceElement);

        //Ajout des boutons des avis avec dat-id
        const boutonAvis = document.createElement("button");
        boutonAvis.textContent = "Afficher avis";
        boutonAvis.dataset.id = piece.id;
        pieceElement.appendChild(boutonAvis);
    });
}

// Démarrage de l'application
initialiserPieces();