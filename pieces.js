
//récupération des données du fichier JSON
const reponse = await fetch('pieces-autos.json');  //*on utilise la méthode fetch() pour récupérer les données du fichier JSON (le fonction fetch prend en paramètre le chemin des données que l'on veux récupérer), on utilise await pour attendre que la promesse soit résolue, la méthode fetch() retourne une promesse qui contient la réponse du serveur, une promesse est un objet qui représente la fin ou l'échec d'une opération asynchrone. Une opération asynchrone est une opération qui ne se termine pas immédiatement et qui peut prendre un certain temps pour se terminer.   
const pieces = await reponse.json();                  //*ici on utilise la méthode json() pour extraire le contenu du corps de la réponse, la méthode json() retourne une promesse qui contient le contenu du corps de la réponse sous forme de JSON.

//création des éléments de la page
const article = pieces[0]; // ici on récupère la première pièce du fichier JSON en utilisant l'index 0 qui repésente la première pièce, on sait que c'est ma première pièce car elle est la première dans le fichier JSON et [0] permet de récupérer le premier élémnt d'un tableau
const imageElement = document.createElement('img'); //création d'un élément image
imageElement.src = article.image; // ici on ajoute l'image de la pièce en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.image (où .image est la clé de l'objet article) et article (la variable) est l'objet qui contient les données de la première pièce et .src est la propriété de l'élément image qui permet de définir l'URL de l'image

const nomElement = document.createElement('h2'); //création d'un élément h2
nomElement.innerText = article.nom // ici on ajoute le nom de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.nom (où .nom est la clé de l'objet article) et .innerText est la propriété de l'élément h2 qui permet de définir le texte de l'élément h2

const prixElement = document.createElement('p'); //création d'un élément p
//prixElement.innerText = `Prix: ${article.prix} euros`; // ici on ajoute le prix de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.prix (où .prix est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p, ici nous avons u'iliser des littéraux de gabarits pour ajouter le prix de l'article. Les littéraux de gabarits sont definit de la manière suivante: `texte ${variable} texte` et permettent d'insérer des variables dans une chaîne de caractères. les ittéraux permettent de concaténer plus facilement des chaines de caractères et des variables, ils commencent et se termine par des backtckes , puis l'on écrit le texte et les variables à insérer entre les accolades, sans oublé le signe $ avant l'accolade
prixElement.innerText =`Prix: ${article.prix} euros (${article.prix < 35 ? 'moins cher': 'plus cher'})`; // ici on ajoute le prix de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.prix (où .prix est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p, ici nous avons u'iliser des littéraux de gabarits pour ajouter le prix de l'article. Les littéraux de gabarits sont definit de la manière suivante: `texte ${variable} texte` et permettent d'insérer des variables dans une chaîne de caractères. les ittéraux permettent de concaténer plus facilement des chaines de caractères et des variables, ils commencent et se termine par des backtckes , puis l'on écrit le texte et les variables à insérer entre les accolades, sans oublé le signe $ avant l'accolade

const categorieElement = document.createElement('p'); //création d'un élément p
categorieElement.innerText = article.categorie; // ici on ajoute la catégorie de l'article en récupérant la valeur de l'objet article dans le fichier JSON de la manière suivante: article.catégorie (où .catégorie est la clé de l'objet article) et .innerText est la propriété de l'élément p qui permet de définir le texte de l'élément p
//console.log(article); //affichage de l'article dans la console, ainsi je peux vérifier que la variable article contient bien les données de la première pièce (dans la consoel je vois que article est un objet et qu'il contient les données de la première pièce (qui sont dans le fichier json   ))

//Maintenant que nos éléments sont créés, nous allons les ajouter à la page

//vérification de l'existence de la section fiches
const sectionFiche = document.querySelector('.fiches'); //ici on utilise la méthode querySelector() pour récupérer la section fiches, la méthode querySelector() permet de récupérer le premier élément qui correspond à un sélecteur CSS spécifié dans le document, ici on récupère la section fiches en utilisant le sélecteur CSS .fiches
console.log(sectionFiche); //ici je vérifie que la variable sectionFiche contient bien la section fiches (dans la console je vois que sectionFiche est un élément HTML de type section qui contient les éléments enfants de la section fiches)
// ensuite nous pouvons ajouter les éléments à la section fiches
sectionFiche.appendChild(imageElement); //ajout de l'image à la section fiches grace à la méthode appendChild() qui permet d'ajouter un élément enfant à un élément parent. Cette méthode prend en paramètre l'élément à ajouter en tant qu'enfant donc ici on ajoute la variable : imageElement à la section fiches
//on fait de même pour les autres élémnts a ajouter a notre section fiche donc:
sectionFiche.appendChild(nomElement); // remarque comme on ajoute en argument (paramètre le nom d'une variable on ne met pas de " ou' , on écrit uniquement le nom de la variable qui correspond a l'élémént que l'on veux ajouter")
sectionFiche.appendChild(prixElement);
sectionFiche.appendChild(categorieElement);
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

//ajout des autres articles (qui se triuvent dans le tableau du fichier pieces.json) à notre page web
//pour cela nous allons crée une boucle for qui va parcourir le tableau pieces et ajouter les éléments de chaque pièce à la page
for (let i=0; i<pieces.length; i++) {
    //récupération de l'élémznt du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches")
}

