/**
 * Créez une fonction qui prend en entrée deux tableaux 
 * et retourne un nouveau tableau contenant uniquement 
 * les éléments communs aux deux tableaux, sans utiliser de boucle explicite.
 *function commonElement (tab1, tab2) {
    let elementCommun = [];
    for (let i = 0; i<tab1.length; i++) {
        for(let j = 0; j<tab2.length; j++) {
            if (tab1[i] == tab2[j]) {
                elementCommun.push(tab1[i]);
                
            }
        }
    }
    return elementCommun
} */

function commonElement (tab1, tab2) {
    let elementCommun = tab1.filter(element => tab2.includes(element));
    return elementCommun
}
console.log(commonElement([2,3,4], [3,1,2]))