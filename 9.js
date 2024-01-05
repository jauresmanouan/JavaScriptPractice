/**
 * Créez une fonction qui prend en entrée une fonction de rappel
 * Et l'exécute après un délai aléatoire compris entre 1 et 5 secondes.
 */

let min = 1000;
let max = 5000;

let random = Math.random() * (max - min) + min;

console.log("Délai aléatoire :", random);

function prendFonction(rappel) {
    setTimeout(() => {
        console.log(`La fonction de rappel sera exécutée après un délai de ${random / 1000} secondes.`);
        rappel();
    }, random);
}

function maFonctionDeRappel() {
    console.log("La fonction de rappel a été exécutée !");
}

prendFonction(maFonctionDeRappel);
