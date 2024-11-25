//récupération des données du fichier JSON
const reponse = await fetch('pieces-autos.json'); //*on utilise la méthode fetch() pour récupérer les données du fichier JSON (le fonction fetch prend en paramètre le chemin des données que l'on veux récupérer), on utilise await pour attendre que la promesse soit résolue, la méthode fetch() retourne une promesse qui contient la réponse du serveur, une promesse est un objet qui représente la fin ou l'échec d'une opération asynchrone. Une opération asynchrone est une opération qui ne se termine pas immédiatement et qui peut prendre un certain temps pour se terminer.
const pieces = await reponse.json(); //*ici on utilise la méthode json() pour extraire le contenu du corps de la réponse, la méthode json() retourne une promesse qui contient le contenu du corps de la réponse sous forme de JSON.

function afficherPieces(pieces) {
  const sectionFiches = document.querySelector('.fiches');
  sectionFiches.innerHTML = ''; // Vider la section avant d'ajouter les articles

  for (let i = 0; i < pieces.length; i++) {
    const pieceElement = document.createElement('article');
    pieceElement.classList.add('piece');

    const imageElement = document.createElement('img');
    imageElement.src = pieces[i].image;

    const nomElement = document.createElement('h2');
    nomElement.innerText = pieces[i].nom;

    const prixElement = document.createElement('p');
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${
      pieces[i].prix < 35 ? '€' : '€€€'
    })`;

    const categoriesElement = document.createElement('p');
    categoriesElement.innerText = pieces[i].categorie;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText =
      pieces[i].description || 'Pas de description';

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categoriesElement);
    pieceElement.appendChild(descriptionElement);

    sectionFiches.appendChild(pieceElement);
  }
}

// Exemple de données de pièces
const pieces = [
  {
    image: 'images/ampoule-led.png',
    nom: 'Ampoule LED',
    prix: 60,
    categorie: 'Optiques',
    description: "Distance d'éclairage : 100 mètres !",
    disponibilite: true,
  },
  {
    image: 'images/plaquettes-frein.png',
    nom: 'Plaquettes de frein (x4)',
    prix: 40,
    categorie: 'Freinage',
    description: 'Une qualité de freinage optimale, par tous les temps',
    disponibilite: true,
  },
  {
    image: 'images/ampoule-boite-a-gants.png',
    nom: 'Ampoule boîte à gants',
    prix: 5.49,
    categorie: 'Optiques',
    description: "Pour y voir clair dans l'habitacle.",
    disponibilite: false,
  },
  {
    image: 'images/liquide-frein.png',
    nom: 'Liquide de frein',
    prix: 9.6,
    categorie: '',
    disponibilite: true,
  },
  {
    image: 'images/balai-essuie-glace.png',
    nom: "Balai d'essuie-glace",
    prix: 29.1,
    categorie: 'Essuie-glaces',
    description: "Performances d'essuyage au top ! Longueur: 550mm.",
    disponibilite: true,
  },
];

// Appel de la fonction afficherPieces pour afficher les fiches produits sur la page
afficherPieces(pieces);

// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector('.btn-trier');
if (boutonTrier) {
  boutonTrier.addEventListener('click', function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
      return a.prix - b.prix; // Tri par prix croissant
    });
    document.querySelector('.fiches').innerHTML = '';
    afficherPieces(piecesOrdonnees);
    console.log(piecesOrdonnees); // Afficher le tableau trié dans la console
  });
} else {
  console.error("Le bouton avec la classe 'btn-trier' n'a pas été trouvé.");
}

// Ajout du listener pour trier les pièces par ordre de prix décroissant
const boutonTrierDecroissant = document.querySelector('.btn-decroissant');
if (boutonTrierDecroissant) {
  boutonTrierDecroissant.addEventListener('click', function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
      return b.prix - a.prix; // Tri par prix décroissant
    });
    document.querySelector('.fiches').innerHTML = '';
    afficherPieces(piecesOrdonnees);
    console.log(piecesOrdonnees); // Afficher le tableau trié dans la console
  });
} else {
  console.error(
    "Le bouton avec la classe 'btn-decroissant' n'a pas été trouvé."
  );
}

// Ajout du listener pour filtrer les pièces sans description
const boutonFiltrerSansDescription =
  document.querySelector('.btn-nodescription');
if (boutonFiltrerSansDescription) {
  boutonFiltrerSansDescription.addEventListener('click', function () {
    const piecesSansDescription = pieces.filter(function (piece) {
      return !piece.description; // Filtrer les pièces sans description
    });
    document.querySelector('.fiches').innerHTML = '';
    afficherPieces(piecesSansDescription);
  });
} else {
  console.error(
    "Le bouton avec la classe 'btn-nodescription' n'a pas été trouvé."
  );
}

// Ajout du listener pour filtrer les pièces abordables
const boutonFiltrerAbordables = document.querySelector('.btn-filter');
if (boutonFiltrerAbordables) {
  boutonFiltrerAbordables.addEventListener('click', function () {
    const piecesAbordables = Array.from(pieces); // Créer une copie du tableau pieces

    for (let i = piecesAbordables.length - 1; i >= 0; i--) {
      if (piecesAbordables[i].prix <= 35) {
        piecesAbordables.splice(i, 1); // Supprimer les pièces abordables
      }
    }

    console.log(piecesAbordables); // Afficher le tableau des pièces abordables dans la console

    // Générer les éléments DOM pour les pièces abordables
    document.querySelector('.fiches').innerHTML = '';
    afficherPieces(piecesAbordables);
  });
} else {
  console.error("Le bouton avec la classe 'btn-filter' n'a pas été trouvé.");
}

// Code de la barre de l'input de type range
const inputPrixMax = document.getElementById('prix-max');
if (inputPrixMax) {
  inputPrixMax.addEventListener('input', function () {
    const piecesFiltrees = pieces.filter(function (piece) {
      return piece.prix <= inputPrixMax.value; // Filtrer les pièces par prix maximum
    });
    document.querySelector('.fiches').innerHTML = '';
    afficherPieces(piecesFiltrees);
  });
} else {
  console.error("L'élément avec l'ID 'prix-max' n'a pas été trouvé.");
}

// Création des listes de noms et prix disponibles
const nomsDisponibles = pieces.map((piece) => piece.nom);
const prixDisponibles = pieces.map((piece) => piece.prix);

// Suppression des pièces non disponibles
for (let i = pieces.length - 1; i >= 0; i--) {
  if (!pieces[i].disponibilite) {
    nomsDisponibles.splice(i, 1);
    prixDisponibles.splice(i, 1);
  }
}

// Affichage des pièces disponibles
const disponiblesElements = document.createElement('ul');
for (let i = 0; i < nomsDisponibles.length; i++) {
  const nomElement = document.createElement('li');
  nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
  disponiblesElements.appendChild(nomElement);
}
document.querySelector('.disponible').appendChild(disponiblesElements);
console.log(disponiblesElements);
