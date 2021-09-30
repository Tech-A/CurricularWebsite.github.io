//set totalScore to 0 by default
let totalScore = 0
//establish variables used in the document
var userName = document.querySelector("#userName");

//start
let startbt = document.querySelector('#startbutton');
let headerText = document.querySelector("#headerText");
let greetingInput = document.querySelector("#greetingInput");

//questions
let q1 = document.querySelector("#question1");
let q2 = document.querySelector("#question2");
let q3 = document.querySelector("#question3");
let q4 = document.querySelector("#question4");
let q5 = document.querySelector("#question5");

//information
let fini = document.querySelector("#moreinfo");
let arts = document.querySelector("#Artsinfo");
let sports = document.querySelector("#Sportsinfo");
let music = document.querySelector("#Musicinfo");
let service = document.querySelector("#Serviceinfo");



//what will be displayed on the initial page (on first click)
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

//when the start button is clicked, page should hide start button and display question 1
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




//QUESTION 1

//answer variables of question 1
let q1a1 = document.querySelector("#question1answer1");
let q1a2 = document.querySelector("#question1answer2");
let q1a3 = document.querySelector("#question1answer3");
let q1a4 = document.querySelector("#question1answer4");

//set question 1 score to 0 
let q1Score = 0


//change color of button on click of different answers of questions
//answers add certain numbers to question score 
//answer 1= +1   answer 2= +2  answer 3= +3  answer 4= +4
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

//next button of question 1 goes to question 2
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




//QUESTION 2
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

//next button of question 2 goes to question 3
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
//previous button of question 2 returns to question 1
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





//QUESTION 3
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

//next button of question 3 goes to question 4
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
//previous button of question 3 returns to question 2
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




//QUESTION 4

//variables
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

//next button of question 4 goes to question 5
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
//previous button of question 4 returns to question 3
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



//QUESTION 5

//variables
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


//previous button of question 5 returns to question 4
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



//SUBMIT

//when user clicks next button after question 5, page will display input block 
//input block allows users to input their name - this will be stored as Username variable
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


//All scores are totaled to get total score (stored in total score variable)
    totalScore = totalScore + q1Score + q2Score + q3Score + q4Score + q5Score;
//total score is divided by the no. of questions which is 5 to get average score    
    let averageScore = totalScore/5;

    //show different messages depending on average score
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

//previous button of SUBMIT returns to question 5
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


//this page shows stored username variable and a message depending on their average score
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



const sportMessageList = ["sport quote 1", "sport quote 2", "sport quote 3"];

sportMessageList[0];
const musicMessageList = ["music quote 1", "music quote 2", "music quote 3"];
const artsMessageList = ["arts quote 1", "arts quote 2", "arts quote 3"];
const serviceMessageList = ["service quote 1", "service quote 2", "service quote 3"];


//INFORMATION page
//more info button should show certain info corresponding to the user's message result
function info() {
greetingInput.style.display = "none";
startbt.style.display = "none"
q1.style.display = "none";
q2.style.display = "none"
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
fini.style.display ="none";


if (message === 'Sports'){
arts.style.display = "none";
sports.style.display = "block";
    music.style.display = "none";
    service.style.display = "none";
} else if (message === 'Music'){
    arts.style.display = "none";
    sports.style.display = "none";
    music.style.display = "block";
    service.style.display = "none";
} else if (message === 'Arts') {
    arts.style.display = "block";
    sports.style.display = "none";
    music.style.display = "none";
    service.style.display = "none";
} else {
    service.style.display = "block";
    arts.style.display = "none";
    sports.style.display = "none";
    music.style.display = "none";
} };




