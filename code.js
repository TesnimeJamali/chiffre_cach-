let randomnumber,guess,maxGuess;
function startgame(){
    const difficulty = document.getElementById("difficulty").value;
    let maxRange;
    switch (difficulty){
        case "Facile":
            maxRange = 10;
            maxGuess = 5;
            break;
        case "Intermédiaire":
            maxRange = 100;
            maxGuess = 3;
            break;
        case "Difficile":
            maxRange = 1000;
            maxGuess = 1;
            break;
    }
    randomnumber = Math.floor(Math.random()*maxRange+1);
    guess = 0;
    document.getElementById("number").value="";
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("message").textContent="Le jeu commence, vous avez "+maxGuess+" essais";
    document.getElementById("message").textContent="Devinez un nombre aléatoire entre 1 et "+maxRange;
}
function check(){
    const userGuess =parseInt( document.getElementById("number").value,10);
    if (isNaN(userGuess)) {
        document.getElementById("message").textContent = "Veuillez entrer un nombre valide!";
        return;
    }
    if(userGuess == randomnumber){
        document.getElementById("game").classList.add("hidden");
        alert("Bravo, vous avez trouvé le nombre!");
        setTimeout(restart, 1500);         
        //document.getElementById("message").textContent="Bravo, vous avez trouvé le nombre";
        //document.getElementById("game").classList.add("hidden");
        //setTimeout(restart,1000);
    }else{
        guess++;
        if(guess == maxGuess){
            //document.getElementById("message").textContent="Vous avez perdu, le nombre était "+randomnumber;
            //document.getElementById("game").classList.add("hidden");
            document.getElementById("game").classList.add("hidden");
            alert("Vous avez perdu, le nombre était " + randomnumber);
            setTimeout(restart, 1500);
        }else{
            document.getElementById("number").value="";
            document.getElementById("message").textContent="Désolé, ce n'est pas le bon nombre, il vous reste "+(maxGuess-guess)+" essais";
        }
    }
}
function restart() {
    const replay = prompt("Voulez-vous rejouer ? (oui ou non)");

    if (replay && replay.toLowerCase() === "oui") {
        startgame();
    } else {
        document.getElementById("game").classList.add("hidden");
    }
}