/**
 * Créez un objet avec des méthodes qui modifient ses propres propriétés à l'aide du mot-clé this. 
 * Utilisez cet objet dans une fonction callback asynchrone et assurez-vous que le contexte de this est préservé.
 */

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

function useThis(name) {
    setTimeout(() => {
        person.firstName = name;
        console.log("Nouveau nom après modification asynchrone :", person.fullName());
    }, 1000);
}

// Afficher le nom initial
console.log("Nom initial :", person.fullName());

// Appeler la fonction useThis pour déclencher la modification asynchrone
useThis("jaures");
