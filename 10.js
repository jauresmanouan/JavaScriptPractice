/**
 * Utilisez le mode strict dans l'ensemble de votre script et corrigez toutes les erreurs qui apparaissent, 
 * y compris les erreurs de référence indéfinies et les erreurs de variables non déclarées.
 */

'use strict'

// Erreur de declaration de variable
undeclareVariable = "Ceci retournera une erreur";

// Variable dupliquée
function duplicateParameter (a, a) {
    console.log(a);
}

duplicateParameter(4, 5);
