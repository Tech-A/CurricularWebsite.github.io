let q1a1 = document.querySelector("#question1answer1");
let q1a2 = document.querySelector("#question1answer2");
let q1a3 = document.querySelector("#question1answer3");
let q1a4 = document.querySelector("#question1answer4");
let q1Score = 0
let totalScore = 0
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
function q1Submit() {
    totalScore = totalScore + q1Score;
    console.log(totalScore);
}


let averageScore = totalScore/5;
function qFinish() {

}