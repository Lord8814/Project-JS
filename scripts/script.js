function afficherResultat(score, nbMotsProposes) {

    let spanScore = document.querySelector(".score span")

    let affichageScore = `${score} / ${nbMotsProposes}`

    spanScore.innerText = affichageScore
}

///
///function choixMP() {
///    let choix = prompt("mots ou phrases ?")
///    while (choix !== "mots" && choix !== "phrases") {
///choix = prompt(" mots ou phrases ?")
///    }
///    return choix
///}


///function lancerBoucleDeJeu(listePropositions) {
///    let score = 0
///    for (let i = 0; i < listePropositions.length; i++) {
///        let mot = prompt("Entrez le mot : " + listePropositions[i])
///        if (mot === listePropositions[i]) {
///
///            score++
///        }
///    }
///    return score
///}

function lancerJeu() {

    let choix = document.querySelector('input[name="choix"]:checked').id;

    if (choix === "mots") {
        listePropositions = listeMots
    } else {
        listePropositions = listePhrases

    }

    let index = 0;
    let score = 0;
    let nbMotsProposes = listePropositions.length;

    let champTexte = document.getElementById("champText");
    let motPropose = document.getElementById("motPropose");
    let btnValider = document.getElementById("btnValider");
    let spanScore = document.querySelector(".score span");

    function afficherMot() {
        if (index < listePropositions.length) {
            motPropose.innerText = listePropositions[index];
        } else {
            alert("Fin du jeu ! Score final : " + score + " / " + nbMotsProposes);
        }
    }

    btnValider.addEventListener("click", verif)
    champTexte.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verif();
        }
    });


    function verif() {

        let motTape = champTexte.value.trim();
        if (motTape === listePropositions[index]) {
            score++;
        }

        index++;
        let affichageScore = `${score} / ${nbMotsProposes}`
        spanScore.innerText = affichageScore;
        champTexte.value = "";
        afficherMot();
    }
    document.querySelectorAll('input[name="choix"]').forEach(radio => {
        radio.addEventListener("change", lancerJeu);
        score = 0;
        index = 0;

    });


    afficherMot();
}