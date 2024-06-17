alert(" How To Play \n Rock-Paper-Scissor game is a simple hand game played between two peoples. \n Each player simultaneously choose one of three shapes which are \n 1.Rock ('a fist') \n 2.paper ('an open hand') \n 3.Scissor ('a fist with index and middle fingers extended forming a V') \n \n Winning and Loosing Rules \n 1.Rock crushes Scissors ('Rock Wins') \n 2.Scissors cuts Paper ('Scissor Wins')\n 3.Paper covers Rock ('Paper Wins') \n 4.If both players choose same icon , then it will draw ,that is no one win ");
let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".icon");

let compchoicefun = () => {
    let optionarr = ["rock", "paper", "scissor"];
    let randidx = Math.floor(Math.random() * 3);
    return (optionarr[randidx]);
};

function drawstate(userchoice, compchoice) {
    if (userchoice == compchoice) {
        console.log("game was draw");
    }
};

let playgame = (userchoice) => {
    console.log("choice was clicked :", userchoice);
    let compchoice = compchoicefun();
    console.log("computer choice is :", compchoice);


    if (userchoice == compchoice) {
        drawstate(userchoice, compchoice);
        document.querySelector(".state").textContent = "Game Was Draw";
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compchoice == "paper" ? false : true;
            if (userwin == false) {
                document.querySelector(".state").textContent = "Comp's Paper beats Your Rock";
            } else {
                document.querySelector(".state").textContent = "Your Rock beats Comp's Scissor";
            }
        } else if (userchoice == "paper") {
            userwin = compchoice == "scissor" ? false : true;
            if (userwin == false) {
                document.querySelector(".state").textContent = "Comp's Scissor beats Your Paper";
            } else {
                document.querySelector(".state").textContent = "Your paper beats Comp's Rock";
            }
        } else if (userchoice == "scissor") {
            userwin = compchoice == "rock" ? false : true;
            if (userwin == false) {
                document.querySelector(".state").textContent = "Comp's Rock beats Your Scissor";
            } else {
                document.querySelector(".state").textContent = "Your Scissor beats Comp's Paper";
            }
        }
        if (userwin == true) {
            console.log("you won");
            userscore++;
            document.querySelector("#userscorecard").textContent = userscore;
        } else {
            console.log("comp won");
            compscore++;
            document.querySelector("#compscorecard").textContent = compscore;
        }
    }

};

choices.forEach((icon) => {
    icon.addEventListener("click", () => {
        let userchoice = icon.getAttribute("id");
        playgame(userchoice);
    });
});


