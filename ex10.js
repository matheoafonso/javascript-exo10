var compteur = 0;
var compteur2 = 0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click", UneProcedureQuiChangeLeText);

var MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);

var MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "on a appuyé sur : "+evenement.key;
}

function UneProcedureQuiChangeLeText(evenement) {
    evenement.target.className = 'divChanged';
    compteur++;
    evenement.target.innerHTML = "on m'a cliqué dessus : "+compteur+ " fois";
}

function UneProcedureQuiSurvole(evenement) {
    evenement.target.className = 'survol';
    compteur2++;
    evenement.target.innerHTML = "on m'a survolé : "+compteur2+ " fois";
}