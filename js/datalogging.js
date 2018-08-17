"use strict";

var dataGen;
var savealert = document.getElementById("databuttons");
var trait_A = document.getElementById("trait_a");
var trait_B = document.getElementById("trait_b");
var generationinput = document.getElementById("generation");
var logarea = document.getElementById("logarea");
var modal ;

if (casestudy == 2) {
	var trait_C = document.getElementById("trait_c");
	var trait_D = document.getElementById("trait_d");
}

if (sessionStorage.getItem(resume) != "1"){
	sessionStorage.setItem(resume, '1');
	var datalist = {};
	var genlist = [];
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	sessionStorage.setItem(genlog, JSON.stringify(genlist));
	document.getElementsByClassName("button")[0].disabled = true;
	checkStartPop();
}
else {
	datalist = JSON.parse(sessionStorage.getItem(datalog));
	genlist = JSON.parse(sessionStorage.getItem(genlog));
	writeToLog();
	if (genlist.length == completeprogress) {
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
	checkStartPop();
}

function checkStartPop() {
	if (genlist[0] == 0){		
		$(".remove-input").css('opacity', 0);
		$(".remove-input").css('height', 0);
		$(".remove-input").css('margin-bottom', '0px');
		
		document.getElementsByClassName("step")[0].style.opacity = 0;
		document.getElementsByClassName("step")[0].style.height = '0';
		document.getElementsByClassName("step")[1].style.opacity = 1;
		document.getElementsByClassName("step")[1].style.height = 'auto';
	}
	else {		
		$(".remove-input").css('opacity', 1);
		$(".remove-input").css('height', 'auto');
		$(".remove-input").css('margin-bottom', '10px');
		
		document.getElementsByClassName("step")[1].style.opacity = 0;
		document.getElementsByClassName("step")[1].style.height = '0';
		document.getElementsByClassName("step")[0].style.opacity = 1;
		document.getElementsByClassName("step")[0].style.height = 'auto';		
	}
	
}

function writeToLog() {	
	logarea.innerHTML = "";
	for(var i=0; i < genlist.length; i++) {
		logarea.insertAdjacentHTML('beforeend', '<div class="data"><div class="datalogarea"><b>Generation ' + genlist[i] + '</b>:<br><button class="editlog" onClick="editLog(' + i +')">Edit</button> | <button class="deletelog" onClick="deleteLog(' + i +')">Delete</button> </div><div class="traitdata"><ul><li>' + datalist["generation_" + genlist[i]][0] + ' '+trait_a+'</li><li>' + datalist["generation_" + genlist[i]][1] + ' '+trait_b+'</li></ul></div></div>');
		console.log("At generation " + genlist[i] + " there are " + datalist["generation_" + genlist[i]][0] + " "+trait_a+" and " + datalist["generation_" + genlist[i]][1] + " "+trait_b);
	}
	
	if (generationinput.value == 0) {
			checkStartPop();
		}
	if (genlist.length == completeprogress) {
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
}

function compareNumbers(a, b) {
	return a - b;
}

function storeGen() {
	dataGen = "generation_" + generationinput.value;
	if(!genlist.includes(generationinput.value)) {
		genlist.push(generationinput.value);
	}
	genlist.sort(compareNumbers);
	sessionStorage.setItem(genlog, JSON.stringify(genlist));
	
	if (genlist[0] == 0) {
		$(".newentrybutton").removeClass("close-notebook");
		$(".entry").removeClass("open-notebook");
		$('<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>').insertBefore(".datalog");
		setTimeout(function(){
			document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
	}
	else {
		savealert.insertAdjacentHTML('afterbegin', '<span id="savealert"><font class="warning"><i class="fas fa-exclamation-triangle"></i> Please input starting population data!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("warning")[0].classList.add("fadein");}, 10);
	}
	
}

function storeData() {
	datalist[dataGen] = [trait_A.value, trait_B.value];
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
}

function saveData() {	
	if(generationinput.value && trait_A.value && trait_B.value) {
		storeGen();
		storeData();
	}
	else {
		savealert.insertAdjacentHTML('afterbegin', '<span id="savealert"><font class="warning"><i class="fas fa-exclamation-triangle"></i> Please input data!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("warning")[0].classList.add("fadein");}, 10);
	}
	setTimeout(disappear, 1000);
	
	trait_A.value = trait_B.value = generationinput.value  = '';
	
	if(casestudy == 2) {
		trait_C.value = trait_D.value = generationinput.value  = '';
	}

	//console.log(datalist);
	//console.log(genlist);
	writeToLog();
}

function disappear() {	
	$( "#savealert" ).remove();
}

function newEntry() {
	$(".newentrybutton").addClass("close-notebook");
	$(".entry").addClass("open-notebook");
}

function deleteLog(a) {
	delete datalist["generation_" + genlist[a]];
	genlist.splice(a, 1);
	
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	sessionStorage.setItem(genlog, JSON.stringify(genlist));
	
	//console.log(datalist);
	//console.log(genlist);
	
	writeToLog();
}

function editLog(a) {
	document.getElementsByClassName("traitdata")[a].innerHTML = '<div id="edit-log" class="form-inline"><input type="number" class="form-control" id="trait_a_edit" placeholder="'+datalist["generation_" + genlist[a]][0]+'" onchange="saveEdit('+ a + ',' + 0 +')"><label for="trait_a">'+trait_a+'</label></div><div class="form-inline"><input type="number" class="form-control" id="trait_b_edit" placeholder="'+datalist["generation_" + genlist[a]][1]+'" onchange="saveEdit('+ a + ',' + 1 +')"><label for="trait_b">'+trait_b+'</label></div>';
	$(".data").css("height", "90px");
	showSave(a);
}

function saveEdit(a, i) {
	dataGen = "generation_" + genlist[a];
	
	if(i == 0) {
		datalist[dataGen][0] = document.getElementById("trait_a_edit").value;
	}
	else if(i==1) {
		datalist[dataGen][1] = document.getElementById("trait_b_edit").value;
	}
	console.log(datalist[dataGen]);
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	
	if (document.getElementById("trait_a_edit").value && document.getElementById("trait_b_edit").value) {
		document.getElementsByClassName("traitdata")[a].innerHTML = '<ul><li>' + datalist["generation_" + genlist[a]][0] + ' '+trait_a+'</li><li>' + datalist["generation_" + genlist[a]][1] + ' '+trait_b+'</li></ul>';
		$(".data").css("height", "70px");
	} 
}

function showSave(a) {
	console.log("check");
	$(".editlog:eq("+a +")").replaceWith('<button class="editlog" onClick="saveInput('+a+')">Save</button>');
}

function saveInput(a) {
	$(".editlog:eq("+a +")").replaceWith('<button class="editlog" onClick="editLog(' + a +')">Edit</button>');
	document.getElementsByClassName("traitdata")[a].innerHTML = '<ul><li>' + datalist["generation_" + genlist[a]][0] + ' '+trait_a+'</li><li>' + datalist["generation_" + genlist[a]][1] + ' '+trait_b+'</li></ul>';
		$(".data").css("height", "70px");
}