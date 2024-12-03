// Import de la fonction qui gère les avis
import { ajoutListenerAvis,  ajoutListenerEnvoyerAvis } from "./avis.js";


/**
 * Fonction principale asynchrone qui gère le chargement et l'affichage des pièces
 */
async function initialiserPieces() {
    console.log("🚀 Démarrage initialiserPieces");
    try {
        // Chargement des données
        const reponse = await fetch("http://localhost:8081/pieces");
        if (!reponse.ok) {
            throw new Error(`Erreur HTTP: ${reponse.status}`);
        }
        const pieces = await reponse.json();
        console.log("📥 Données reçues de l'API:", pieces);
        
        // Initialisation de l'interface
        initialiserBoutonsTri(pieces);
        initialiserBoutonsFiltrage(pieces);
        initialiserInputRange(pieces);
        afficherPieces(pieces);
        console.log("🎯 Appel de afficherListesPieces");
        afficherListesPieces(pieces);
        

        //initialisation du formualire d'avis
        ajoutListenerEnvoyerAvis();
        // Ajout des listeners pour les avis
        ajoutListenerAvis();

    } catch (error) {
        console.error("❌ Erreur lors du chargement des pièces:", error);
        afficherMessageErreur("Désolé, une erreur est survenue lors du chargement des pièces. Veuillez réessayer plus tard.");
    }
}

/**
 * Fonction pour initialiser les boutons de tri
 */
function initialiserBoutonsTri(pieces) {
    // Tri par prix croissant
    const boutonTrierCroissant = document.querySelector(".btn-trier-croissant");
    if (boutonTrierCroissant) {
        boutonTrierCroissant.addEventListener("click", () => {
            const piecesOrdonnees = Array.from(pieces).sort((a, b) => a.prix - b.prix);
            afficherPieces(piecesOrdonnees);
        });
    }

    // Tri par prix décroissant
    const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
    if (boutonTrierDecroissant) {
        boutonTrierDecroissant.addEventListener("click", () => {
            const piecesOrdonnees = Array.from(pieces).sort((a, b) => b.prix - a.prix);
            afficherPieces(piecesOrdonnees);
        });
    }
}

/**
 * Fonction pour initialiser les boutons de filtrage
 */
function initialiserBoutonsFiltrage(pieces) {
    // Filtrer les pièces abordables (prix <= 35€)
    const boutonFiltrerAbordables = document.querySelector(".btn-filtrer-abordables");
    if (boutonFiltrerAbordables) {
        boutonFiltrerAbordables.addEventListener("click", () => {
            const piecesFiltrees = pieces.filter(piece => piece.prix <= 35);
            afficherPieces(piecesFiltrees);
            afficherListePiecesAbordables(piecesFiltrees);
        });
    }

    // Filtrer les pièces sans description
    const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");
    if (boutonFiltrerDescription) {
        boutonFiltrerDescription.addEventListener("click", () => {
            const piecesFiltrees = pieces.filter(piece => !piece.description);
            afficherPieces(piecesFiltrees);
        });
    }
}

/**
 * Fonction pour initialiser l'input range du prix maximum
 */
function initialiserInputRange(pieces) {
    const inputPrixMax = document.getElementById("prix-max");
    const prixMaxValue = document.getElementById("prix-max-value");
    
    if (inputPrixMax && prixMaxValue) {
        // Initialiser la valeur maximum en fonction du prix le plus élevé
        const prixMaximum = Math.max(...pieces.map(piece => piece.prix));
        inputPrixMax.max = prixMaximum;
        inputPrixMax.value = prixMaximum;
        prixMaxValue.textContent = prixMaximum;

        // Mettre à jour l'affichage lors du changement de valeur
        inputPrixMax.addEventListener("input", () => {
            const valeurActuelle = parseInt(inputPrixMax.value);
            prixMaxValue.textContent = valeurActuelle;
            const piecesFiltrees = pieces.filter(piece => piece.prix <= valeurActuelle);
            afficherPieces(piecesFiltrees);
        });
    }
}

/**
 * Fonction pour afficher les pièces dans la section fiches
 */
function afficherPieces(pieces) {
    const sectionFiches = document.querySelector(".fiches");
    if (!sectionFiches) return;
    
    // Efface l'écran et affiche les nouvelles pièces
    sectionFiches.innerHTML = "";
    
    if (pieces.length === 0) {
        sectionFiches.innerHTML = "<p>Aucune pièce ne correspond à vos critères</p>";
        return;
    }
    
    pieces.forEach(piece => {
        // Création de l'élément HTML pour chaque pièce
        const pieceElement = document.createElement("article");
        pieceElement.classList.add("piece");

        const imageElement = document.createElement("img");
        imageElement.src = piece.image;
        imageElement.alt = `Image de ${piece.nom}`;

        const nomElement = document.createElement("h2");
        nomElement.innerText = piece.nom;

        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${piece.prix} € ${piece.prix < 35 ? "(Abordable)" : ""}`;

        const categorieElement = document.createElement("p");
        categorieElement.innerText = `Catégorie: ${piece.categorie || "Non catégorisé"}`;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = piece.description || "Pas de description disponible";

        const disponibiliteElement = document.createElement("p");
        disponibiliteElement.innerText = piece.disponibilite ? "En stock" : "Rupture de stock";
        disponibiliteElement.classList.add(piece.disponibilite ? "en-stock" : "rupture-stock");

        // Assemblage de la fiche
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(disponibiliteElement);

        // Ajout du bouton des avis
        const boutonAvis = document.createElement("button");
        boutonAvis.textContent = "Afficher les avis";
        boutonAvis.dataset.id = piece.id;
        pieceElement.appendChild(boutonAvis);

        sectionFiches.appendChild(pieceElement);
    });
}

/**
 * Fonction pour afficher les listes de pièces disponibles et abordables
 */
function afficherListesPieces(pieces) {
    console.log("Début afficherListesPieces");
    console.log("Pièces reçues:", pieces);

    // Liste des pièces disponibles
    const piecesDisponibles = pieces.filter(piece => piece.disponibilite);
    console.log("Pièces disponibles:", piecesDisponibles);
    const listeDisponibles = document.createElement("ul");
    piecesDisponibles.forEach(piece => {
        const elementListe = document.createElement("li");
        elementListe.innerText = `${piece.nom} - ${piece.prix} €`;
        listeDisponibles.appendChild(elementListe);
    });

    // Mise à jour du conteneur des pièces disponibles
    const conteneurDisponible = document.querySelector(".disponible");
    console.log("Conteneur disponible trouvé:", conteneurDisponible);
    if (conteneurDisponible) {
        const ulDisponible = conteneurDisponible.querySelector("ul");
        console.log("UL disponible trouvé:", ulDisponible);
        if (ulDisponible) {
            ulDisponible.innerHTML = "";
            ulDisponible.appendChild(listeDisponibles);
            console.log("Liste disponible ajoutée");
        }
    }

    // Liste des pièces abordables
    const piecesAbordables = pieces.filter(piece => piece.prix <= 35);
    console.log("Pièces abordables:", piecesAbordables);
    const listeAbordables = document.createElement("ul");
    piecesAbordables.forEach(piece => {
        const elementListe = document.createElement("li");
        elementListe.innerText = `${piece.nom} - ${piece.prix} €`;
        listeAbordables.appendChild(elementListe);
    });

    // Mise à jour du conteneur des pièces abordables
    const conteneurAbordable = document.querySelector(".abordables");
    console.log("Conteneur abordable trouvé:", conteneurAbordable);
    if (conteneurAbordable) {
        const ulAbordable = conteneurAbordable.querySelector("ul");
        console.log("UL abordable trouvé:", ulAbordable);
        if (ulAbordable) {
            ulAbordable.innerHTML = "";
            ulAbordable.appendChild(listeAbordables);
            console.log("Liste abordable ajoutée");
        }
    }
    console.log("Fin afficherListesPieces");
}

/**
 * Fonction pour afficher un message d'erreur
 */
function afficherMessageErreur(message) {
    const sectionFiches = document.querySelector(".fiches");
    if (sectionFiches) {
        sectionFiches.innerHTML = `
            <div class="error-message">
                ${message}
            </div>`;
    }
}

// Démarrage de l'application
initialiserPieces();