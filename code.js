let randomNumber = 0;
let attempt = 0;
let maxAttempts = 0;
let range = 0;
document.getElementById("start").addEventListener("click",startgame);
function startgame(){
    const difficulty = document.getElementById("difficulty").value;
    range;
    switch (difficulty){
        case "Facile":
            range = 10;
            maxAttempts = 5;
            break;
        case "Intermédiaire":
            range = 100;
            maxAttempts = 3;
            break;
        case "Difficile":
            range = 1000;
            maxAttempts = 1;
            break;
        default:
            range = 10;  
            maxAttempts = 5;
            break;
    }
    randomNumber = Math.floor(Math.random()*range)+1;
    attempt = 0;
    document.getElementById("number").value="";
    document.getElementById("game").classList.remove("hidden");
    document.getElementById("message").textContent=`Le jeu commence, vous avez ${maxAttempts} essais`;
    document.getElementById("intervalle").textContent=`Devinez un nombre aléatoire entre 1 et ${range}`;
}
document.getElementById("check").addEventListener("click",check);
function check(){
    const userGuess =parseInt( document.getElementById("number").value,10);
    if (isNaN(userGuess)|| userGuess < 1 || userGuess > range) {
        document.getElementById("message").textContent = "Veuillez entrer un nombre valide!";
        return;
    }
    if(userGuess == randomNumber){
        document.getElementById("game").classList.add("hidden");
        alert("Bravo, vous avez trouvé le nombre!");
        setTimeout(restart, 500);         
    }else{
        attempt++;
        if(attempt == maxAttempts){
            alert(`Vous avez perdu, le nombre était ${randomNumber}`);
            setTimeout(restart, 500);
        }else{
            document.getElementById("number").value="";
            document.getElementById("message").textContent=`Désolé, ce n'est pas le bon nombre, il vous reste ${maxAttempts - attempt} essais`;
        }
    }
}
function restart() {
    const replay = prompt("Voulez-vous rejouer ? (oui ou non)");
    if (replay.toLowerCase() === "oui") {
        startgame();
    } else {
        document.getElementById("game").classList.add("hidden");
    }
}