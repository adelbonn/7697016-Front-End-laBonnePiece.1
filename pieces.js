
//récupération des données du fichier JSON
const reponse = await fetch("pieces-autos.json");  //*on utilise la méthode fetch() pour récupérer les données du fichier JSON (le fonction fetch prend en paramètre le chemin des données que l'on veux récupérer), on utilise await pour attendre que la promesse soit résolue, la méthode fetch() retourne une promesse qui contient la réponse du serveur, une promesse est un objet qui représente la fin ou l'échec d'une opération asynchrone. Une opération asynchrone est une opération qui ne se termine pas immédiatement et qui peut prendre un certain temps pour se terminer.   
const pieces = await reponse.json();                  //*ici on utilise la méthode json() pour extraire le contenu du corps de la réponse, la méthode json() retourne une promesse qui contient le contenu du corps de la réponse sous forme de JSON.

// //création des éléments de la page
// const article = pieces[0]; // ici on récupère la première pièce du fichier JSON en utilisant l'index 0 qui repésente la première pièce, on sait que c'est ma première pièce car elle est la première dans le fichier JSON et [0] permet de récupérer le premier élémnt d'un tableau
// const imageElement = document.createElement('img'); //création d'un élément image
// imageElement.src = article.image; // ici on ajoute l'image de la pièce en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.image (où .image est la clé de l'objet article) et article (la variable) est l'objet qui contient les données de la première pièce et .src est la propriété de l'élément image qui permet de définir l'URL de l'image

// const nomElement = document.createElement('h2'); //création d'un élément h2
// nomElement.innerText = article.nom // ici on ajoute le nom de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.nom (où .nom est la clé de l'objet article) et .innerText est la propriété de l'élément h2 qui permet de définir le texte de l'élément h2

// const prixElement = document.createElement('p'); //création d'un élément p
// //prixElement.innerText = `Prix: ${article.prix} euros`; // ici on ajoute le prix de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.prix (où .prix est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p, ici nous avons u'iliser des littéraux de gabarits pour ajouter le prix de l'article. Les littéraux de gabarits sont definit de la manière suivante: `texte ${variable} texte` et permettent d'insérer des variables dans une chaîne de caractères. les ittéraux permettent de concaténer plus facilement des chaines de caractères et des variables, ils commencent et se termine par des backtckes , puis l'on écrit le texte et les variables à insérer entre les accolades, sans oublé le signe $ avant l'accolade
// prixElement.innerText =`Prix: ${article.prix} euros (${article.prix < 35 ? 'moins cher': 'plus cher'})`; // ici on ajoute le prix de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.prix (où .prix est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p, ici nous avons u'iliser des littéraux de gabarits pour ajouter le prix de l'article. Les littéraux de gabarits sont definit de la manière suivante: `texte ${variable} texte` et permettent d'insérer des variables dans une chaîne de caractères. les ittéraux permettent de concaténer plus facilement des chaines de caractères et des variables, ils commencent et se termine par des backtckes , puis l'on écrit le texte et les variables à insérer entre les accolades, sans oublé le signe $ avant l'accolade

// const categorieElement = document.createElement('p'); //création d'un élément p
// categorieElement.innerText = article.categorie; // ici on ajoute la catégorie de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.catégorie (où .catégorie est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p
// //console.log(article); //affichage de l'article dans la console, ainsi je peux vérifier que la variable article contient bien les données de la première pièce (dans la consoel je vois que article est un objet et qu'il contient les données de la première pièce (qui sont dans le fichier json   ))

// //Maintenant que nos éléments sont créés, nous allons les ajouter à la page

// //vérification de l'existence de la section fiches
// const sectionFiche = document.querySelector('.fiches'); //ici on utilise la méthode querySelector() pour récupérer la section fiches, la méthode querySelector() permet de récupérer le premier élément qui correspond à un sélecteur CSS spécifié dans le document, ici on récupère la section fiches en utilisant le sélecteur CSS .fiches
// //console.log(sectionFiche); //ici je vérifie que la variable sectionFiche contient bien la section fiches (dans la console je vois que sectionFiche est un élément HTML de type section qui contient les éléments enfants de la section fiches)
// // ensuite nous pouvons ajouter les éléments à la section fiches
// sectionFiche.appendChild(imageElement); //ajout de l'image à la section fiches grace à la méthode appendChild() qui permet d'ajouter un élément enfant à un élément parent. Cette méthode prend en paramètre l'élément à ajouter en tant qu'enfant donc ici on ajoute la variable : imageElement à la section fiches
// //on fait de même pour les autres élémnts a ajouter a notre section fiche donc:
// sectionFiche.appendChild(nomElement); // remarque comme on ajoute en argument (paramètre le nom d'une variable on ne met pas de " ou' , on écrit uniquement le nom de la variable qui correspond a l'élémént que l'on veux ajouter")
// sectionFiche.appendChild(prixElement);
// sectionFiche.appendChild(categorieElement);
// et l'on voit bien les élémnts de la première pièce s'ajouter sur notre page web
// pour vérifier les données deux possibilités:
//choisir l'oppérateur ternaire sa syntaxe est la suivante : expression à tester ? valeur si vrai:valeur si faux ce qui donne pour par exemple si on veux tester si le prix d'un raticele est inférieur a 35 euros on écrira : arcticle.prix ? "vrai":"faux" et si le prix est inférieur a 35 euros la console affichera "vrai" et si le prix est supérieur ou égal a 35 euros la console affichera "faux" (on peux bien sûr mettre d'autres carctère que vrai ou faux dans la valuer par exemple j'aurais pû mettre le signe de l'euros ) mais je ne le trouve pas sur le clavier)
// ou fournir une valeur par défaut avec l'opérateur nullish. l'opérateur nullish s'utilise lorsque l'on pense avoir une information dans une variable mais que finalement il n'y en a pas (donc qu'elle est null ou undefind)
// l'opérateur nullish est représenté par deux points d'interrogation (??) et s'utilise de la manière suivante: variable ?? valeur par défaut, si la variable contient une valeur alors la valeur de la variable est retournée, si la variable est null ou undefined alors la valeur par défaut est retournée
// exemple: const prix = article.prix ?? 0; //ici on affecte à la variable prix la valeur de article.prix si article.prix contient une valeur, sinon on affecte la valeur 0 à la variable prix
// ici on a utilisé l'opérateur nullish pour affecter une valeur par défaut à la variable prix si article.prix est null ou undefined
// on peut aussi utiliser l'opérateur nullish pour affecter une valeur par défaut à une variable si la variable n'est pas définie
// exemple: const prix = article.prix ?? 0; //ici on affecte à la variable prix la valeur de article.prix si article.prix contient une valeur, sinon on affecte la valeur 0 à la variable prix
// ici on a utilisé l'opérateur nullish pour affecter une valeur par défaut à la variable prix si article.prix est null ou undefined
function afficherPieces(pieces) {
 //récupération de l'élément du DOM qui accueillera les fiches
 const sectionFiches = document.querySelector(".fiches");
 sectionFiches.innerHtml = "" ;//on vide le contenu de la section fiches pour éviter d'avoir des doublons
//ajout des autres articles (qui se trouvent dans le tableau du fichier pieces.json) à notre page web et donc les afficher sur la page
//pour cela nous allons crée une boucle for qui va parcourir le tableau pieces et ajouter les éléments de chaque pièce à la page
for (let i = 0; i < pieces.length; i++) {
   
    //création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    pieceElement.classList.add("piece"); //on ajoute une classe à la balise article pour pouvoir la cibler avec le CSS
    //on crée l'élément image
    const imageElement = document.createElement("img");
    //on accede a l'indice i de la liste pieces pour configurer la source de l'image
    imageElement.src = pieces[i].image
    //on fait de même pour le nom, le prix et la catégorie
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;

    const prixElement = document.createElement("p");
   prixElement.innerText = `"Prix : "  ${pieces[i].prix} "€"`;
   //autre solution pour prix qui là trie les prix inférieur a 35 euros, on utilise 
prixElement.innertext = `Prix: ${pieces.prix} € (${pieces.prix < 35 ? "€" : "€€€"})`;

    const categoriesElement = document.createElement("p");
    categoriesElement.innerText = pieces[i].categorie;

    //ensuite on ajoute les éléments à la page en les rattachant a leur parent
  //on rattache la balise article à la section Fiches
  sectionFiches.appendChild(pieceElement);
  // on rattache ensuite l'image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    //on rattache le nom à pieceElement
    pieceElement.appendChild(nomElement);
    //on rattache le prix à pieceElement
    pieceElement.appendChild(prixElement);
    //on rattache la catégorie à pieceElement
    pieceElement.appendChild(categoriesElement);
    //console.log(pieces[i], );
}
};
//on appelle la fonction afficherPieces pour afficher les fiches produits sur la page
afficherPieces(pieces);

//ensuite réordonner les fiches grâce à la méthode sort() qui permet de trier les éléments d'un tableau selon un critère donné
// const boutonTrier = documentQuerySelector(".btn-trier")
// boutonTrier.addEventListener("click", function () {
//   // on va réordonner le éléments de la liste en fonction de leur prix
//   //pour cela on utilise sort qui prend en argument une nouvelle fonction
//   //nous déclarons cell-ci a l'intérieru des parenthèses de sort sans lui donner de nom (c'est donc une fonction anonyme), (elle sera appelée par sort pour comparer les deux éléments entre eux) (Voici un extrait de code qui représente la déclaration d'une fonction anonyme au moment de l'appel de la fonction sort :  pieces.sort(function() {..(ici on écrit le code qui sera executé)..., dans le cas de la  méthode sort la fonction en paramètre de sort prend deux argument qu'il faudra comparer pour dire lequel sera rangé avant l'autre dans la liste réordonnée finale. Traditionnellement on nomme ces deux paramètres (ouarguments) a et b...}))
//   //la fonction prend deux arguments a et b qui sont les éléments du tableau à comparer
//   //la fonction retourne un nombre négatif si a doit être placé avant b, un nombre positif si b doit être placé avant a et 0 si les deux éléments sont équivalents (donc si ils ont le même prix) (c'est la fonction de comparaison qui est passée en argument à la méthode sort) 
//   pieces.sort(function (a, b) {
//     //on compare les prix des deux éléments a et b
//     //on retourne un nombre négatif si a doit être placé avant b
//     //on retourne un nombre positif si b doit être placé avant a
//     //on retourne 0 si les deux éléments ont le même prix
//     return a.prix - b.prix;
//   });
console.log(pieces);
// })
/*****Code complet de l'exemple avec la méthode (fonction) sort :*/
// const boutonTrier = document.querySelector(".btn-trier")

// boutonTrier.addEventListener("click", function () {
//   const piecesOrdonnees = Array.from(pieces);  // ici on copie le tableau (array) pieces avec la méthode Array.from().Créer une copie permet de ne pas toucher au liste de la page afin que les autres trier et filtre fonctionnent correctment.,Avec la méthode Array.from il faut mettre entre les parenthèse le nom du tableu que l'on veux copier)
//   piecesOrdonnees.sort(function (a, b) {   // on appel la fonction (méthode sort, qui prend en parammètre une fonction anonyme avec deux paramètre a et b, représentant deux élémnts de la liste a comparer)
//     return a.prix - b.prix;      // Cette fonction anonyme retourne un prix qui est, ici, calculé à partir de la difference de prix donc a - b (return pourrait vouloir dire =)
//   })
// console.log(piecesOrdonnees);
// });


/****************Bouton Filtrer les pièces non abordables********************************* */
//Filtrer les éléménts de la liste grâce à la fonction filter
//maintenant nous allons filtre les pièces non abordables
//pour cela nous allons utiliser la méthode filter qui permet de filtrer les éléments d'un tableau selon un critère donné et de retourner un nouveau tableau contenant les éléments filtrés (la méthode filter prend en argument une fonction qui sera appelée pour chaque élément du tableau, si la fonction retourne true alors l'élément est ajouté au tableau filtré, si la fonction retourne false alors l'élément est ignoré) (Voici un extrait de code qui représente la déclaration d'une fonction anonyme au moment de l'appel de la fonction filter :  pieces.filter(function() {..(ici on écrit le code qui sera executé)..., dans le cas de la  méthode filter la fonction en paramètre de filter prend un argument qui est l'élément du tableau à tester pour savoir s'il doit être ajouté au tableau filtré ou non. Traditionnellement on nomme cet argument element...})) 
//la fonction prend un argument element qui est l'élément du tableau à tester
//la fonction retourne true si l'élément doit être ajouté au tableau filtré
//la fonction retourne false si l'élément doit être ignoré
//la méthode filter retourne un nouveau tableau contenant les éléments filtrés
const boutonFilter = document.querySelector(".btn-filter");

boutonFilter.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function(piece) {
    return piece.prix <= 35;
  });
  console.log(piecesFiltrees);
  
});
genererPieces(piecesFiltrees);


//*********************boutton trier par prix décroissant**********************/
//je recupère une reference au bouton qui est donc btn-decroissant
//j'attache un eventListener sur le click sur ce bouton, puis je let ma logique de trie en utilisant la fonction sort()
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
  const pieceDecroissant = Array.from(pieces);  //je copie le tableau pieces avec la méthode Array.from() pour ne pas toucher à la liste de la page afin que les autres fonctions de tri et de filtre fonctionnent correctement
  pieceDecroissant.sort(function (a,b) {         //je trie les éléments de la liste en fonction de leur prix, en utilisant la méthode sort qui prend en argument une nouvelle fonction de comparaison qui compare les prix des éléments a et b et retourne un nombre négatif si a doit être placé avant b, un nombre positif si b doit être placé avant a et 0 si les deux éléments ont le même prix
    return b.prix - a.prix;
  });
  console.log(pieceDecroissant);
});


/**************Bouton pièces sans descrioption*************************** */
//button filtrer les pieces sans description
//le recupère la référence de ce boutton donc: btn-nodescripton
//j'ajoute un adEventListener sur le clique
//puis je les fitre avec filter()
const boutonSansDescription = document.querySelector(".btn-nodescription");
boutonSansDescription.addEventListener("click", function() {
  const piecesFiltrees = pieces.description;
  console.log(piecesFiltrees);
  
});
genererPieces(piecesFiltrees);
//Maintenat on va créer un tableau qui contiendra que les nom de nos pieces, on utilise pour cela la fonction map
//deux façon de l'écrire 
//pour utiliser la fonction map on ecrit .map puis on lui donne en argument une focntion anonyme qu'on appel pour chaque élements de la liste d'origine (ici piece. donc on écrire map(function(piece)))
//on peux demander a la fonction anonyme de calculé une nouvelle valeur, par exemple en ecrivant map(function(piece) {
//return piece.prix * 2;}
//on peux aussi lui demander de nous retourner le nom de nos pices on ecrira :
//map(function(pieces)) {
//return pieces.nom} (les données noms viennent du tableau piece du document json)
//on peut aussi ecrire notre code plus simplement:
//(piece) => pieces.nom;   ceci est une fonction lambda.LA fonction lambda va faire bien plus que de simplement retourner un nom d'une proprié d'un objet, on peut 
//Pour recupérer les noms de nos pieces et se creer un tableau qui contient le nom de chacunes de nos pieces on écrira :
//const noms = pieces.map(piece => piece.nom);
//et unn console.log pour vérifier tout cela
//console.log(noms);

/******************Méthode splice*********************** */

//Maintenant voyons comment enlever des élements de notre liste, supprimons les pieces non abordables avec la méthode splice ()
//pour cela on utilisera un boucle for, et on partira de la fin du tableau au début de celui-ci, Sans cela certains éléments ne seraitent pas testés, à cause  du décalage que provoquerait la suppression des elements indésirables (ceux que l on veux supprimer)
//la fonction splice prend en argument deux valeurs : 
//l'indice a partir duquel supprimer les éléments et la quantité d'éléments à supprimer
//nous nous servirons donc de l'indice i comme premier argument et supprimerons toujours un seul éléments à la fois

// const noms = pieces.map(piece => piece.nom);
// for(let i = pieces.length -1; i >= 0; i--) {
//   if(pieces[i].prix > 35) {
//     noms.splice(i,1);
//   }
// }
// console.log(noms);

//Autre solution pour afficher les pièces abordables
const boutonFiltrerAbordables = document.querySelector(".btn-filter");
boutonFiltrerAbordables.addEventListener("click", function () {
  const piecesAbordables = Array.from(pieces); // Créer une copie du tableau pieces

  for (let i = piecesAbordables.length - 1; i >= 0; i--) {
    if (piecesAbordables[i].prix > 35) {
      piecesAbordables.splice(i, 1); // Supprimer les pièces non abordables
    }
  }

  console.log(piecesAbordables); // Afficher le tableau des pièces abordables dans la console

  // Générer les éléments DOM pour les pièces abordables
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesAbordables);
});

/***********************************Elements abordables********************************** */
//Maintenant que nous avons la liste des noms des pieces abordable nous allons les afficher dans la page de notre site
//pour cela on reprend ce que nous avons fait plus haut et l'on crée des élémnts dans le DOM
//Création de la list
//Création de la liste
const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement("li");
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector(".abordables")
   .appendChild(abordablesElements);
console.log(abordablesElements);


//Maintenant affichons une liste des pièces disponibles a coté des pièces abordables
//pour cela, créons un élémént html avec la class pieces disponibles, puis 
//reprenons la logique codessus
// const piecesDisponibles = document.createElement('div')
// piecesDisponibles.classList.add('PiecesDisponibles');
// const listePiecesDisponibles = document.createElement('ul');
// //trions les pieces disponibles avec splice
// const piecesRestantes = pieces.map(piece => piece.disponibilite);
// for(let i = pieces.length -1; i <=0; i--) {
//   if(pieces[i].disponibilite = false) {
//     piecesRestantes.splice(i,1)
//   }
// }
// console.log(piecesRestantes);

// //je crée la list en ajoutant les élémts directment dans le DOM avec une boucle for
// for(let i = 0; i <disponibilte.length; i++) {
//   const nomPieceDisponible = document.createElement('li');
//   nomPieceDisponible.innerHTML = piecesRestantes[i]
//   nomPieceDisponible.appendChild(listePiecesDisponibles)
// }

// piecesDisponibles.appendChild(listePiecesDisponibles)
// document.querySelector('.fiches')
// fiches.appendChild(piecesDisponibles)
//***coorection de ajout des pieces disponibles*** */

//On crée deux listes avec la méthode (fonction) .map(), la première garde uniquement les noms et la deuxième garde uniquemen le prix
const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponibles = pieces.map(piece => piece.prix);
//ensuite ajoutons une boucle for qui par de la fin du tableau pieces, si la disponiblité de la pièce est sur false alors supprimer le nom et le prix des deux listes crées précédemment
//on utilise ici .splice() afin de supprimer des éléments d'un tableau, cette méthode prend en paramètre deux arguments, l'indice de l'élément à supprimer et la quantité d'éléments à supprimer 
for(let i = pieces.length -1; i >= 0; i--) {
  if (pieces[i].disponibilite === false) {
  nomsDisponibles.splice(i,1);
  prixDisponibles.splice(i,1);
}
}
//ensuite ajoutons une boucle for qui va ajouter à la liste disponiblesElements tous les éléments de nomsDisponibles et prixDisponibles, ainsi que leur prix, pour cela on crée un nouvel élément li et on ajoute le nom et le prix de chaque élément de nomsDisponibles et prixDisponibles
const disponiblesElements = document.createElement("ul");

for(let i = 0; i < nomsDisponibles.length; i++) {
  const nomElement = document.createElement('li');
  nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
  disponiblesElements.appendChild(nomElement);
}
// et enfin on ajoute la liste disponiblesElements en tant que fils de la balise .disponible
document.querySelector(".disponible").appendChild(disponiblesElements);

console.log(disponiblesElements); //ici on affiche la liste des éléments disponibles dans la console pour vérifier que tout s'est bien passé


/*********************************réécriture du code pour rendre la page interactive********************************************************************************************************** */

//nous allons reprendre le code précédent et le modifier pour rendre la page interactive 
//rendons la page web plus interactive en modifiant les éléments du DOM avec innerHTML et innerText
//innerHTML='' efface le contenu de la balise body et donc l'écran, le fait de supprimer le contenu de la balise body permet de supprimer tout le contenu de la page web, niveau performance cela est plus rapide que de supprimer chaque élément individuellement et de les reconstruire
//document.querySelector(".fiches").innerHTML = '';

//récupération des pièces depuis le fichier json, comme nous l'avons déjà déclaré plus haut dans le code on ne le redéclare pas mais je garde pour mieux comprendre comment on regenère le contenu de notre balise
//const pieces = await fetch("pieces-autos.json"); //on recupere le contenu du fichier json
//console.log(pieces);

//On crée une fonction genererPieces() qui génère toute la page web et qui donc sera réutilisable par la suite en fonction des interactions avec l'utilisateur, ajouter une telle fonction permet de simplifier le code et de pouvoir modifier facilement la page web en fonction des interactions de l'utilisateur, par exemple si par la suite je veux ajouter une modale je pourrais simplement appeler cette fonction et ajouter la modale au contenu de la balise .fiches

// function genererPieces(pieces) {

//   //On récupère la balise .fiches et on l'assigne à une variable nommée sectionFiches
//   const sectionFiches = document.querySelector(".fiches");
//   //on vide d'abord la balise .fiches avec la propiété .innerHTML = "" pour éviter d'avoir des doublons
//   sectionFiches.innerHTML = "";
//   //On crée une balise article et on l'assigne à une variable nommée pieceElement, cette variable sera crée avec le corps de la boucle for ci-dessous
//   const pieceElement = document.createElement("article");
//   for (let i = 0; i < pieces.length; i++) {
//     //création d'une balise dédiée à une piece auto
//     const pieceElement = document.createElement("article");
//     //on crée l'élément img
//     const imageElement = document.createElement("img");
//     //On accède à l'indice i de la liste pieces pour configurer la source de l'image
//     imageElement.src = pieces[i].image;
//     //On rattache l'image ) pieceElement (la balise article, qui est donc son parent)
//     pieceElement.appendChild(imageElement);
//       //idem pour le nom, le prix et la catégorie 
//     const nomElement = document.createElement("h2");
//     nomElement.innerText = pieces[i].nom;
//     pieceElement.appendChild(nomElement);

//     const prixElement = document.createElement("p");
//       prixElement.innerText = `'Prix :' ${pieces[i].prix} €`;
//       pieceElement.appendChild(prixElement)

//     const categorieElement = document.createElement("p");
//     categorieElement.innerText = `${pieces[i].categorie}`;
//     pieceElement.appendChild(categorieElement)
//   }
//   sectionFiches.appendChild(pieceElement);
// }
// //premier affichage de la page
// genererPieces(pieces);
/***********************************Correction de la fonction genererPieces :************************************************************* */
// function genererPieces(pieces) {
//   const sectionFiches = document.querySelector(".fiches");
//   sectionFiches.innerHTML = ''; // Vider la section avant d'ajouter les articles triés

//   pieces.forEach(article => {
//       const pieceElement = document.createElement("article");
//       pieceElement.classList.add("piece");

//       const imageElement = document.createElement("img");
//       imageElement.src = article.image;

//       const nomElement = document.createElement("h2");
//       nomElement.innerText = article.nom;

//       const prixElement = document.createElement("p");
//       prixElement.innerText = `Prix: ${article.prix} euros (${article.prix < 35 ? "€" : "€€€"})`;

//       const categorieElement = document.createElement("p");
//       categorieElement.innerText = article.categorie;

//       pieceElement.appendChild(imageElement);
//       pieceElement.appendChild(nomElement);
//       pieceElement.appendChild(prixElement);
//       pieceElement.appendChild(categorieElement);

//       sectionFiches.appendChild(pieceElement);
//   });
// }
// // Appel de la fonction genererPieces avec le tableau pieces
// genererPieces(pieces);


// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
   const piecesOrdonnees = Array.from(pieces);
   piecesOrdonnees.sort(function (a, b) {
       return b.prix - a.prix;
   });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});
 
// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilite;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
/**********************c'est ce que je dois faire pour le mode edition et les differntes modales*************************************************** */

//ensuite code de la barre de linput de type range

const inputPrixMax = document.getElementById("prix-max");
inputPrixMax.addEventListener("input", function(){
  //ici, dans le corps de la fonction callback on fitre la liste des pieces avec la fonction filter
  const piecesFiltrees = pieces.filter(function(piece) {
    return piece.prix <= inputPrixMax.value;  // ici on met la condition 
  });
  //on efface ensuite l'écran et on fait appel a la fonction genererPiece pour afficher les fiches produit
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
//si tout se passe bien, lorsque que le utilisateur fait glisser le curseur sur la barre les pieces s'ffichent et s'effacent durectement en fonction de leur filtrag