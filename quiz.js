let totalScore = 0

let q1a1 = document.querySelector("#question1answer1");
let q1a2 = document.querySelector("#question1answer2");
let q1a3 = document.querySelector("#question1answer3");
let q1a4 = document.querySelector("#question1answer4");
let q1Score = 0

function q1a1Function() {
    q1a1.style.background = "grey";
    q1a2.style.background = "white";
    q1a3.style.background = "white";
    q1a4.style.background = "white";
    q1Score = 1
}
function q1a2Function() {
    q1a1.style.background = "white";
    q1a2.style.background = "blue";
    q1a3.style.background = "white";
    q1a4.style.background = "white";
    q1Score = 2
}
function q1a3Function() {
    q1a1.style.background = "white";
    q1a2.style.background = "white";
    q1a3.style.background = "blue";
    q1a4.style.background = "white";
    q1Score = 3
}
function q1a4Function() {
    q1a1.style.background = "white";
    q1a2.style.background = "white";
    q1a3.style.background = "white";
    q1a4.style.background = "blue";
    q1Score = 4
}

let q2a1 = document.querySelector("#question2answer1");
let q2a2 = document.querySelector("#question2answer2");
let q2a3 = document.querySelector("#question2answer3");
let q2a4 = document.querySelector("#question2answer4");
let q2Score = 0;

function q2a1Function() {
    q2a1.style.background = "grey";
    q2a2.style.background = "white";
    q2a3.style.background = "white";
    q2a4.style.background = "white";
    q2Score = 1
}
function q2a2Function() {
    q2a1.style.background = "white";
    q2a2.style.background = "blue";
    q2a3.style.background = "white";
    q2a4.style.background = "white";
    q2Score = 2
}
function q2a3Function() {
    q2a1.style.background = "white";
    q2a2.style.background = "white";
    q2a3.style.background = "blue";
    q2a4.style.background = "white";
    q2Score = 3
}
function q2a4Function() {
    q2a1.style.background = "white";
    q2a2.style.background = "white";
    q2a3.style.background = "white";
    q2a4.style.background = "blue";
    q2Score = 4
}


function qSubmit() {
    totalScore = totalScore + q1Score + q2Score;
    console.log(totalScore);
    
    let averageScore = totalScore/5;

if (averageScore < 1.5){
    message = 'You belong in Sports';
}
}



function qFinish() {
    alert(message);

}