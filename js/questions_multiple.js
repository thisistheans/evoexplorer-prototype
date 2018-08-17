/* Script for answer saving */ 
"use strict";

var answerslist = answerslist;
var questionslist = questionslist;
var useranswers = useranswers;
var resume = resume;

//console.log(answerslist);
//console.log(questionslist);
//console.log(answers);


if (sessionStorage.getItem(resume) != "1"){
	sessionStorage.setItem(resume, '1');
	var answers = {};
	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	document.getElementsByClassName("button")[0].disabled = true;
}
else {
	answers = JSON.parse(sessionStorage.getItem(useranswers));	
	fillAns();	
	checkAnswers();
}

/* checks and fills user's answers */
function fillAns() {
	for (var prop in answers) {
		var checkBox = document.getElementsByClassName(prop)[0];
		checkBox.checked = true;
	}
}

/* Stores user answers in that session */
function storeAns($ques, $answer, $id) {
	var checkBox = document.getElementsByClassName($id)[0];
	
	if (checkBox.checked == true) {
		answers[$id] = $answer;
		
		var savealert = document.getElementById($id);
		savealert.insertAdjacentHTML('beforeend', '<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
		setTimeout(disappear, 1500);
	}
	else {
		delete answers[$id];
	}

	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	console.log(answers);

}

function disappear() {	
	$( "#savealert" ).remove();
}

/* Submit and check answers */
function checkAnswers() {
	var correctTotal = 0;
	for (var prop in answers) {
		for (var i = 0; i < correctanswer.length; i++) {
			if(prop == correctanswer[i]) {
				console.log("correct answer: " + prop);
				document.getElementsByClassName(prop + "-alert")[0].classList.add("alert-show");
				correctTotal++;
			}
			else {
				document.getElementsByClassName(prop + "-alert")[0].classList.add("alert-show");
			}
		}
	}
	if (correctTotal == correctanswer.length) {
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
}

function closeAnswer(i) {
  	$(".close:eq("+i+")").parent().removeClass("alert-show");
}
  	