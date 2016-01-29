var positionDropMenu = document.getElementById("positionDropMenu");
var answer = document.getElementById("answer");
var submitButton = document.getElementById("submitButton");
var display = document.getElementById("display");
var gamesPlayedInput = document.getElementById("gamesPlayedInput");
var positionalStatInput = document.getElementById("positionalStatInput");
var question = document.getElementById("question")

submitButton.addEventListener("click", doMath);



function doMath() {
 answer = (positionalStatInput.value) / (gamesPlayedInput.value);
 display.innerHTML = answer;
}



positionDropMenu.addEventListener("change", addQuestions);

function addQuestions() {

 if (positionDropMenu.value === "goalkeeper") {
  question.innerHTML = "How many saves?"
 }
 else if (positionDropMenu.value === "defender") {
  question.innerHTML = "How many tackles?"
 }
 else if (positionDropMenu.value === "midfielder") {
  question.innerHTML = "How many passes completed";

 }
 if (positionDropMenu.value === "attacker") {
  question.innerHTML = "How many goals scored";
 }
}
