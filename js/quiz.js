/* Script for quiz sections 
in each unit */ 
"use strict";


var questionslist = ["quesA", "quesB", "quesC", "quesD", "quesE"];
var answerslist = ["true", "false", "uncertain"];

if (sessionStorage.getItem('resumeQuiz') != "1"){
	sessionStorage.setItem('resumeQuiz', '1');
	var answers = {};
	sessionStorage.setItem("useranswers", JSON.stringify(answers));
	document.getElementsByClassName("button")[0].disabled = true;
}
else {
	answers = JSON.parse(sessionStorage.getItem("useranswers"));
	fillAns();	
	checkIfDone();
}
//console.log(answers);

/* checks and fills user's answers */
function fillAns() {
	for (var i = 0; i < questionslist.length; i++) {
		var buttons = document.getElementsByName(questionslist[i]);
		if(answers[questionslist[i]] == answerslist[0]){
			buttons[0].checked = true;
		}
		else if (answers[questionslist[i]] == answerslist[1]) {
			buttons[1].checked = true;
		}
		else if (answers[questionslist[i]] == answerslist[2]) {
			buttons[2].checked = true;
		}
	}
}

/* checks for if user has finished saving all answers */
function checkIfDone() {
	if(Object.keys(answers).length == questionslist.length){
		document.getElementsByClassName("button")[0].disabled = false;
		document.getElementsByClassName("alert-success")[0].classList.add("alert-show");
		document.getElementsByClassName("alert-success")[0].innerHTML = "All your answers are saved. You will be given a chance to review, correct and resubmit them <i>after</i> you have completed all the case studies. You will then be able to see the answers after your resubmission.";
		
		$('.button').addClass('enabled');
	}
	else {
		document.getElementsByClassName("button")[0].disabled = true;	
	}
}

/* Stores user answers in that session */
function storeAns($ques, $answer) {
	answers[$ques] =  $answer;
	document.getElementById($ques).innerHTML = "<div class='saved'><i class='fas fa-check-circle'></i>  Saved!</div>";
	
	setTimeout(function(){
		document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
	setTimeout(function(){disappear($ques);}, 1000);
	
	sessionStorage.setItem("useranswers", JSON.stringify(answers));
	//console.log(answers);
	
	checkIfDone();
}

function disappear($ques) {
	document.getElementById($ques).innerHTML = "";
}
