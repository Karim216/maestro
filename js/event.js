'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onGetDataModalForm(){
    console.log('test');
    $.get(
        'htmlStaticContent/newSprintIteration.html', // URL cible vers laquelle la requête est envoyée
        onGetResponseModal // fonction de callback qui recevra la réponse du serveur
    );
}