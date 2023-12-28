/**
 * Déclarez une variable contenant une chaîne de caractères représentant un nombre décimal. 
 * Utilisez la conversion de type pour obtenir la partie entière de ce nombre sans utiliser 
 * de fonctions intégrées telles que parseInt ou Math.floor.
 */

let nombreChar = "2.34";

let splitNombre = nombreChar.split('.');

let partieEntiere = +splitNombre[0];

console.log(partieEntiere);

console.log(typeof (partieEntiere));