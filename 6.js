/**
 * Utilisez une boucle for...in 
 * pour itérer à travers les propriétés d'un objet complexe
 * (avec des propriétés imbriquées) et affichez-les dans la console.
 */

function propObjet (obj){
    for ( let elements in obj) {
        console.log(`${typeof obj[elements]}`);
    }
}

let complexe = {
    nom: "Jaures",
    age:30,
    stat: true,
}

propObjet(complexe)