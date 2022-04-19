'use strict';

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera totalement construit
 * par le navigateur.
 *
 * Lorsque l'on donne en argument une fonction, elle est utilisée comme gestionnaire
 * d'évènements pour l'évènement JavaScript natif DOMContentLoaded.
 */

window.onload = function() {
    //Appel du formulaire modal pour l'ajout d'un nouveu sprint
    document.getElementById("new-sprint").addEventListener('click', showModalForm);

    //close modal form
    document.getElementById("close-modal-form").addEventListener('click', closeModalForm);
    document.getElementById("cancel-add-sprint").addEventListener('click', closeModalForm);

    //drag and drop start
    dragStart();

    //declaanchement d'ajout des données du form modal
    document.getElementById('valide-add-sprint').addEventListener('click', onGetDataModalForm);

    //Appel du formulaire d'ajout du risque au sprint
    document.getElementsByClassName('btn-add-risque')[0].addEventListener('click', showFormRisque)
};