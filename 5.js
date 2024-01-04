/**
 * Écrivez une fonction qui compare deux objets de manière récursive, 
 * en tenant compte de toutes les propriétés et sous-propriétés.
 * Gérez les cas spéciaux tels que les tableaux.
 */

function comparaisonRecursive(obj1, obj2) {
    switch (true) {
        case typeof obj1 !== typeof obj2:
            return false;
        case Array.isArray(obj1) && Array.isArray(obj2):
            if(obj1.length !== obj2.length) {
                return false;
            }
            else {
                for (let i = 0; i<obj1.length; i++) {
                    if (obj1[i] !== obj2[i]) {
                        return false;
                    }
                }
                return true;
            }
        case typeof(obj1) === 'object' && typeof(obj2) === 'object':
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            const values1 = Object.values(obj1);
            const values2 = Object.values(obj2);

            if (keys1.length !== keys2.length) {
                return false;
            }
            for (let j = 0; j<keys1.length; j++) {
                if (keys1[j] !== keys2[j]){
                    return false;
                }
                else if (values1[j] != values2[j]) {
                    return false;
                }
                else {
                    return true;
                }
                
            }
        default:
            return false;
    }
}

const objet1 = [1, 3, 4];
const objet2 = [1, 2, 4];

const objet3 = {
    nom: "John",
    age: 25,
    adresse: {
        rue: "123 Rue Principale",
        ville: "Villeville"
    }
};

const objet4 = {
    nom: "Jane",
    age: 30,
    adresse: {
        rue: "456 Rue Secondaire",
        ville: "Autreville"
    }
};

console.log(comparaisonRecursive(objet1, objet2));
console.log(comparaisonRecursive(objet3, objet4));
