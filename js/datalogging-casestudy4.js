"use strict";

var trialNum;
var trialIndex;
var savealert = document.getElementById("databuttons");
var trialinput = document.getElementById("trial");
var trait_A = document.getElementById("withoutenzyme");
var trait_B = document.getElementById("withenzyme");
var generation = document.getElementById("generation");
var time = document.getElementById("time");
var logarea = document.getElementById("logarea");
var heritability_label;
var gentime_label;
var var_label;


var factors = factors;
var useranswers = useranswers;


if (sessionStorage.getItem(resume) != "1"){
	sessionStorage.setItem(resume, '1');
	
	var datalist = {};
	var triallist = [];
	trialIndex = 0;
	
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	sessionStorage.setItem(triallog, JSON.stringify(triallist));
	
	var answers = JSON.parse(sessionStorage.getItem(useranswers));
	console.log(answers);
	fillAns();
	
	document.getElementsByClassName("button")[0].disabled = true;
	checkFirstTrial();
}
else {
	datalist = JSON.parse(sessionStorage.getItem(datalog));
	triallist = JSON.parse(sessionStorage.getItem(triallog));
	
	if (triallist.length == completeprogress) {
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
	checkFirstTrial();
	
	trialIndex = triallist.length;
		
	answers = JSON.parse(sessionStorage.getItem(useranswers));	
	fillAns();
	
	writeToLog();
}

function fillAns() {
	console.log(triallist);
	var index = triallist.length;
	if(triallist.length == 0) {
		document.getElementById("heritability").checked = answers.trial_1.heritability;
		document.getElementById("variation").checked = answers.trial_1.variation;
		document.getElementById("gentime").checked = answers.trial_1.gentime;
	}
	else {
		document.getElementById("heritability").checked = answers["trial_"+index].heritability;
		document.getElementById("variation").checked = answers["trial_"+index].variation;
		document.getElementById("gentime").checked = answers["trial_"+index].gentime;
	}
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
function saveVariable($id) {
	answers[$id] = {};
	answers[$id].heritability = document.getElementById("heritability").checked;
	answers[$id].variation = document.getElementById("variation").checked;
	answers[$id].gentime = document.getElementById("gentime").checked;
	sessionStorage.setItem(useranswers, JSON.stringify(answers));
	console.log(answers);
}

/* Datalogging */

function checkFirstTrial() {
	if (triallist[0] == 1){
		document.getElementsByClassName("step")[0].style.opacity = 0;
		document.getElementsByClassName("step")[0].style.height = '0';
		document.getElementsByClassName("step")[3].style.opacity = 0;
		document.getElementsByClassName("step")[3].style.height = '0';
		document.getElementsByClassName("step")[1].style.opacity = 1;
		document.getElementsByClassName("step")[1].style.height = 'auto';
		document.getElementsByClassName("step")[2].style.opacity = 1;
		document.getElementsByClassName("step")[2].style.height = 'auto';
		document.getElementsByClassName("step")[4].style.opacity = 1;
		document.getElementsByClassName("step")[4].style.height = 'auto';
	}
	else {
		document.getElementsByClassName("step")[1].style.opacity = 0;
		document.getElementsByClassName("step")[1].style.height = '0';
		document.getElementsByClassName("step")[4].style.opacity = 0;
		document.getElementsByClassName("step")[4].style.height = '0';
		document.getElementsByClassName("step")[2].style.opacity = 0;
		document.getElementsByClassName("step")[2].style.height = '0';
		document.getElementsByClassName("step")[0].style.opacity = 1;
		document.getElementsByClassName("step")[0].style.height = 'auto';
		document.getElementsByClassName("step")[3].style.opacity = 1;
		document.getElementsByClassName("step")[3].style.height = 'auto';			
	}	
}

function writeToLog() {	
	logarea.innerHTML = "";
	
	for(var i=0; i < triallist.length; i++) { 
		
		if(answers["trial_" + triallist[i]].heritability == true) {
			heritability_label = 'Non-heritable trait';
		}
		else {
			heritability_label = 'Heritable trait';
		}
		if(answers["trial_" + triallist[i]].variation == true) {
			var_label = 'Lesser genetic variation';
		}
		else {
			var_label = 'Greater genetic variation';
		}
		if(answers["trial_" + triallist[i]].gentime == true) {
			gentime_label = 'Short generation time';
		}
		else {
			gentime_label = 'Long generation time';
		}
		
		logarea.insertAdjacentHTML('beforeend', '<div class="case4data"><div class="datalogarea"><b>Trial ' + triallist[i] + '</b>: <span class="case4buttons"><button class="editlog" onClick="editLog(' + i +')">Edit</button> | <button class="deletelog" onClick="deleteLog(' + i +')">Delete</button> </span></div><div class="factors"><span class="factors-label">'+heritability_label+'</span><span class="factors-label">'+var_label+'</span><span class="factors-label">'+gentime_label+'</span></div><div class="traitdata"><ul><li>' + datalist["trial_" + triallist[i]][0] + ' '+trait_a+'</li><li>' + datalist["trial_" + triallist[i]][1] + ' '+trait_b+'</li><li>' + datalist["trial_" + triallist[i]][2] + ' '+generation_label+'</li><li>' + datalist["trial_" + triallist[i]][3] + ' '+time_label+'</li></ul></div></div>');
	}
	
	if (triallist.length == completeprogress) {
		document.getElementsByClassName("button")[0].disabled = false;
		$('.button').addClass('enabled');
	}
}

function storeGen() {
	trialNum = "trial_" + trialIndex;
	sessionStorage.setItem(triallog, JSON.stringify(triallist));	
	saveVariable(trialNum);
}

function storeData() {
	datalist[trialNum] = [trait_A.value, trait_B.value, generation.value, time.value];
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
}

function saveData() {	
	if(trait_A.value && trait_B.value && generation.value && time.value) {
		storeGen();
		storeData();
		
		$(".newentrybutton").removeClass("close-notebook");
		$(".entry").removeClass("open-notebook");
		$('<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>').insertBefore(".datalog");
		setTimeout(function(){
			document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
	}
	else {
		savealert.insertAdjacentHTML('afterbegin', '<span id="savealert"><font class="warning"><i class="fas fa-exclamation-triangle"></i> Please input data!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("warning")[0].classList.add("fadein");}, 10);
	}
	setTimeout(disappear, 1000);
	
	trait_A.value = trait_B.value = generation.value = time.value = '';

	console.log(datalist);
	console.log(triallist);
	
	writeToLog();
	checkFirstTrial();
}

function disappear() {	
	$( "#savealert" ).remove();
}

function newEntry() {
	trialIndex = triallist.length;
	triallist[trialIndex] = ++trialIndex;
	document.getElementsByClassName("trial_num")[0].innerHTML = trialIndex;
	$(".newentrybutton").addClass("close-notebook");
	$(".entry").addClass("open-notebook");
}

function renameProperty(oldName, newName) {
    if (datalist.hasOwnProperty(oldName)) {
        datalist[newName] = datalist[oldName];
		delete datalist[oldName]
    }
    return datalist;
};

function deleteLog(a) {
	
	var name = "trial_" + triallist[a];
	delete datalist[name];
	triallist.splice(a, 1);
	
	for (var i = a; i < triallist.length; i++) {
		var oldName = "trial_" + triallist[i]; 
		var x = i + 1;	
		triallist[i] = x;
		var newName = "trial_" + triallist[i]; 
		console.log(oldName);
		console.log(newName);
		renameProperty(oldName, newName);
	}
	
	//console.log(datalist);
	//console.log(triallist);
	
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	sessionStorage.setItem(triallog, JSON.stringify(triallist));
	writeToLog();

}

function editLog(a) {
	document.getElementsByClassName("traitdata")[a].innerHTML = '<div id="edit-log" class="form-inline"><input type="number" class="form-control" id="trait_a_edit" placeholder="'+datalist["trial_" + triallist[a]][0]+'" onchange="saveEdit('+ a + ',' + 0 +')"><label for="trait_a" class="casestudy4">'+trait_a+'</label></div><div class="form-inline"><input type="number" class="form-control" id="trait_b_edit" placeholder="'+datalist["trial_" + triallist[a]][1]+'" onchange="saveEdit('+ a + ',' + 1 +')"><label for="trait_b" class="casestudy4">'+trait_b+'</label></div><div class="form-inline"><input type="number" class="form-control" id="generation_edit" placeholder="'+datalist["trial_" + triallist[a]][2]+'" onchange="saveEdit('+ a + ',' + 2 +')"><label for="generation" class="casestudy4">'+generation_label+'</label></div><div class="form-inline"><input type="number" class="form-control" id="time_edit" placeholder="'+datalist["trial_" + triallist[a]][3]+'" onchange="saveEdit('+ a + ',' + 3 +')"><label for="time" class="casestudy4">'+time_label+'</label></div>';
	
	showSave(a);
}

function saveEdit(a, i) {
	trialNum = "trial_" + triallist[a];
	
	if(i == 0) {
		datalist[trialNum][0] = document.getElementById("trait_a_edit").value;
	}
	else if(i==1) {
		datalist[trialNum][1] = document.getElementById("trait_b_edit").value;
	}
	else if(i==2) {
		datalist[trialNum][2] = document.getElementById("generation_edit").value;
	}
	else if(i==3) {
		datalist[trialNum][3] = document.getElementById("time_edit").value;
	}
	
	console.log(datalist[trialNum]);
	sessionStorage.setItem(datalog, JSON.stringify(datalist));
	
	if (document.getElementById("trait_a_edit").value && document.getElementById("trait_b_edit").value && document.getElementById("generation_edit").value && document.getElementById("time_edit").value) {
		
		document.getElementsByClassName("traitdata")[a].innerHTML = '<ul><li>' + datalist["trial_" + triallist[a]][0] + ' '+trait_a+'</li><li>' + datalist["trial_" + triallist[a]][1] + ' '+trait_b+'</li><li>' + datalist["trial_" + triallist[a]][2] + ' '+generation_label+'</li><li>' + datalist["trial_" + triallist[a]][3] + ' '+time_label+'</li></ul>';
		
		saveInput(a);
	} 
}

function showSave(a) {
	console.log("check");
	$(".editlog:eq("+a +")").replaceWith('<button class="editlog" onClick="saveInput('+a+')">Save</button>');
}

function saveInput(a) {
	$(".editlog:eq("+a +")").replaceWith('<button class="editlog" onClick="editLog(' + a +')">Edit</button>');
	
	document.getElementsByClassName("traitdata")[a].innerHTML = '<ul><li>' + datalist["trial_" + triallist[a]][0] + ' '+trait_a+'</li><li>' + datalist["trial_" + triallist[a]][1] + ' '+trait_b+'</li><li>' + datalist["trial_" + triallist[a]][2] + ' '+generation_label+'</li><li>' + datalist["trial_" + triallist[a]][3] + ' '+time_label+'</li></ul>';
}