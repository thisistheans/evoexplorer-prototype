/* Script for general progression 
throughout the module */ 
"use strict";

var sidebar = document.getElementById("sidebar"); // sidebar menu
var wrapper = document.getElementById("wrapper"); // wrapper for all content
var submenu = document.getElementById("submenu"); 
var menu = document.getElementById("menu"); 

/* Navigation side bar */
function openNav() {
	sidebar.style.visibility = "visible";
	sidebar.style.width = "300px";
	wrapper.style.marginLeft = "300px";
	menu.style.visibility = "visible";
	menu.style.width = "300px";
}
function closeNav() {
	sidebar.style.width = "0";
	submenu.style.width = "0";
	wrapper.style.marginLeft = "0";
	sidebar.style.visibility = "hidden";
	submenu.style.visibility = "hidden";
	menu.style.visibility = "hidden";
	menu.style.width = "0";
}
function openSubmenu() {
	submenu.style.visibility = "visible";
	submenu.style.width = "300px";
	menu.style.visibility = "hidden";
	menu.style.width = "0";
}
function closeSubmenu() {
	submenu.style.width = "0";
	submenu.style.visibility = "hidden";
	menu.style.visibility = "visible";
	menu.style.width = "300px";
}

/* User progress */
if (sessionStorage.getItem('firstVisit') != "1"){
	sessionStorage.setItem('firstVisit', '1');
	var progress = {prequiz: 1};
	sessionStorage.setItem("progressdata", JSON.stringify(progress));
} 

progress = JSON.parse(sessionStorage.getItem("progressdata"));
// console.log(progress); 


function checkProgress() {
	var modules = ["prequiz", "case1", "case2", "case3", "case4", "postquiz"];
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