// //importatrion des pièces depuis le fichier JSON
// const reponse = await fetch("pieces-auto.json");  //ici on utilise la méthode fetch() pour récupérer les données du fichier JSON, on utilise await pour attendre que la promesse soit résolue. la méthode fecth() retourne une promesse qui contient la réponse du serveur, une promesse est un objet qui représente la fin ou l'échec d'une opération asynchrone. Une opération asynchrone est une opération qui ne se termine pas immédiatement et qui peut prendre un certain temps pour se terminer.
// const pieces = await reponse.json();  //ici on utilise la méthode json() pour extraire le contenu du corps de la réponse, la méthode json() retourne une promesse qui contient le contenu du corps de la réponse sous forme de JSON.
// //affichage des pièces
// const article = pieces[0]; //première pièce, en utilisant l'index 0 qui repésente la première pièce, on sait que c'est ma première pièce car elle est la première dans le fichier JSON et [0] permet de récupérer le premier élémnt d'un tableau
// const imageElement = document.createElement('img'); //création d'un élément image
// imageElement.src = article.image;   //ajout de l'image de la pièce
// document.body.appendChild(imageElement); //ajout de l'image à la page

// //creation de l'élément titre (nom de l'article)
// const nomArticle = document.createElement('h2');  //création d'un élément h2, on crée cet élément en utilisant la méthode createElement() de l'objet document
// nomArticle.textContent = article.nom; //ici on ajoute le nom de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.nom (où .nom est la clé de l'objet article)

// //creation de l'élément prix
// const prixElement = document.createElement('p'); //création d'un élément p
// prixElement.innerText = `Prix:${article.prix} euros`; //ajout du prix de l'article  en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.prix (où .prix est la clé de l'objet article)
// const categorieElement = document.createElement('p'); //création d'un élément p
// categorieElement.innerText = article.categorie; //ajout de la catégorie de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.categorie (où .categorie est la clé de l'objet article)  

// //vérification de l'existence de la fiche sectionFiches
// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appenchChild(imageElement); //ajout de l'image à la section fiches grace à la méthode appendChild() qui permet d'ajouter un élément enfant à un élément parent
// sectionFiches.appendChild(nomArticle); //ajout du titre à la section fiches
// sectionFiches.appendChild(prixElement); //ajout du prix à la section fiches
// sectionFiches.appendChild(categorieElement); //ajout de la catégorie à la section fiches


//***************Reprise du projet de zéro******************/ */







