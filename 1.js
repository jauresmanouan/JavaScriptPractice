/*
Fonction qui prend en entrée une chaîne de caractères 
et retourne une nouvelle chaîne avec les caractères inversés. 
Utilisez une variable pour stocker le résultat intermédiaire.
*/ 
let char = "Joyeux"

function inverChar () {
    let inter = char.split('').reverse().join('');
    console.log(inter);
}

inverChar();