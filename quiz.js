let totalScore = 0

let q1a1 = document.querySelector("#question1answer1");
let q1a2 = document.querySelector("#question1answer2");
let q1a3 = document.querySelector("#question1answer3");
let q1a4 = document.querySelector("#question1answer4");
let q1Score = 0

function q1a1Function() {
    q1a1.style.background = "lightslategray";
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
    q2a1.style.background = "blue";
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

let q3a1 = document.querySelector("#question3answer1");
let q3a2 = document.querySelector("#question3answer2");
let q3a3 = document.querySelector("#question3answer3");
let q3a4 = document.querySelector("#question3answer4");
let q3Score = 0;

function q3a1Function() {
    q3a1.style.background = "blue";
    q3a2.style.background = "white";
    q3a3.style.background = "white";
    q3a4.style.background = "white";
    q3Score = 1
}
function q3a2Function() {
    q3a1.style.background = "white";
    q3a2.style.background = "blue";
    q3a3.style.background = "white";
    q3a4.style.background = "white";
    q3Score = 2
}
function q3a3Function() {
    q3a1.style.background = "white";
    q3a2.style.background = "white";
    q3a3.style.background = "blue";
    q3a4.style.background = "white";
    q3Score = 3
}
function q3a4Function() {
    q3a1.style.background = "white";
    q3a2.style.background = "white";
    q3a3.style.background = "white";
    q3a4.style.background = "blue";
    q3Score = 4
}

function qSubmit() {
    totalScore = totalScore + q1Score + q2Score + q3Score;
    console.log(totalScore);
    
    let averageScore = totalScore/3;

if (averageScore < 1.5){
    message = 'Sports';
} else if (averageScore < 2.5){
    message = 'Music';
} else if(averageScore < 3.5){
    message = 'Arts';
} else if(averageScore < 4.5){
    message = 'Service';
} else {
message = 'You missed at least one question';
}
}



function qFinish() {
    alert(message);

}