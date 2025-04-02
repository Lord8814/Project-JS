let baliseZoneTape = document.getElementById("zoneTape");
console.log(baliseZoneTape.clientHeight);

let baliseZoneTapeSpan = document.querySelector("#zoneTape span");
console.log(baliseZoneTapeSpan);


let inputTexte = document.getElementById("zoneTape");


let boutonValidation = document.getElementById(".btnValide");


let affichageMot = document.querySelector(".zoneProposition span");


let affichageScore = document.querySelector(".score");


let boutonsRadio = document.querySelectorAll(".choixMP input");

let nouvelElement = document.createElement("span");

// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);

lancerJeu()