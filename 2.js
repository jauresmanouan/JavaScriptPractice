/**
 * Fonction qui prend en entrée un tableau de nombres et retourne 
 * un nouveau tableau contenant uniquement les nombres pairs, 
 * mais représentés en chaîne de caractères.
 */

function tabNombrePairs (tabNombre) {
     let tabPairs = [];
    for (let i = 0; i < tabNombre.length; i++) {
        if (tabNombre[i] % 2 === 0) {
            tabPairs.push(tabNombre[i].toString());
        }

    }
    return tabPairs;
}

console.log(tabNombrePairs([2,3,6,5,4,8]));