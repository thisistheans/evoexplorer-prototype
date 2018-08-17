/* Experiment */
"use strict";

/* Global Variables */
var playBtn = document.getElementById("play"); // play button id
var nonHeritableBtn = document.getElementById("Nonheritable"); // nonheritable button id
var heritableBtn = document.getElementById("Heritable"); // heritable button id
var restartBtn = document.getElementById("restart"); // restart button id
var resetBtn = document.getElementById("reset"); // reset button id

var heritableToggle = document.getElementsByClassName("toggle")[0]; // class for heritable toggle
var nonheritableToggle = document.getElementsByClassName("toggle")[1]; // class for nonheritable toggle
var playToggle = document.getElementsByClassName("play")[0]; // class for play toggle

var viewport = document.getElementById("viewport"); // div for viewport area
var expview = document.getElementById("expview"); // div for experiment area

var generations = document.getElementById("generations"); // div for generation text
var generationNum = document.getElementById("numGen"); // div for generation bars display
var timepassed = document.getElementById("timepassed"); // div for time passed text
var timebar = document.getElementById("time"); // time bar display
var changeNotif = document.getElementById("change"); // change in environment notification

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
var numbers = []; // array for generating bar graph

/* Fill graph with data */
function fillData(){
		for(var i = 0; i < numbers.length; i++){
			barChart.data.datasets[0].data[i] = numbers[i];
			//console.log('Data:' + barChart.data.datasets[0].data[i]);
	}
}

/*  Highlight data */
function highlightGraph (colour, $a, $b) {
	barChart.data.datasets[0].backgroundColor[$a] = colour;
	barChart.data.datasets[0].backgroundColor[$b] = 'rgba(0, 0, 0, 0.1)';
	barChart.update();
}

/* Bar Chart */
var ctx = $('#barChart');
var barChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: [label1, label2],
		datasets: [{
			label: 'Number of individuals',
			data: [],
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
			xAxes: [{
				ticks: {
					stepSize: 5,
					beginAtZero:true,
					max: 25
				}
			}]
		}
  }
});

/* Trait toggles */
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
	time+=2;
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

/* Reset and Restart functions */
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
}
function restart() {
	startingPop1();
	resetEnviron();
	restartSim();    

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
	resetBtn.disabled = true;  
}

/* Simulation on Click */ 
function runSim() {
	nonHeritableBtn.disabled = true;
	heritableBtn.disabled = true;

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
		if (index == data.length) {
			playBtn.innerHTML = 'Play  <i class="fas fa-play"></i>';
			playBtn.className = "play";
			playBtn.disabled = true;
			restartBtn.disabled = false;
			resetBtn.disabled = false; 
			clearInterval(id); 
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
	playBtn.disabled = false;
	playBtn.classList.add("activePlay");
}
function startingPop2() {
	createPopulation(pop2_x, pop2_y);
	checkTraits();
	playBtn.disabled = true;
	nonheritableToggle.classList.add("toggleOn");
	heritableToggle.classList.remove("toggleOn");
	playToggle.classList.remove("playOn");
	playBtn.classList.add("activePlay");
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