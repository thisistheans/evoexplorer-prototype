/* Experiment */
"use strict";

/* Global Variables */
var playBtn = document.getElementById("play"); // play button id
var nonHeritableBtn = document.getElementById("Nonheritable"); // nonheritable button id
var heritableBtn = document.getElementById("Heritable"); // heritable button id
var restartBtn = document.getElementById("restart"); // restart button id
//var resetBtn = document.getElementById("reset"); // reset button id

var heritableToggle = document.getElementsByClassName("toggle")[0]; // class for heritable toggle
var nonheritableToggle = document.getElementsByClassName("toggle")[1]; // class for nonheritable toggle
var playToggle = document.getElementsByClassName("play")[0]; // class for play toggle
var backToggle = document.getElementsByClassName("goback")[0]; 
var forwardToggle = document.getElementsByClassName("goforward")[0]; 
var popheading = document.getElementById("population-heading"); // div for population heading

var viewport = document.getElementById("viewport"); // div for viewport area
var expview = document.getElementById("expview"); // div for experiment area

var generations = document.getElementById("generations"); // div for generation text
var generationNum = document.getElementById("numGen"); // div for generation bars display
var timepassed = document.getElementById("timepassed"); // div for time passed text
var timebar = document.getElementById("time"); // time bar display
var changeNotif = document.getElementById("change"); // change in environment notification

var predictnotif = document.getElementsByClassName("prediction"); //div for showing user's prediction

var indivA = document.getElementsByClassName("individualA");
var indivB = document.getElementsByClassName("individualB");
var traitA = document.getElementById("traitA");
var traitB = document.getElementById("traitB");
var Achecked = 0; 
var Bchecked = 0;

var index = 0; //for indexing through dataset
var id; // animation interval
var simRunning = 0; // checking if sim is running 
var width = 20; // width for time bar
var gen = 0; // count for generation
var time = 0; // count for time passed

var numbers = []; // for filling graph data

/* Show user's prediction */
if (showPrediction) {
	var userprediction = JSON.parse(sessionStorage.getItem(useranswers));
	var answerstr = userprediction[experimentID];
	//console.log(answerstr);
	predictnotif[0].insertAdjacentHTML("beforeend", answerstr);
}

/* Fill graph with data */
function fillData(){
	for(var i = 0; i < numbers.length; i++){
		barChart.data.datasets[0].data[i] = numbers[i];
		//console.log('Data:' + barChart.data.datasets[0].data[i]);
	}
}

/*  Highlight data on graph */
function highlightGraph (colour, $a, $b) {
	barChart.data.datasets[0].backgroundColor[$a] = colour;
	barChart.data.datasets[0].backgroundColor[$b] = 'rgba(0, 0, 0, 0.1)';
	barChart.update();
}

/* Bar Chart */
var ctx = $('#barChart');
var barChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: [label1, label2],
		datasets: [{
			label: 'Number of individuals',
			data: [16, 5],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1
	  }]
  },
  options: {
	  legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					stepSize: 5,
					beginAtZero:true,
					max: 25
				}
			}]
		}
  	}
});

/* Check which traits are checked and highlight appropriate displays */
function checkTraits() {
	if(Achecked == 1) {
		highlightTraitA();
	}
	else if (Bchecked == 1) {
		highlightTraitB();
	}
	else {
		traitB.style.color = "#000";
		traitB.style.fontWeight = "normal";
		traitA.style.color = "#000";
		traitA.style.fontWeight = "normal";
		$("#highlightA").prop('checked', false);
		$("#highlightB").prop('checked', false);
		barChart.data.datasets[0].backgroundColor = [];
	}
}

/* Highlights trait A */
function highlightTraitA() {
	traitA.style.color = "#FF8657";
	traitA.style.fontWeight = "bold";

	traitB.style.color = "#000";
	traitB.style.fontWeight = "normal";

	Achecked = 1;
	Bchecked = 0;

	for(var i = 0; i < indivA.length; i++){
		indivA[i].classList.add("highlightA");
	}          
	for(var j = 0; j < indivB.length; j++){
		indivB[j].classList.remove("highlightB");
	}  
	
	highlightGraph('#FF8657', 0, 1);
}

/* Highlights trait B */
function highlightTraitB() {
	traitB.style.color = "#69BFFF";
	traitB.style.fontWeight = "bold";

	traitA.style.color = "#000";
	traitA.style.fontWeight = "normal";

	Achecked = 0;
	Bchecked = 1;

	for(var i = 0; i < indivB.length; i++){
		indivB[i].classList.add("highlightB");
	}  
	for(var j = 0; j < indivA.length; j++){
		indivA[j].classList.remove("highlightA");
	}
	
	highlightGraph('#69BFFF', 1, 0);
}

/* Creating generation bar */
function createGen() {
	gen++;
	generations.innerHTML = gen + " generations";

	var genBar = document.createElement("div");
	genBar.classList.add("gen");

	var src = generationNum;
	src.appendChild(genBar);
	setTimeout(function(){	genBar.style.width = 20 + "px";}, 10);
	
}

/* Creating time bar */
function createTime() {
	time++;
	timepassed.innerHTML = time + " years";
	timebar.style.width = width + "px"; 
	width+= 23;
}

/* Envionment changes */
function changeEnviron() {
	expview.classList.add("bg-change");
	expview.classList.remove("bg-original");
	changeNotif.style.visibility = "visible"; 
}
function resetEnviron() {
	expview.classList.add("bg-original");
	expview.classList.remove("bg-change");
	changeNotif.style.visibility = "hidden"; 
}

/* Reset variables 
function reset() {
	// Reset variable toggles and disable play button
	playBtn.disabled = true;
	nonHeritableBtn.disabled = false;
	heritableBtn.disabled = false;
	heritableToggle.classList.remove("toggleOn");
	resetEnviron();
	restartSim();
	barChart.data.datasets[0].data = [];
	barChart.update();
	Achecked = 0;
	Bchecked = 0;
	checkTraits();
}*/

/* Restart simulation */
function restart() {
	if(testingvar == "A"){
		startingPop1();
	}
	else {
		startingPop2();
	}
	resetEnviron();
	restartSim();    
	
	backToggle.disabled = true;
	forwardToggle.disabled = false;

	// Reset play button
	playBtn.disabled = false;
	playBtn.innerHTML = 'Play  <i class="fas fa-play"></i>';
	playBtn.className = "play";       
}

function restartSim() {
	// Erase generations
	var allGen = generationNum;
	while (allGen.firstChild) {
		allGen.removeChild(allGen.firstChild);
	}

	// Reset simulation values
	index = 0;
	simRunning = 0;
	time = 0;
	gen = 0;
	width = 20;

	// Reset time display
	timebar.style.width = 0 + "px"; 
	timepassed.innerHTML = 0 + " years";
	generations.innerHTML = 0 + " generations";

	// Disable restart button
	restartBtn.disabled = true;
}

/* Forward and backward step-wise */
function goBack() {
	simRunning = 0; // ensures that sim can still be run at last step
	forwardToggle.disabled = false; // enable forward button
	playBtn.disabled = false; // enable play button
	width-=23;
	gen-=1;
	time--;
	index--;
	
	if (index === 3) {
		resetEnviron(); // change to original background before the event
	}
	
	// Recreate previous population
	if(index > 0) {
		var a= data[index-1][0];
		var b= data[index-1][1];
		createPopulation(a, b);
		timebar.style.width = width - 23 + "px";  // change timebar
	}
	else {
		if(experimentA) {
			startingPop1(); 
			backToggle.disabled = true;
			restartBtn.disabled = true;
		}
		else if (experimentB) {
			startingPop2(); 
			backToggle.disabled = true;
			restartBtn.disabled = true;
		}
		timebar.style.width = 0 + "px"; // reset timebar at F1
	}
	
	// change displays
	timepassed.innerHTML = time + " years";
	generations.innerHTML = gen + " generations";
	var select = generationNum;
  	select.removeChild(select.lastChild);
}

function goForward() {
	backToggle.disabled = false;

	if(index === 3) {
		changeEnviron(); // change environment at event
	}
	
	//console.log(index);
	
	// Create populations for next generation & change display
	if(index < data.length) {
		var a= data[index][0];
		var b= data[index][1];
		createPopulation(a, b);
		index++;
		gen+=1;
		time++;
		timebar.style.width = width + "px"; 
		timepassed.innerHTML = time + " years";
		generations.innerHTML = gen + " generations";
		width+=23;

		var genBar = document.createElement("div");
		genBar.classList.add("gen");

		var src = generationNum;
		src.appendChild(genBar);
		setTimeout(function(){	genBar.style.width = 20 + "px";}, 10);
		
		// disable play and forward buttons at last step
		if(index == data.length) {
			forwardToggle.disabled = true;
			restartBtn.disabled = false;
			playBtn.disabled = true;
			proceedExp(true);
			simRunning = 0;
			console.log(index);
		}
	}
	else {
		forwardToggle.disabled = true;
		restartBtn.disabled = false;
		playBtn.disabled = true;
	}
}

/* Simulation on Click */ 
function runSim() {
	nonHeritableBtn.disabled = true;
	heritableBtn.disabled = true;
	backToggle.disabled = false;
	forwardToggle.disabled = false;

	if(playBtn.innerHTML.includes("Play")) {
		playBtn.innerHTML = 'Pause  <i class="fas fa-pause"></i>';
		playBtn.className = "pause";
		if(!simRunning) {
			simRunning = 1;
			play();
		}
	}
	else {
		playBtn.innerHTML = 'Play  <i class="fas fa-play"></i>';
		playBtn.className = "play";
		pause();
	}
}
function play() {
	id = setInterval(frame, 1000);
	function frame() {
		console.log(index);
		restartBtn.disabled = true;
		if (index == data.length) {
			playBtn.innerHTML = 'Play  <i class="fas fa-play"></i>';
			playBtn.className = "play";
			playBtn.disabled = true;
			forwardToggle.disabled = true;
			clearInterval(id); 
			proceedExp(true);
			simRunning = 0;
			restartBtn.disabled = false;
		} 
		else if (index === 3) {
			changeEnviron();
			createPopulation(data[index][0], data[index][1]);
			createGen();
			createTime();
			index++;
		}
		else {
			createPopulation(data[index][0], data[index][1]);
			createGen();
			createTime();
			index++;
		}
	}
}

function pause() {
	clearTimeout(id);
	simRunning = 0;
}

/* Starting Populations Toggling */
function startingPop1() {
	createPopulation(pop1_x, pop1_y);
	checkTraits();
	heritableToggle.classList.add("toggleOn");
	nonheritableToggle.classList.remove("toggleOn");
	popheading.innerHTML = poptitle_1;
	
}
function startingPop2() {
	createPopulation(pop2_x, pop2_y);
	checkTraits();
	nonheritableToggle.classList.add("toggleOn");
	heritableToggle.classList.remove("toggleOn");
	playToggle.classList.remove("playOn");
	popheading.innerHTML = poptitle_2;
}

/* Creating population */
function createPopulation (a, b) {
	wipeOut(); // clear viewport (previously displayed population)
	var x = a;
	var y = b;
	var rand;
	while (x > 0 || y > 0) {
		rand = Math.floor(Math.random()*2);
		if(rand == 0 && x > 0) {
			createIndividualA();
			x--;
		}
		else if (rand == 1 && y > 0){
			createIndividualB();
			y--;
		}
		checkTraits();
	} 
	numbers = [a, b];
	fillData();
	barChart.update();

}
function createIndividualA() {
	var imga = document.createElement("img");
	imga.src = "assets/4_Drosophila.svg";
	imga.classList.add("individualA");
	viewport.appendChild(imga);
	setTimeout(fadein, 10);
}
function createIndividualB() {
	var imgb = document.createElement("img");
	imgb.src = "assets/4_Drosophila.svg";
	imgb.classList.add("individualB");
	viewport.appendChild(imgb);
	setTimeout(fadein, 10);
}

/* Transitions for population appearance */
function fadein() {
	for(var i = 0; i < indivB.length; i++){
		indivB[i].classList.add("fadein");
	}  
	for(var j = 0; j < indivA.length; j++){
		indivA[j].classList.add("fadein");
	}  
}

 /* Reset population */
function wipeOut() {
	while(indivA.length > 0){
		indivA[0].parentNode.removeChild(indivA[0]);
	}
	while(indivB.length > 0){
		indivB[0].parentNode.removeChild(indivB[0]);
	}
}
/* Button to proceed to next part of experiment */
function proceedExp(bool) {
	if (bool){
		document.getElementsByClassName("button")[0].disabled = false;
		document.getElementsByClassName("alert-success")[0].style.opacity = 1;
		document.getElementsByClassName("alert-success")[0].style.height = 'auto';
		document.getElementsByClassName("alert-success")[0].innerHTML = alerttext;
	}
	else {
		document.getElementsByClassName("button")[0].disabled = true;
		document.getElementsByClassName("alert-success")[0].style.opacity = 0;
		document.getElementsByClassName("alert-success")[0].style.height = 0;
		document.getElementsByClassName("alert-success")[0].innerHTML = '';
	}
}