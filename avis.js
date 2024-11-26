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
            const id = event.target.dataset.id;
            try {
                const response = await fetch(`http://localhost:8081/pieces/${id}/avis`);
                const avis = await response.json();
                console.log(avis); // Pour déboguer
            } catch (error) {
                console.error('Erreur:', error);
            }
        });
    }
}
    
