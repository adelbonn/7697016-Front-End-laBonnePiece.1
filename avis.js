//CODE DU COURS D4OPENCLASSROOM  REALISER UNE PAGE WEB DYNAMIQUE AVEC JABVASCRIPT? PROJET FIL ROUGE LA BONNE PIECE
// export async function ajoutListenerAvis() {
//     const piecesElements = document.querySelectorAll(".fiches article button");

//     for (let i = 0; i < piecesElements.length; i++) {
//         piecesElements[i].addEventListener("click", function (event) {
//             const id = event.target.dataset.id;
//           await  fetch(`http://localhost:8081/pieces/${id}/avis`);
//         });
//     }
// }      
 

//CODE AMELIORER PAR CASCADE/CLAUDE3.5 (mieux car gère les erreurs) :

export function ajoutListenerAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");

    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            const id = event.target.dataset.id;   //ici event représente l'event sur le clic du bouton (qui est donc la cible de l'event (d'où le nom event.taget)), target représente le bouton sur lequel on a cliquer, dataset représente les données du bouton sur lequel on a cliquer, id représente l'id du bouton sur lequel on a cliquer. Id est recupérer grace au dataset, dataset est recupérer grace au target et target est recupérer grace au event qui, lui meme est recupérer grace au bouton sur lequel on a cliquer
            try {
                const response = await fetch(`http://localhost:8081/pieces/${id}/avis`);  //ici on recupere les avis grace au bouton sur lequel on a cliquer, de la manière suivante: http://localhost:8081/pieces/${id}/avis
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const avis = await response.json(); 
                console.log('Avis reçus:',    avis); // Pour déboguer

                const pieceElement = event.target.parentElement; //ici on recupere l'element parent du bouton sur lequel on a cliquer, avec la propriété parentElement on recupere l'element parent du bouton sur lequel on a cliquer
                console.dir(pieceElement); // Pour déboguer
// const bouton = event.target; //ici on recupere le bouton sur lequel on a cliquer
// console.dir('Bouton sur lequel on a cliquer : ', bouton); // Pour déboguer
                // On efface le contenu de l'élement parent du bouton sur lequel on a cliquer
          

                // On ajoute le contenu de l'élement parent du bouton sur lequel on a cliquer
                const avisElement = document.createElement("p");
                avisElement.classList.add("avis");
                avisElement.style.background = '#f0f0f0';
                avisElement.style.padding = '10px';
                avisElement.style.border = '1px solid #ccc';
                avisElement.style.borderRadius = '5px';

                for (let i = 0; i < avis.length; i++) {
                    avisElement.innerHTML += `
                          <strong>${avis[i].utilisateur} :</strong> <br> ${avis[i].commentaire}`;
                }
                console.log('Avis générés : ', avisElement);

                pieceElement.appendChild(avisElement);


            } catch (error) {
                console.error('Erreur:', error);
            }
        });
    }
}
//appel a la fonction fecth pour configurer une requête pour qu'elle soit envoyée avec le verbe http POST(création de données), et un objet au formt JSON pour sa charge utilie (le body, la charge utile est les données utilisées pour repondre a la requête), 

fetch('http://localhost:8081/pieces/1/avis', {
   method: "POST",
   headers: {
    "content-type": "application/json"
   },
   body: '{"commentaire": "Top produit !"}'
})
    

//Il existe deux façon de valider un formaulaire, 
//-soit quand l'utlisateur clique sur le bouton 'envoyer'
// //soit si l'utilisateur appuie sur la touche 'entrer' sur son clavier
// //nous devons donc ajouter à noutre button 'envoyer dans le html le type ="submit", ensuite dans le JS en placera un écouteur d'événemnt sur le 'évenment submit, ainsi peu importe la fçon qu'utilise l'itisateur pour valider le formaulaire si on surveulle l'événement sublit on sait que les données seront envoyées quand cet événement surviendra,  (ON aurait pû aussi utiliser un ecouteur d'evenement sur le bouton 'envoyer' et sur la touche 'entrer', mais cela n'est pas très optimal)
// export function ajoutListenerEnvoyerAvis() {
//     const formulaireAvis = document.querySelector(".formulaire-avis");  //ici on recupere le formulaire sur lequel on va ecouter le clique de l'utilisateur pour quand celui-ci l'aura rempli puis valider on enverra son commentaire (avis) a l'api, qui sauvegradera ces nouvelles données
//     formulaireAvis.addEventListener("submit", function(event) {
//         event.preventDefault();  // préviens le comportement par défaut du navigateur qui est de changer d'URL et initier le chargement d'une nouvelle page quand un formulaire est validé, ce que nous ne voulons pas ici car nous allons gérer nous même la communication avec le serveur grace à la fonction fetch()

// //Nous allons donc construire la charge utile  de la requête qui permettra d'ajouter l'avis dans l'API, Lacharge utilsie prend la forma d'une chaîne de caractère au format JSON, contenat un objet. Cet objet reprend les champs de formaulaire, et crée un propriété pour chacun d'entre eux
// //création de l'objet nuvel avis
//     const avis = {
//     pieceId: parseInt(event.target.querySelector("[name=piece-id]").value), //ici on recupere le contenu de l'input qui contient lid de la pièce, avec la propriété value ( donc avec [name=piece-id]qui est le name de l'inpt dans le html qui contient le nom utilisateur, comme il est de type number on utilise parseInt pour le changer en chaine de caractères), le .value est la propriété value de l'objet input qui permet de recupérer la valeur de l'input(on peux la trouver en regardant dans les devtools dans l'onglet proprié de cet input)
//     utilisateur: event.target.querySelector("[name=utilisateur]").value,
//     commentaire: event.target.querySelector("[name=commentaire]").value,    //Pensez à toujours vérifier les champs de formulaire avant d’envoyer votre requête au serveur, afin de vous assurer que les données envoyées correspondent bien aux attentes de celui-ci. Cela vous évitera bien des ennuis !
// }
// //Cet objet avis doit être converti en une chaîne de caractères au format JSON pour être transmis dans le body de la requête. Nous appelons donc la fonction JSON.stringify 
// //création de la charge utilise au format JSON pour la requête, avec strigify sur JSON
// const chargeUtile = JSON.stringify(avis);

// //Nous disposons maintenant de tous les éléments nécessaires pour créer et envoyer la requête avec la fonction fetch.

// //Appel à la fonction fetch avec toutes les informations nécessaires
// fetch("http://localhost:8081/avis", 
//     method: "POST", 
//     headers: {"content-type": "application/json" },
//      body: chargeUtile
// });

//     });
// }
/****************Ce code contient un souci: quand je soumet le formaulire la page web cligonte, ce qui indique que le formaulaire essaire probablement de se soumettre sans arrêt (voir le code dessous celui-ci pour correctin de ce pb************************************************ */
// export function ajoutListenerEnvoyerAvis() {
//     const formulaireAvis = document.querySelector(".formulaire-avis");
//     console.log("formulaire trouvé", formulaireAvis);

//     formulaireAvis.addEventListener("submit", function(event) {
//         event.preventDefault();  
//         console.log("Formulaire soumis")

//         //on crée un objet qui servira de la charge utile (nous recupérons l'élément avec querySeletor, ensuite nous recupérons la valeur de l'input avec la propriété value, nous utikons parseInt pour le convertir en chaine de caractères et nous utilisons a la place de document le event.target qui permet de recupérer l'objet sur lequel on a cliquer et non l'objet sur lequel on a soumis le formulaire)
//         const avis = {
//             pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
//             utilisateur: event.target.querySelector("[name=utilisateur]").value,
//             commentaire: event.target.querySelector("[name=commentaire]").value,
//         }

//         //on met la charge utile en formatJson avec JSON.stringify
//         const chargeUtile = JSON.stringify(avis);
//         console.log("Charge utile JSON : ",chargeUtile);


//         //enfin on appel la fonction fetch avec ces deux arguments (qui sont l'url de la requête et l'objet de configuration (qui contient la methode, le header et la charge utile)) pour envoyer la requête, on utilise la methode POST, le header content-type qui represente le format de la charge utile, et la charge utile qui contient l'objet avis qui a été créer ci-dessus
//         fetch("http://localhost:8081/avis", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: chargeUtile
//         });
//     });
// }

/**********************Nouvelle solution pour éciter le comportement de cligontement de ma page web suite a clique sur le bouton submit pour soulmettre le formaulaire, il semeble que ce soit parce que le forlmaulire n arrete pas d'essayer de se soumettre,**************************** */

export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    
    // Désactiver le comportement natif de validation HTML5 si on veut gérer nous-mêmes
    formulaireAvis.setAttribute('novalidate', true);

    formulaireAvis.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Désactiver le bouton pendant l'envoi
        const submitButton = event.target.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        
        try {
            // Validation côté client (creation de l'objet qui représente la charge utile)
            const avis = {
                pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
                utilisateur: event.target.querySelector("[name=utilisateur]").value,
                commentaire: event.target.querySelector("[name=commentaire]").value,
                etoiles: parseInt(event.target.querySelector("[name=nbEtoils]").value)
            };

            // Validation des données, ici on verifie si tous les champs sont remplis
            if (!avis.pieceId || !avis.utilisateur || !avis.commentaire) {
                throw new Error("Tous les champs sont obligatoires");
            }

            // Envoi de la requête vers l'API
            const response = await fetch("http://localhost:8081/avis", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(avis)
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const result = await response.json();
            console.log("Avis envoyé avec succès:", result);
            
            // Réinitialiser le formulaire
            formulaireAvis.reset();

            // Feedback utilisateur
            afficherMessage("Avis envoyé avec succès !", "success");

        } catch (error) {
            console.error("Erreur:", error);
            alert(error.message, "error");
        } finally {
            // Réactiver le bouton dans tous les cas
            submitButton.disabled = false;
        }
    });
}

// // Fonction pour afficher les messages à l'utilisateur
// function afficherMessage(message, type) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message', type);
//     messageElement.textContent = message;

//     // Ajouter le message dans le DOM
//     const form = document.querySelector('.formulaire-avis');
//     form.insertAdjacentElement('beforebegin', messageElement);

//     // Supprimer le message après 3 secondes
//     setTimeout(() => messageElement.remove(), 3000);
// }

