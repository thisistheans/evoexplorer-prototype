/* show notes in notebook */
var observations = document.getElementsByClassName("observations");

if (sessionStorage[noteID_1]) {
	observations[0].innerHTML = sessionStorage[noteID_1];
}
if (sessionStorage[noteID_2]) {
	observations[1].innerHTML = sessionStorage[noteID_2];
}

/* show prediction in accordion*/
var predictnotif = document.getElementsByClassName("prediction");

var userprediction_A = JSON.parse(sessionStorage.getItem(useranswers_A));
var userprediction_B = JSON.parse(sessionStorage.getItem(useranswers_B));

var answerstr_A = userprediction_A[experimentID_A];
var answerstr_B = userprediction_B[experimentID_B];

console.log(answerstr_A);
console.log(answerstr_B);
predictnotif[0].insertAdjacentHTML("beforeend", answerstr_A);
predictnotif[1].insertAdjacentHTML("beforeend", answerstr_B);