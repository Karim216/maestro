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
    document.getElementById("new-sprint").addEventListener('click', onClickShowModalForm);

    //close modal form
    document.getElementById("close-modal-form").addEventListener('click', onClickCloseModalForm);
    document.getElementById("cancel-add-sprint").addEventListener('click', onClickCloseModalForm);

    //Chargement de l'évènement drag and drop
    onLoadDragDrop();

    //declaanchement d'ajout des données du form modal
    document.getElementById('valide-add-sprint').addEventListener('click', onClickGetDataModalForm);

    //Appel du formulaire d'ajout du risque au sprint
    document.getElementsByClassName('btn-add-risque')[0].addEventListener('click', onClickShowFormRisque);

    //Close formulaire du risque
    for (let index = 0; index < 2; index++) {
        document.querySelectorAll('.btn-risque')[index].addEventListener('click', onClickCloseFormRisque);
    }

    //Evenement qui genère la durée du sprint
    document.getElementById('duree').addEventListener('input', onClickGetInputEvent);

    //Evenement de gestion du champ de recherche
    onFocusGetEvent();
    
    //Evenement de fermeture du champ de recherche
    for (let index = 0; index < 3; index++) {
        document.querySelectorAll('.close-search-btn')[index].addEventListener('click', onCloseInputSearch);
    }
};