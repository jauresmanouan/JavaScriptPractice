/**
 * Utilisez les promesses pour créer une séquence d'appels asynchrones
 * où chaque appel dépend du résultat du précédent. 
 * Gérez les erreurs de manière appropriée.
 */

function cuireOeuf (callback) {
    setTimeout(()=>{
        console.log("La cuisson est terminée");
        callback();
    }, 1000 )
}

function consommerOeuf (callback) {
    setTimeout(()=>{
        console.log("C'était super");
        callback();
    }, 3000 )
}
function sortirVoirAmis (callback) {
    setTimeout(()=>{
        console.log("Rdv annué");
        callback()
    }, 500 )
}

cuireOeuf()
consommerOeuf()
sortirVoirAmis()