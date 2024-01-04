/**
 * Écrivez une fonction qui prend en entrée trois nombres et les compare de manière à trouver le plus petit, 
 * le plus grand et le milieu.
 * Utilisez des déclarations conditionnelles sans utiliser de fonctions intégrées telles que Math.min ou Math.max.
 */

function compareNombre (nombre1, nombre2, nombre3){
    switch(true) {
        case nombre1 <= nombre2 && nombre1 <= nombre3:
            console.log("Le plus petit : ", nombre1);
            break;
        case nombre2 <= nombre1 && nombre2 <= nombre3:
            console.log("Le plus petit : ", nombre2);
            break;
        case  nombre3 <= nombre2 && nombre3 <= nombre1:
            console.log("Le plus petit : ", nombre3);
            break;
    }

    switch(true) {
        case nombre1 >= nombre2 && nombre1 >= nombre3:
            console.log("Le plus grand : ", nombre1);
            break;
        case nombre2 >= nombre1 && nombre2 >= nombre3:
            console.log("Le plus grand : ", nombre2);
            break;
        case nombre3 >= nombre2 && nombre3 >= nombre1:
            console.log("Le plus grand : ", nombre3);
            break;
    }

    switch(true) {
        case (nombre1 >= nombre2 && nombre1 <= nombre3) || (nombre1 <= nombre2 && nombre1 >= nombre3):
            console.log("Le nombre du milieu :", nombre1);
            break;
        case (nombre2 >= nombre1 && nombre2 <= nombre3) || (nombre2 <= nombre1 && nombre2 >= nombre3):
            console.log("Le nombre du milieu :", nombre2);
            break;
        case (nombre3 >= nombre1 && nombre3 <= nombre2) || (nombre3 <= nombre1 && nombre3 >= nombre2):
            console.log("Le nombre du milieu :", nombre3);
            break;
    }
}

let a = 1;
let b = 50;
let c = 10;

compareNombre(a,b,c)