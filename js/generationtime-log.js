"use strict";

var dataGen;
var savealert = document.getElementById("databuttons");
var trait_A = document.getElementById("popA_generation");
var trait_B = document.getElementById("popB_generation");

if (sessionStorage.getItem(resume) != "1"){
	sessionStorage.setItem(resume, '1');
	var datalist = [];
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	document.getElementsByClassName("button")[0].disabled = true;
}
else {
	datalist = JSON.parse(sessionStorage.getItem(datalog));
	fillAns();	
	
}

function fillAns() {
	trait_A.value = datalist[0];
	trait_B.value = datalist[1];
	checkAnswer();
}

function storeData($pop) {
	if ($pop == 'popA') {
		datalist[0] = trait_A.value;
	}
	else {
		datalist[1] = trait_B.value;
	}
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
}

function checkAnswer() {
	if (datalist[0] == 17 && datalist[1]  == 3) {
		document.getElementsByClassName("alert")[0].classList.add("alert-show");
		document.getElementsByClassName("alert")[1].classList.remove("alert-show");
		document.getElementsByClassName("button")[0].disabled = false;
	}
	else {
		document.getElementsByClassName("alert")[1].classList.add("alert-show");
		document.getElementsByClassName("alert")[0].classList.remove("alert-show");
	document.getElementsByClassName("button")[0].disabled = true;
	}
	console.log(datalist);
}


function closeAnswer(i) {
  	$(".close:eq("+i+")").parent().removeClass("alert-show");
}