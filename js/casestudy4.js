/* Script for answer saving */ 
"use strict";
var resume = resume;
var useranswers = useranswers;

//console.log(answerslist);
//console.log(questionslist);


if (sessionStorage.getItem(resume) != "1"){
	sessionStorage.setItem(resume, '1');
	var answers = {
		trial_1 : {}
	};
	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	highlightSelection();
}
else {
	answers = JSON.parse(sessionStorage.getItem(useranswers));	
	console.log(answers);
	fillAns();
}

function fillAns() {
	document.getElementById("heritability").checked = answers.trial_1.heritability;
	document.getElementById("variation").checked = answers.trial_1.variation;
	document.getElementById("gentime").checked = answers.trial_1.gentime;
	highlightSelection();
}

function highlightSelection() {
	if (document.getElementById("heritability").checked == false) {
		document.getElementsByClassName("heritability")[0].style.color = "#000";
		document.getElementsByClassName("heritability")[1].style.color = "#999";
	}
	else {
		document.getElementsByClassName("heritability")[1].style.color = "#000";
		document.getElementsByClassName("heritability")[0].style.color = "#999";
	}
	if (document.getElementById("variation").checked == false) {
		document.getElementsByClassName("variation")[0].style.color = "#000";
		document.getElementsByClassName("variation")[1].style.color = "#999";
	}
	else {
		document.getElementsByClassName("variation")[1].style.color = "#000";
		document.getElementsByClassName("variation")[0].style.color = "#999";
	}
	if (document.getElementById("gentime").checked == false) {
		document.getElementsByClassName("gentime")[0].style.color = "#000";
		document.getElementsByClassName("gentime")[1].style.color = "#999";
	}
	else {
		document.getElementsByClassName("gentime")[1].style.color = "#000";
		document.getElementsByClassName("gentime")[0].style.color = "#999";
	}
	
}

function saveVariable() {
	answers.trial_1.heritability = document.getElementById("heritability").checked;
	answers.trial_1.variation = document.getElementById("variation").checked;
	answers.trial_1.gentime = document.getElementById("gentime").checked;
	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	highlightSelection();
	console.log(answers);
}

  	