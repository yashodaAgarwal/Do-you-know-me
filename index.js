const readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW Yashoda?");

var questions = [{
    question: "Where do I live? ",
    answer: "Jaigaon"
},
{
    question: "My favourite superhero would be? ",
    answer: "SuperMan"
},
{
    question: "Where do I work? ",
    answer: "Google"
}]

var score = 0;
var Highscore = [{
    name: "Yashoda",
    score: 3
},
{
    name: "Arpit",
    score: 2
}];
function play(question, answer) {
    var answerone = readlineSync.question(question);
    if (answerone.toUpperCase() === answer.toUpperCase()) {
        console.log("right!");
        score++;
    }
    else {
        console.log("wrong!");
    }
    console.log("Current score: " + score);
    console.log("--------------")
}

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You SCORED: " + score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for (var j = 0; j < Highscore.length; j++) {
    console.log(Highscore[j].name + " : " + Highscore[j].score);
}

