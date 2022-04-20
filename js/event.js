'use strict';
/*****************************************************************************/
/*****************************     DONNEES     *******************************/
/******************************************************************************/ 


//Selection de tous les entrée input dans le formulaire du modal
let inputDateModal = document.querySelectorAll('.input-form');

/**
 * 
 * les donnée de la fonction onClickGetInputEvent
 */
const dateDebutSprint = new Date();
let nombreSemaineSprint;
let dateFinSprint;

let anneeDebut;
let moisDebut;
let jourDebut;

let anneeFin;
let moisFin;
let jourFin;

let dateDebut;
let dateFin;


/**
 * 
 * les donnée de la fonction onLoadDragDrop
 */
 //var select drag an drop
 let containerDraggables = document.querySelectorAll(".container-drag");//recupère le container du drag [liste ul]
 let draggables = document.querySelectorAll(".draggable");//récupère les élément à déplacer

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

/**
 * Appel du modal
 * pour l'ajout d'un
 * nouveau sprint
 * onClickShowModalForm (appelel du modal pour l'ajour d'un "sprint")
 */
function onClickShowModalForm(){

    document.getElementById("modal-new-sprint").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    for (let index = 0; index < 2; index++) {
        document.querySelectorAll('.sprint-element-number')[index].innerHTML = "Sprint "+
                                        (document.querySelectorAll('.sprint-iteration').
                                        length+1);
    }

    for (let index = 0; index < inputDateModal.length; index++) {
        inputDateModal[index].value = "";
        
    }
    document.getElementById('calculDate').innerHTML = "";
}


/**
 * Ferme le modal
 * Aucun ajout sauf si on a cliqué sur valider
 * Dans ce cas les données sont recupérés et ajouter 
 * Dans le nouveau sprint avant sa fermeture
 */
function onClickCloseModalForm(){
    document.getElementById("modal-new-sprint").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";

}

/**
 * affiche le tableau formulaire
 * pour ajouter les risques au sprint
 */
function onClickShowFormRisque(){
    document.getElementsByClassName('form-add-rique')[0].style.display = 'block';
    document.getElementsByClassName('btn-add-risque')[0].style.display = 'none'
}

/**
 * ferme le tableau formulaire
 * ajoute risques au sprint
 */
function onClickCloseFormRisque(){
    document.getElementsByClassName('form-add-rique')[0].style.display = 'none';
    document.getElementsByClassName('btn-add-risque')[0].style.display = 'block'
}

/**
 * [HTTP:GET] Méthode ajax pour exécuter et récupérer
 * le code du fichier
 * http://localhost/testRecrutement/htmlStaticContent/newSprintIteration.html
 * et le stocker dans le paramètre de la fonction onGetResponseModal
 */
function onClickGetDataModalForm(){
    console.log('test');

    for (let index = 0; index < inputDateModal.length; index++) {
        if(inputDateModal[index].value==""){
            alert("remplisser tous les champs svp !");
            return -1;
        }
        else{
            $.get(
                'htmlStaticContent/newSprintIteration.html', // URL cible vers laquelle la requête est envoyée
                onGetResponseModal // fonction de callback qui recevra la réponse du serveur
            );
            return -1;
        }
        
    }
    
}

/**
 * Récupère l'évènement qui envoi le
 * nombre de semaine pour le sprint
 * calcule et détermine la date de fin du sprint
 */
function onClickGetInputEvent(){
    
    nombreSemaineSprint = this.value;//Récupère à l'instant la valeur courante dans l'input

    dateFinSprint = adjoutJourDate(dateDebutSprint, nombreSemaineSprint*7);

    anneeDebut = dateDebutSprint.getFullYear();
    moisDebut = dateDebutSprint.getMonth();
    jourDebut = dateDebutSprint.getDate();

    anneeFin = dateFinSprint.getFullYear();
    moisFin = dateFinSprint.getMonth();
    jourFin = dateFinSprint.getDate();

    dateDebut = jourDebut+" "+mois()[moisDebut]+". "+anneeDebut;
    dateFin = jourFin+" "+mois()[moisFin]+". "+anneeFin;

    onSprintDuree(dateDebut, dateFin, nombreSemaineSprint);

}

/**
 *Gestion de l'évènement de 'input type="search"'
 */
function onFocusGetEvent(){

    for (let index = 0; index < 3; index++) {
        document.querySelectorAll('.search-txt')[index].addEventListener('focus', (event) => {
            event.target.style.width = '145px';
            document.querySelectorAll('.close-search-btn')[index].style.display = "block";

            // console.log(document.querySelectorAll('.search-txt')[index].focus())
    });
        
    }
}

function onCloseInputSearch(){
    for (let index = 0; index < 3; index++) {
        document.querySelectorAll('.close-search-btn')[index].style.display = "none";
        document.querySelectorAll('.search-txt')[index].style.width = '83px';
        document.querySelectorAll('.search-txt')[index].value = "";
        
    }
}

/**
 *
 */
function onLoadDragDrop(){
    
    //La classe "dragging" permet de sélectionner et gérer l'évènement de l'élément en cour
    //Ajout des évènements aux éléments à déplacer 
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging')//Départ [En cour...]
        })
      
        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging')//Fin [Terminé...]
        })
    })
    
    containerDraggables.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = onGetDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null){
                container.appendChild(draggable)
            }
            else{
                container.insertBefore(draggable, afterElement)
            }
        })
    })
}

/**
 * Permet de récupérer et d'insérer l'élément en dessous ou au dessus
 * en déplacent les autres
 * 
*/
function onGetDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        }
        else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}