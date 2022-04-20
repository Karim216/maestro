'use strict';
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


function onGetResponseModal(reponse){

    let containt = document.getElementById("new-iteration-sprint");
    let iteration = document.createElement("div");

    let sprintName = document.querySelectorAll('.sprint-element-number')[1].innerHTML;

    let nbr = document.querySelectorAll('.span-sprint-iteration').length;

    iteration.classList.add("sprint-iteration");
    iteration.dataset.iteration = "2";


    iteration.innerHTML=reponse;

    containt.appendChild(iteration);

    //le nième sprint
    document.querySelectorAll('.span-sprint-iteration')[nbr].innerHTML = sprintName+" : "+sprintName.substring(-1)+"ème itération";

    //date du nouveau sprint
    document.querySelectorAll('.span-duree-sprint')[nbr].innerHTML = document.getElementById('calculDate').innerHTML;

    //velocité
    document.querySelectorAll('.nbr-velocite')[nbr].innerHTML = document.getElementById('velocite').value;

    onClickCloseModalForm();
    console.log(containt);
}

//Affichage de la duree du sprint
function onSprintDuree(debut, fin, semaine){
    console.log(debut, fin, semaine);
    document.getElementById("calculDate").innerHTML = "Du "+debut+" au "+fin+" ("+semaine+" samaines)";
}