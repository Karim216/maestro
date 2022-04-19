'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function showModalForm(){
    document.getElementById("modal-new-sprint").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function closeModalForm(){
    document.getElementById("modal-new-sprint").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}

function dragStart(){

    //var select drag an drop
    let containerDraggables = document.querySelectorAll(".container-drag");
    let draggables = document.querySelectorAll(".draggable");
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
          draggable.classList.add('dragging')
        })
      
        draggable.addEventListener('dragend', () => {
          draggable.classList.remove('dragging')
        })
    })
    
    containerDraggables.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
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

function getDragAfterElement(container, y){
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


function onGetResponseModal(response){

    let containt = document.getElementById("new-iteration-sprint");
    let iteration = document.createElement("div");

    iteration.classList.add("sprint-iteration");
    iteration.dataset.iteration = "2";

    iteration.innerHTML=response;

    containt.appendChild(iteration);

    closeModalForm();
    console.log(containt);


}

//affichage du formulaire pour ajouter un risque au sprint
function showFormRisque(){
    document.getElementsByClassName('form-add-rique')[0].style.display = 'block';
    document.getElementsByClassName('btn-add-risque')[0].style.display = 'none'
}