/* Script for general progression 
throughout the module */ 
"use strict";

/* Navigation side bar */
$(document).ready(function() {
	$(".open-menu").click(function() {
		$(".side-container").addClass("open-sidebar");
		$("#wrapper").css("margin-left", "300px");
	});
	$(".close-sidebar").click(function(){
		$(".side-container").removeClass("open-sidebar");
		$("#wrapper").css("margin-left", "0px");
	});
});

/* User progress */
if (sessionStorage.getItem('firstVisit') != "1"){
	sessionStorage.setItem('firstVisit', '1');
	var progress = {prequiz: 1};
	sessionStorage.setItem("progressdata", JSON.stringify(progress));
} 

progress = JSON.parse(sessionStorage.getItem("progressdata"));
// console.log(progress); 


function checkProgress() {
	var modules = ["prequiz", "case1", "case2", "case3", "case4", "summary", "postquiz"];
	for (var i = 0; i < modules.length; i++) {
		var j = modules[i];
		var button = document.getElementById(j);
		if(progress[j] == 1) {
			button.classList.add("modulebtn");
			button.classList.remove("locked");
			button.innerHTML = "start";
			}
	}
}

function saveProgress($save, $link) {
	if(typeof(Storage) !== "undefined") {
		progress[$save] = 1;
		sessionStorage.setItem("progressdata", JSON.stringify(progress));
		location.href = $link;
	}
}

function btnclick($module, $link) {
	if(progress[$module] == 1) {
		location.href = $link;
	}	
}

/* Term definition */
$("[data-toggle=popover]").popover();

/* Tooltip */
$('[data-toggle="tooltip"]').tooltip()