'use strict';
/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/


/**
 * Chargement de données pour l'ajout des jours
 * @param date - Paramètre date associé à la date actuelle
 * @param jour - Paramètre du nombre de jour à ajouter
 * @returns {Date} - Les données récupérées [date de fin du sprint]
 */
//Ajout des jours à une date donnée
function adjoutJourDate(date, jour){
    let rep = new Date(date);
    rep.setDate(rep.getDate() + jour);
    return rep;
}

/**
 * 
 * @returns {Array} - Les données récupérées [tableau de tous les mois de l'année]
les mois de l'année*/
function mois(){
    const monthNames = ["jan", "feb", "mar", "avr", "mai", "jui",
                        "jll", "august", "september", "oct", "nov", "déc"
                        ];
    return monthNames;
}