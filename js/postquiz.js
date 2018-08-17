/* Script for quiz sections 
in each unit */ 
"use strict";


var questionslist = ["quesA", "quesB", "quesC", "quesD", "quesE"];
var answerslist = ["true", "false", "uncertain"];
var correctanswers = { quesA: "false", quesB: "false", quesC: "true", quesD: "false", quesE: "false" };

if (sessionStorage.getItem('resumeQuiz') != "1"){
	sessionStorage.setItem('resumeQuiz', '1');
	var answers = {};
	sessionStorage.setItem("useranswers", JSON.stringify(answers));
	document.getElementsByClassName("button")[0].disabled = true;
}
else {
	answers = JSON.parse(sessionStorage.getItem("useranswers"));
	fillAns();	
}
console.log(answers);

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


/* Stores user answers in that session */
function storeAns($ques, $answer) {
	answers[$ques] =  $answer;
	document.getElementById($ques).innerHTML = "<div class='saved'><i class='fas fa-check-circle'></i>  Saved!</div>";
	
	setTimeout(function(){
		document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
	setTimeout(function(){disappear($ques);}, 1000);
	
	sessionStorage.setItem("useranswers", JSON.stringify(answers));
	//console.log(answers);
	
}

function disappear($ques) {
	document.getElementById($ques).innerHTML = "";
}

/* Submit and check answers */
function checkAnswers() {
	for(var i = 0; i < 5; i++) {
		
		if(answers[questionslist[i]] == correctanswers[questionslist[i]]) {
			document.getElementsByClassName("alert-success")[i].classList.add("alert-show");
			console.log("answer is correct");
		}
		else {
			document.getElementsByClassName("alert-danger")[i].classList.add("alert-show");
			console.log("answer is incorrect");
		}
		
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
}

function closeAnswer(i) {
  	$(".close:eq("+i+")").parent().removeClass("alert-show");
}
