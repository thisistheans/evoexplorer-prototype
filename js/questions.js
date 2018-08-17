/* Script for answer saving */ 
"use strict";

var answerslist = answerslist;
var questionslist = questionslist;
var useranswers = useranswers;
var resume = resume;

//console.log(answerslist);
//console.log(questionslist);


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

console.log(answers);

//var check =  JSON.parse(sessionStorage.getItem("useranswers"));
//console.log(check);

/* checks for if user has finished saving all answers */
function checkIfDone() {
	if(Object.keys(answers).length == questionslist.length){
		document.getElementsByClassName("button")[0].disabled = false;
			$('.button').addClass('enabled');
	}
	else {
		document.getElementsByClassName("button")[0].disabled = true;	
	}
}

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
function storeAns($ques, $answer, $id) {
	answers[$ques] =  $answer;
	
	var savealert = document.getElementById($id);
	savealert.insertAdjacentHTML('beforeend', '<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>');
	setTimeout(function(){
		document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
	setTimeout(disappear, 1500);
	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	//console.log(answers);
	
	if (prediction) {
		checkIfDone();
	}

}

function disappear() {	
	$( "#savealert" ).remove();
}

/* Submit and check answers */
function checkAnswers() {
	for(var i = 0; i < answerslist.length; i++) {
		if(answers[questionslist[0]] == answerslist[i] && answers[questionslist[0]] == correctanswer) {
		document.getElementsByClassName("alert")[i].classList.add("alert-show");
			document.getElementsByClassName("button")[0].disabled = false;
			$('.button').addClass('enabled');
			console.log("correct answer: " + i);
		}
		else if(answers[questionslist[0]] == answerslist[i]){
		document.getElementsByClassName("alert")[i].classList.add("alert-show");
			console.log("incorrect answer: " + i);
		}
		console.log(i);
	}
}

function closeAnswer(i) {
  	$(".close:eq("+i+")").parent().removeClass("alert-show");
}
  	