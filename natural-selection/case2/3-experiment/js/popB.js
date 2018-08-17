var pause_btn = document.getElementById("pause_btn");
var start_btn = document.getElementById("start_btn");
var nextGen_btn = document.getElementById("nextGen_btn");
var prevGen_btn = document.getElementById("prevGen_btn");
var counter;
var count = 0;
var fakecount;
var generations = document.getElementById("generations"); // div for generation text
var timepassed = document.getElementById("timepassed"); // div for time passed text
var Nonechecked = 0; 
var Zincchecked = 0;
var Saltchecked = 0; 
var Copperchecked = 0;
var traitNone = document.getElementsByClassName("nontolerant");
var traitZinc = document.getElementsByClassName("zinctolerant");
var traitSalt = document.getElementsByClassName("salttolerant");
var traitCopper = document.getElementsByClassName("coppertolerant");
var notifcount = 0;


var slider = new Slider('#slider', {
});

var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Trait"],
		datasets: [{
			label: 'No tolerance',
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1,
			stack: "Stack 0"
		}, {
			label: 'Zinc tolerance',
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1,
			stack: "Stack 1"
		}, {
			label: 'Salt tolerance',
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1,
			stack: "Stack 1"
		}, {
			label: 'Copper tolerance',
			data: [],
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1,
			stack: "Stack 1"
		}]
	},
	options: {
	  legend: {
			display: false
		},
				scales: {
					xAxes: [{
					stacked: true,
					}],
					yAxes: [{
						stacked: true,
						ticks: {
							stepSize: 5,
							beginAtZero:true,
							max: 25
						}
					}]
				}
			}
		});

function resetHighlight() {
	Nonechecked = 0; 
	Zincchecked = 0;
	Saltchecked = 0; 
	Copperchecked = 0;

	$('.nontolerant').removeClass("highlight");
	$('.zinctolerant').removeClass("highlight");
	$('.coppertolerant').removeClass("highlight");
	$('.salttolerant').removeClass("highlight");

	$('#highlightnone').removeClass("highlighttext");
	$('#highlightzinc').removeClass("highlighttext");
	$('#highlightcopper').removeClass("highlighttext");
	$('#highlightsalt').removeClass("highlighttext");

	$("input[name='trait']").prop('checked', false);
	barChart.data.datasets[0].backgroundColor[0] = 'rgba(0, 0, 0, 0.1)';
	barChart.data.datasets[0].backgroundColor[1] = 'rgba(0, 0, 0, 0.1)';
	barChart.update();

}

/* Highlights traits*/
function highlightTrait($trait) {
	if ($trait == 'none') {
		Nonechecked = 1; 
		Zincchecked = 0;
		Saltchecked = 0; 
		Copperchecked = 0;

		$('.nontolerant').addClass("highlight");
		$('.zinctolerant').removeClass("highlight");
		$('.coppertolerant').removeClass("highlight");
		$('.salttolerant').removeClass("highlight");

		$('#highlightnone').addClass("highlighttext");
		$('#highlightzinc').removeClass("highlighttext");
		$('#highlightcopper').removeClass("highlighttext");
		$('#highlightsalt').removeClass("highlighttext");


		barChart.data.datasets[0].backgroundColor = '#ff4438';
		barChart.data.datasets[1].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[2].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[3].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.update();

	}
	else if ($trait == 'zinc') {
		Nonechecked = 0; 
		Zincchecked = 1;
		Saltchecked = 0; 
		Copperchecked = 0;

		$('.nontolerant').removeClass("highlight");
		$('.zinctolerant').addClass("highlight");
		$('.coppertolerant').removeClass("highlight");
		$('.salttolerant').removeClass("highlight");

		$('#highlightnone').removeClass("highlighttext");
		$('#highlightzinc').addClass("highlighttext");
		$('#highlightcopper').removeClass("highlighttext");
		$('#highlightsalt').removeClass("highlighttext");

		barChart.data.datasets[1].backgroundColor = '#ff4438';
		barChart.data.datasets[0].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[2].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[3].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.update();
	}
	else if ($trait == 'salt'){
		Nonechecked = 0; 
		Zincchecked = 0;
		Saltchecked = 1; 
		Copperchecked = 0;

		$('.nontolerant').removeClass("highlight");
		$('.zinctolerant').removeClass("highlight");
		$('.coppertolerant').removeClass("highlight");
		$('.salttolerant').addClass("highlight");

		$('#highlightnone').removeClass("highlighttext");
		$('#highlightzinc').removeClass("highlighttext");
		$('#highlightcopper').removeClass("highlighttext");
		$('#highlightsalt').addClass("highlighttext");

		barChart.data.datasets[2].backgroundColor = '#ff4438';
		barChart.data.datasets[0].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[3].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[1].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.update();
	}
	else if ($trait == 'copper'){
		Nonechecked = 0; 
		Zincchecked = 0;
		Saltchecked = 0; 
		Copperchecked = 1;

		$('.nontolerant').removeClass("highlight");
		$('.zinctolerant').removeClass("highlight");
		$('.coppertolerant').addClass("highlight");
		$('.salttolerant').removeClass("highlight");

		$('#highlightnone').removeClass("highlighttext");
		$('#highlightzinc').removeClass("highlighttext");
		$('#highlightcopper').addClass("highlighttext");
		$('#highlightsalt').removeClass("highlighttext");

		barChart.data.datasets[3].backgroundColor = '#ff4438';
		barChart.data.datasets[0].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[2].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.data.datasets[1].backgroundColor = 'rgba(0, 0, 0, 0.1)';
		barChart.update();
	}
}


function updateChart() {
	counter = animInstance.currentRawFrame;
	console.log(counter);
	if (counter < 26) {
		notifcount = 0;
		generations.innerHTML = "0 Generation";
		timepassed.innerHTML = "0 Years";
		barChart.data.datasets[0].data = [18];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [2];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 27 && counter < 79) {
		notifcount = 0;
		generations.innerHTML = "1st Generation";
		timepassed.innerHTML = "0 Year";
		barChart.data.datasets[0].data = [19];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [3];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 80 && counter < 136) {
		notifcount = 0;
		generations.innerHTML = "2nd Generation";
		timepassed.innerHTML = "1 Year";
		barChart.data.datasets[0].data = [16];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [4];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 137 && counter < 191) {
		generations.innerHTML = "3rd Generation";
		timepassed.innerHTML = "1 Year";
		barChart.data.datasets[0].data = [18];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [2];
		barChart.data.datasets[3].data = [0];
		barChart.update();
		if (notifcount == 0) {
			$.notify({
			// options
			message: '<b>Change in environment:</b> Soil contaminated with copper' 
			},{
				// settings
				type: 'warning', 
				element: 'div#animationContainer'
			});
			notifcount = 1;
		}
		console.log(notifcount);
	}
	else if (counter >= 192 && counter < 246) {
		notifcount = 0;
		generations.innerHTML = "4th Generation";
		timepassed.innerHTML = "2 Years";
		barChart.data.datasets[0].data = [18];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [3];
		barChart.data.datasets[3].data = [0];
		barChart.update();
		
	}
	else if (counter >= 247 && counter < 301) {
		notifcount = 0;
		generations.innerHTML = "5th Generation";
		timepassed.innerHTML = "2 Years";
		barChart.data.datasets[0].data = [15];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [3];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 302 && counter < 356) {
		notifcount = 0;
		generations.innerHTML = "6th Generation";
		timepassed.innerHTML = "3 Years";
		barChart.data.datasets[0].data = [10];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [2];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 357 && counter < 411) {
		notifcount = 0;
		generations.innerHTML = "Generation 7";
		timepassed.innerHTML = "3 Years";
		barChart.data.datasets[0].data = [9];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [2];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 412 && counter < 466) {
		notifcount = 0;
		generations.innerHTML = "8th Generation";
		timepassed.innerHTML = "4 Years";
		barChart.data.datasets[0].data = [7];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [1];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 467 && counter < 521) {
		notifcount = 0;
		generations.innerHTML = "9th Generation";
		timepassed.innerHTML = "4 Years";
		barChart.data.datasets[0].data = [6];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [2];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 522 && counter < 576) {
		notifcount = 0;
		generations.innerHTML = "10th Generation";
		timepassed.innerHTML = "5 Years";
		barChart.data.datasets[0].data = [5];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 577 && counter < 631) {
		notifcount = 0;
		generations.innerHTML = "11th Generation";
		timepassed.innerHTML = "5 Years";
		barChart.data.datasets[0].data = [6];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 632 && counter < 686) {
		notifcount = 0;
		generations.innerHTML = "12th Generation";
		timepassed.innerHTML = "6 Years";
		barChart.data.datasets[0].data = [6];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 687 && counter < 741) {
		notifcount = 0;
		generations.innerHTML = "13th Generation";
		timepassed.innerHTML = "6 Years";
		barChart.data.datasets[0].data = [4];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 742 && counter < 796) {
		notifcount = 0;
		generations.innerHTML = "14th Generation";
		timepassed.innerHTML = "7 Years";
		barChart.data.datasets[0].data = [3];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 797 && counter < 851) {
		notifcount = 0;
		generations.innerHTML = "15th Generation";
		timepassed.innerHTML = "7 Years";
		barChart.data.datasets[0].data = [3];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 852 && counter < 906) {
		notifcount = 0;
		generations.innerHTML = "16th Generation";
		timepassed.innerHTML = "8 Years";
		barChart.data.datasets[0].data = [2];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 907 && counter < 961) {
		notifcount = 0;
		generations.innerHTML = "17th Generation";
		timepassed.innerHTML = "8 Years";
		barChart.data.datasets[0].data = [1];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 962 && counter < 1016) {
		notifcount = 0;
		generations.innerHTML = "18th Generation";
		timepassed.innerHTML = "9 Years";
		barChart.data.datasets[0].data = [1];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 1017 && counter < 1071) {
		notifcount = 0;
		generations.innerHTML = "19th Generation";
		timepassed.innerHTML = "9 Years";
		barChart.data.datasets[0].data = [0];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
	else if (counter >= 1072 && counter <= 1127) {
		notifcount = 0;
		generations.innerHTML = "20th Generation";
		timepassed.innerHTML = "10 Years";
		barChart.data.datasets[0].data = [0];
		barChart.data.datasets[1].data = [0];
		barChart.data.datasets[2].data = [0];
		barChart.data.datasets[3].data = [0];
		barChart.update();
	}
}

var animationContainer = document.getElementById("animationContainer");
var anim = {
	container: animationContainer, // the dom element that will contain the animation
	renderer: 'svg',
	loop: true,
	autoplay: false,
	rendererSettings: {
	preserveAspectRatio: "xMidYMid meet"
	},
	path: 'http://annietseng.co/prototype/natural-selection/case2/3-experiment/js/CaseStudy2_popB.json' // the path to the animation json
	}
var animInstance = lottie.loadAnimation(anim);

function onEnterAnimationFrame(e) {
	//console.log(e);
	slider.setValue(e.currentTime);

	updateChart();
}
// Fired after config ready
function onAnimDataReady(e) {
	console.log("data_ready");
	console.log(animInstance.getDuration(true));
}
// Fired first
function onAnimConfigReady(e) {
	console.log("config_ready");
	console.log(animInstance.getDuration(true));

	slider.on("slide",onSliderDown);
}
function onAnimDomLoaded(e) {		
	highlightTrait('none');
	console.log("anim elements have been added to the DOM");
}

function onPauseClick(e){
	console.log("Pause clicked");
	animInstance.pause();
}
function onStartClick(e){
	console.log("Start clicked");
	animInstance.play();
}
function onNextGen(e){
	counter = animInstance.currentRawFrame;
	fakecount = counter;
	fakecount -= 15;
	if(fakecount % 55 == 0 || counter == 15){
		counter += 55;
	}
	else {
		counter -= 15;
		counter = Math.ceil(counter/55);
		counter *= 55;
		counter +=15;
	}
	animInstance.goToAndStop(counter, true);
}


function onPrevGen(e){
	counter = animInstance.currentRawFrame;
	fakecount = counter;
	fakecount -= 15;
	if(counter <= 15) {
		counter = 15;
	}
	else if(fakecount % 55 == 0){
		counter -= 55;
	}
	else {
		counter -= 15;
		counter = Math.floor(counter/55);
		counter *= 55;
		counter +=15;
	}
	animInstance.goToAndStop(counter, true);
}

function onSliderDown(e)
{
	animInstance.pause();
	animInstance.removeEventListener("enterFrame", onEnterAnimationFrame);
	slider.on("change", onSliderChange);
	window.addEventListener("mouseup", onSliderUp);
}
function onSliderUp(e)
{
	animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
	slider.off("change", onSliderChange);
	window.removeEventListener("mouseup", onSliderUp);
}

function onSliderChange(e)
{
	updateChart();

	console.log("Slider change " + slider.getValue() + " " + animInstance.currentFrame + " "+ animInstance.getDuration(true));
	// see https://github.com/airbnb/lottie-web
	animInstance.goToAndStop(slider.getValue()*21.66, false);

}

animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
animInstance.addEventListener("data_ready", onAnimDataReady);
animInstance.addEventListener("config_ready", onAnimConfigReady);
animInstance.addEventListener("DOMLoaded", onAnimDomLoaded);

pause_btn.addEventListener("click", onPauseClick);

start_btn.addEventListener("click", onStartClick);

nextGen_btn.addEventListener("click", onNextGen);

prevGen_btn.addEventListener("click", onPrevGen);

console.log(animInstance);