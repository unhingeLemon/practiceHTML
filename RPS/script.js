let uScore = 0;
let cScore = 0;
var uSpan = document.getElementById("uScore");
var cSpan = document.getElementById("cScore");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getCompChoice(){
    const rand = Math.floor(Math.random()*3);
    const cArr = ["r","p","s"];
    return cArr[rand];

}

function convert(letter){
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissor";
}

function wins(userChoice,cChoice){
    uScore++
    uSpan.innerHTML = uScore;
    console.log("USER WINS.");
    const sLuser = "YOU".fontsize(3).sub();
    const sLcomp = "COM".fontsize(3).sub();
    result.innerHTML = convert(userChoice) + sLuser + " Beats " + convert(cChoice) + sLcomp + ". You Win!";
    document.getElementById(userChoice).classList.add("green_glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green_glow")},300);
}

function lose(userChoice,cChoice){
    cScore++;
    cSpan.innerHTML = cScore;
    console.log("User LOSE.")
    const sLuser = "YOU".fontsize(3).sub();
    const sLcomp = "COM".fontsize(3).sub();
    result.innerHTML = convert(cChoice) + sLcomp + " Beats " + convert(userChoice) + sLuser + ". You lose!";
    document.getElementById(userChoice).classList.add("red_glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red_glow")},300);
}

function draw(userChoice,cChoice){
    result.innerHTML = "DRAW!";
    console.log("draw");
    const sLuser = "YOU".fontsize(3).sub();
    const sLcomp = "COM".fontsize(3).sub();
    result.innerHTML = convert(userChoice) + sLuser + " vs. " + convert(cChoice) + sLcomp + " is a DRAW!";
    document.getElementById(userChoice).classList.add("gray_glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray_glow")},300);

}
function game(userChoice){
    const cChoice = getCompChoice();
    switch(userChoice + cChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,cChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,cChoice);
            break;
        case "rr":
        case "PP":
        case "ss":
            draw(userChoice,cChoice);
            break;
    }
}




function main(){
    rock.addEventListener('click',function(){
        game("r")
    })
    paper.addEventListener('click',function(){
        game("p")
    })
    scissor.addEventListener('click',function(){
        game("s")
    })
}


main();