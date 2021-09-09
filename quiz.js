var userName = document.querySelector("#userName");
let startbt = document.querySelector('#startbutton');
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");
let q1 = document.querySelector("#question1");
let q2 = document.querySelector("#question2");
let q3 = document.querySelector("#question3");
let q4 = document.querySelector("#question4");
let q5 = document.querySelector("#question5");
let fini = document.querySelector("#moreinfo");

let arts = document.querySelector("#Artsinfo");
let sports = document.querySelector("#Sportsinfo");
let music = document.querySelector("#Musicinfo");
let service = document.querySelector("#Serviceinfo");

startbt.style.display = "block"
q1.style.display = "none";
q2.style.display = "none";
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";

function start() {
    startbt.style.display = "none"
    q1.style.display = "block";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    fini.style.display ="none";
    greetingInput.style.display = "none";
    arts.style.display = "none";
    sports.style.display = "none";
        music.style.display = "none";
        service.style.display = "none";
}

function submitq1() {
    startbt.style.display = "none"
    q1.style.display = "none";
    q2.style.display = "block"
    greetingInput.style.display = "none";
    q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function submitq2(){
    startbt.style.display = "none"
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "block";
    q4.style.display = "none";
    q5.style.display = "none";
    fini.style.display ="none"; 
    greetingInput.style.display = "none";
    arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function returnq2(){
    startbt.style.display = "none"
q1.style.display = "block";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function submitq3(){
    startbt.style.display = "none"
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "block";
    q5.style.display = "none";
    fini.style.display ="none"; 
    greetingInput.style.display = "none";
    arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function returnq3(){
    startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "block"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function submitq4(){
    startbt.style.display = "none"
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "block";
    fini.style.display ="none"; 
    greetingInput.style.display = "none";
    arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function returnq4(){
    startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "block";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}
function submitq5(){
    startbt.style.display = "none"
    q1.style.display = "none";
    q2.style.display = "none";
    q3.style.display = "none";
    q4.style.display = "none";
    q5.style.display = "none";
    fini.style.display ="none"; 
    arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";

    greetingInput.style.display = "block";

    totalScore = totalScore + q1Score + q2Score + q3Score + q4Score + q5Score;
    
    let averageScore = totalScore/5;

if (averageScore < 1.5){
    message = 'Sports';
} else if (averageScore < 2.5){
    message = 'Music';
} else if(averageScore < 3.5){
    message = 'Arts';
} else if(averageScore < 4.5){
    message = 'Service';
} 
}

function returnq5(){
    startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "block";
q5.style.display = "none";
fini.style.display ="none";
greetingInput.style.display = "none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}

function returnfini() {
    startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "block";
fini.style.display ="none";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
}

function greeting() {
headerText.innerHTML = ""
headerText.innerHTML = userName.value + ", you should try " + (message) + "!";
greetingInput.style.display = "block";
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="block";
arts.style.display = "none";
sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
    startbt.style.display = "none"
}



function info() {
greetingInput.style.display = "none";
startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";


if (message = 'Sports'){
arts.style.display = "none";
sports.style.display = "block";
    music.style.display = "none";
    service.style.display = "none";
} else if (message = 'Music'){
    arts.style.display = "none";
    sports.style.display = "none";
    music.style.display = "block";
    service.style.display = "none";
} else if (message = 'Arts') {
    arts.style.display = "block";
    sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
} else {
    service.style.display = "block";
    arts.style.display = "none";
    sports.style.display = "none";
    music.style.display = "none";
} }


let totalScore = 0

let q1a1 = document.querySelector("#question1answer1");
let q1a2 = document.querySelector("#question1answer2");
let q1a3 = document.querySelector("#question1answer3");
let q1a4 = document.querySelector("#question1answer4");
let q1Score = 0

function q1a1Function() {
    q1a1.style.background = "rgb(145, 111, 27)";
    q1a2.style.background = "lightslategray";
    q1a3.style.background = "lightslategray";
    q1a4.style.background = "lightslategray";
    q1Score = 1
}
function q1a2Function() {
    q1a1.style.background = "lightslategray";
    q1a2.style.background = "rgb(145, 111, 27)";
    q1a3.style.background = "lightslategray";
    q1a4.style.background = "lightslategray";
    q1Score = 2
}
function q1a3Function() {
    q1a1.style.background = "lightslategrey";
    q1a2.style.background = "lightslategrey";
    q1a3.style.background = "rgb(145, 111, 27)";
    q1a4.style.background = "lightslategrey";
    q1Score = 3
}
function q1a4Function() {
    q1a1.style.background = "lightslategrey";
    q1a2.style.background = "lightslategrey";
    q1a3.style.background = "lightslategrey";
    q1a4.style.background = "rgb(145, 111, 27)";
    q1Score = 4
}

let q2a1 = document.querySelector("#question2answer1");
let q2a2 = document.querySelector("#question2answer2");
let q2a3 = document.querySelector("#question2answer3");
let q2a4 = document.querySelector("#question2answer4");
let q2Score = 0;

function q2a1Function() {
    q2a1.style.background = "rgb(145, 111, 27)";
    q2a2.style.background = "lightslategray";
    q2a3.style.background = "lightslategray";
    q2a4.style.background = "lightslategray";
    q2Score = 1
}
function q2a2Function() {
    q2a1.style.background = "lightslategray";
    q2a2.style.background = "rgb(145, 111, 27)";
    q2a3.style.background = "lightslategray";
    q2a4.style.background = "lightslategray";
    q2Score = 2
}
function q2a3Function() {
    q2a1.style.background = "lightslategrey";
    q2a2.style.background = "lightslategrey";
    q2a3.style.background = "rgb(145, 111, 27)";
    q2a4.style.background = "lightslategrey";
    q2Score = 3
}
function q2a4Function() {
    q2a1.style.background = "lightslategrey";
    q2a2.style.background = "lightslategrey";
    q2a3.style.background = "lightslategrey";
    q2a4.style.background = "rgb(145, 111, 27)";
    q2Score = 4
}

let q3a1 = document.querySelector("#question3answer1");
let q3a2 = document.querySelector("#question3answer2");
let q3a3 = document.querySelector("#question3answer3");
let q3a4 = document.querySelector("#question3answer4");
let q3Score = 0;

function q3a1Function() {
    q3a1.style.background = "rgb(145, 111, 27)";
    q3a2.style.background = "lightslategray";
    q3a3.style.background = "lightslategray";
    q3a4.style.background = "lightslategray";
    q3Score = 1
}
function q3a2Function() {
    q3a1.style.background = "lightslategray";
    q3a2.style.background = "rgb(145, 111, 27)";
    q3a3.style.background = "lightslategray";
    q3a4.style.background = "lightslategray";
    q3Score = 2
}
function q3a3Function() {
    q3a1.style.background = "lightslategrey";
    q3a2.style.background = "lightslategrey";
    q3a3.style.background = "rgb(145, 111, 27)";
    q3a4.style.background = "lightslategrey";
    q3Score = 3
}
function q3a4Function() {
    q3a1.style.background = "lightslategrey";
    q3a2.style.background = "lightslategrey";
    q3a3.style.background = "lightslategrey";
    q3a4.style.background = "rgb(145, 111, 27)";
    q3Score = 4
}

let q4a1 = document.querySelector("#question4answer1");
let q4a2 = document.querySelector("#question4answer2");
let q4a3 = document.querySelector("#question4answer3");
let q4a4 = document.querySelector("#question4answer4");
let q4Score = 0;

function q4a1Function() {
    q4a1.style.background = "rgb(145, 111, 27)";
    q4a2.style.background = "lightslategray";
    q4a3.style.background = "lightslategray";
    q4a4.style.background = "lightslategray";
    q4Score = 1
}
function q4a2Function() {
    q4a1.style.background = "lightslategray";
    q4a2.style.background = "rgb(145, 111, 27)";
    q4a3.style.background = "lightslategray";
    q4a4.style.background = "lightslategray";
    q4Score = 2
}
function q4a3Function() {
    q4a1.style.background = "lightslategrey";
    q4a2.style.background = "lightslategrey";
    q4a3.style.background = "rgb(145, 111, 27)";
    q4a4.style.background = "lightslategrey";
    q4Score = 3
}
function q4a4Function() {
    q4a1.style.background = "lightslategrey";
    q4a2.style.background = "lightslategrey";
    q4a3.style.background = "lightslategrey";
    q4a4.style.background = "rgb(145, 111, 27)";
    q4Score = 4
}
let q5a1 = document.querySelector("#question5answer1");
let q5a2 = document.querySelector("#question5answer2");
let q5a3 = document.querySelector("#question5answer3");
let q5a4 = document.querySelector("#question5answer4");
let q5Score = 0;

function q5a1Function() {
    q5a1.style.background = "rgb(145, 111, 27)";
    q5a2.style.background = "lightslategray";
    q5a3.style.background = "lightslategray";
    q5a4.style.background = "lightslategray";
    q5Score = 1
}
function q5a2Function() {
    q5a1.style.background = "lightslategray";
    q5a2.style.background = "rgb(145, 111, 27)";
    q5a3.style.background = "lightslategray";
    q5a4.style.background = "lightslategray";
    q5Score = 2
}
function q5a3Function() {
    q5a1.style.background = "lightslategrey";
    q5a2.style.background = "lightslategrey";
    q5a3.style.background = "rgb(145, 111, 27)";
    q5a4.style.background = "lightslategrey";
    q5Score = 3
}
function q5a4Function() {
    q5a1.style.background = "lightslategrey";
    q5a2.style.background = "lightslategrey";
    q5a3.style.background = "lightslategrey";
    q5a4.style.background = "rgb(145, 111, 27)";
    q5Score = 4
}

