/*
Fonction qui prend en entrée une chaîne de caractères 
et retourne une nouvelle chaîne avec les caractères inversés. 
Utilisez une variable pour stocker le résultat intermédiaire.
*/ 

function inverChar (char) {
    let inter = char.split('').reverse().join('');
    return inter;
}

console.log(inverChar('Joyeux Noël'));