var pause_btn = document.getElementById("pause_btn");
var start_btn = document.getElementById("start_btn");
var nextGen_btn = document.getElementById("nextGen_btn");
var prevGen_btn = document.getElementById("prevGen_btn");
var counter;
var count = 0;
var fakecount;
var generations = document.getElementById("generations"); // div for generation text
var timepassed = document.getElementById("timepassed"); // div for time passed text
var Achecked = 0; 
var Bchecked = 0;
var notifcount = 0;


var slider = new Slider('#slider', {
});


function resetHighlight() {
	Achecked = 0;
	Bchecked = 0;
	$('.resistance').removeClass("highlight");
	$('.noresistance').removeClass("highlight");
	$('#highlightB').removeClass("highlighttext");
	$('#highlightA').removeClass("highlighttext");
	$("input[name='trait']").prop('checked', false);
}

/* Highlights trait A */
function highlightTraitA() {
	$('.noresistance').addClass("highlight");
	$('.resistance').removeClass("highlight");
	$('#highlightA').addClass("highlighttext");
	$('#highlightB').removeClass("highlighttext");

	Achecked = 1;
	Bchecked = 0;
}

/* Highlights trait B */
function highlightTraitB() {
	$('.noresistance').removeClass("highlight");
	$('.resistance').addClass("highlight");
	$('#highlightB').addClass("highlighttext");
	$('#highlightA').removeClass("highlighttext");

	Achecked = 0;
	Bchecked = 1;
}
function updateChart() {
	counter = animInstance.currentRawFrame;
	if (counter < 57) {
		notifcount = 0;
		generations.innerHTML = "0 Generation";
		timepassed.innerHTML = "0 Years";
	}
	else if (counter >= 58 && counter < 168) {
		notifcount = 0;
		generations.innerHTML = "1st Generation";
		timepassed.innerHTML = "1 Year";
	}
	else if (counter >= 169 && counter < 279) {
		notifcount = 0;
		generations.innerHTML = "2nd Generation";
		timepassed.innerHTML = "2 Years";
	}
	else if (counter >= 280 && counter < 390) {
		notifcount = 0;
		generations.innerHTML = "3rd Generation";
		timepassed.innerHTML = "3 Years";
	}
	else if (counter >= 391 && counter < 501) {
		notifcount = 0;
		generations.innerHTML = "4th Generation";
		timepassed.innerHTML = "4 Years";
	}
	else if (counter >= 502 && counter < 612) {
		notifcount = 0;
		generations.innerHTML = "5th Generation";
		timepassed.innerHTML = "5 Years";
	}
	else if (counter >= 613 && counter < 723) {
		generations.innerHTML = "6th Generation";
		timepassed.innerHTML = "6 Years";
		if (notifcount == 0) {
			$.notify({
			// options
			message: '<b>Change in environment:</b> pesticide usage' 
			},{
				// settings
				type: 'warning', 
				element: 'div#animationContainer'
			});
			notifcount = 1;
		}
		console.log(notifcount);
	}
	else if (counter >= 724 && counter < 834) {
		notifcount = 0;
		generations.innerHTML = "Generation 7";
		timepassed.innerHTML = "7 Years";
	}
	else if (counter >= 835 && counter < 945) {
		notifcount = 0;
		generations.innerHTML = "8th Generation";
		timepassed.innerHTML = "8 Years";
	}
	else if (counter >= 946 && counter < 1056) {
		notifcount = 0;
		generations.innerHTML = "9th Generation";
		timepassed.innerHTML = "9 Years";
	}
	else if (counter >= 1057 && counter < 1167) {
		notifcount = 0;
		generations.innerHTML = "10th Generation";
		timepassed.innerHTML = "10 Years";
	}
	else if (counter >= 1168 && counter < 1278) {
		notifcount = 0;
		generations.innerHTML = "11th Generation";
		timepassed.innerHTML = "11 Years";
	}
	else if (counter >= 1279 && counter < 1389) {
		notifcount = 0;
		generations.innerHTML = "12th Generation";
		timepassed.innerHTML = "12 Years";
	}
	else if (counter >= 1390 && counter < 1500) {
		notifcount = 0;
		generations.innerHTML = "13th Generation";
		timepassed.innerHTML = "13 Years";
	}
	else if (counter >= 1501 && counter < 1611) {
		notifcount = 0;
		generations.innerHTML = "14th Generation";
		timepassed.innerHTML = "14 Years";
	}
	else if (counter >= 1612 && counter < 1722) {
		notifcount = 0;
		generations.innerHTML = "15th Generation";
		timepassed.innerHTML = "15 Years";
	}
	else if (counter >= 1723 && counter < 1833) {
		notifcount = 0;
		generations.innerHTML = "16th Generation";
		timepassed.innerHTML = "16 Years";
	}
	else if (counter >= 1834 && counter < 1944) {
		notifcount = 0;
		generations.innerHTML = "17th Generation";
		timepassed.innerHTML = "17 Years";
	}
	else if (counter >= 1945 && counter < 2055) {
		notifcount = 0;
		generations.innerHTML = "18th Generation";
		timepassed.innerHTML = "18 Years";
	}
	else if (counter >= 2056 && counter < 2166) {
		notifcount = 0;
		generations.innerHTML = "19th Generation";
		timepassed.innerHTML = "19 Years";
	}
	else if (counter >= 2167 && counter < 2277) {
		notifcount = 0;
		generations.innerHTML = "20th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2278 && counter < 2388) {
		notifcount = 0;
		generations.innerHTML = "21th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2389 && counter < 2499) {
		notifcount = 0;
		generations.innerHTML = "22th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2500 && counter < 2610) {
		notifcount = 0;
		generations.innerHTML = "23rd Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2611 && counter < 2721) {
		notifcount = 0;
		generations.innerHTML = "24th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2722 && counter < 2832) {
		notifcount = 0;
		generations.innerHTML = "25th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2833 && counter < 2943) {
		notifcount = 0;
		generations.innerHTML = "26th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 2944 && counter < 3054) {
		notifcount = 0;
		generations.innerHTML = "27th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3055 && counter < 3165) {
		notifcount = 0;
		generations.innerHTML = "28th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3166 && counter < 3276) {
		notifcount = 0;
		generations.innerHTML = "29th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3277 && counter < 3387) {
		notifcount = 0;
		generations.innerHTML = "30th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3388 && counter < 3498) {
		notifcount = 0;
		generations.innerHTML = "31th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3499 && counter < 3609) {
		notifcount = 0;
		generations.innerHTML = "32th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3610 && counter < 3720) {
		notifcount = 0;
		generations.innerHTML = "33th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3721 && counter < 3831) {
		notifcount = 0;
		generations.innerHTML = "34th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3832 && counter < 3942) {
		notifcount = 0;
		generations.innerHTML = "35th Generation";
		timepassed.innerHTML = "20 Years";
	}
	else if (counter >= 3943 && counter < 4081) {
		notifcount = 0;
		generations.innerHTML = "36th Generation";
		timepassed.innerHTML = "20 Years";
	}
}

var animationContainer = document.getElementById("animationContainer");
var anim;
var animInstance;

resetFactors();

/* Factors */
function checkRepeatFactors() {
	for (var i=0; i < triallist.length; i++) {
		if (document.getElementById("heritability").checked == answers["trial_" + triallist[i]].heritability && document.getElementById("variation").checked == answers["trial_" + triallist[i]].variation && document.getElementById("gentime").checked == answers["trial_" + triallist[i]].gentime) {
			console.log("this is a repeat");
			
			document.getElementsByClassName("alert")[0].classList.add("alert-show"); // alert
			document.getElementsByClassName("datalog")[0].disabled = true; // disable new entry data log
		}
		else {
			console.log("this is NOT a repeat");
			document.getElementsByClassName("datalog")[0].disabled = false; // enable new entry data log
		}
	}
}

function displayUserResults() {
	// check which factors were observed, then display appropriate graphs
}

function closeAnswer() {
  	$(".close:eq(0)").parent().removeClass("alert-show");
}

function resetFactors() {
	if (triallist.length >= 1) {
		checkRepeatFactors();
	}
	$("#animationContainer").html('');
	if (document.getElementById("heritability").checked == false && document.getElementById("variation").checked == false && document.getElementById("gentime").checked == false){
		$('head').append('<style type="text/css">#ex1Slider .slider-track {background-image:url(http://annietseng.co/prototype/natural-selection/case4/3-experiment/assets/bg_A.png);}</style>');
		anim = {
		container: animationContainer, // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: false,
		rendererSettings: {
		preserveAspectRatio: "xMidYMid meet"
		},
		path: 'http://annietseng.co/prototype/natural-selection/case4/3-experiment/js/CaseStudy4_popA.json' // the path to the animation json
		};
		animInstance = lottie.loadAnimation(anim);
		animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
		animInstance.addEventListener("data_ready", onAnimDataReady);
		animInstance.addEventListener("config_ready", onAnimConfigReady);
		animInstance.addEventListener("DOMLoaded", onAnimDomLoaded);
	}
	else if (document.getElementById("heritability").checked == false && document.getElementById("variation").checked == true && document.getElementById("gentime").checked == false){
		$('head').append('<style type="text/css">#ex1Slider .slider-track {background-image:url(http://annietseng.co/prototype/natural-selection/case4/3-experiment/assets/bg_B.png);}</style>');
		anim = {
		container: animationContainer, // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: false,
		rendererSettings: {
		preserveAspectRatio: "xMidYMid meet"
		},
		path: 'http://annietseng.co/prototype/natural-selection/case4/3-experiment/js/CaseStudy4_popB.json' // the path to the animation json
		};
		animInstance = lottie.loadAnimation(anim);
		animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
		animInstance.addEventListener("data_ready", onAnimDataReady);
		animInstance.addEventListener("config_ready", onAnimConfigReady);
		animInstance.addEventListener("DOMLoaded", onAnimDomLoaded);
	}
}

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
	highlightTraitA();
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
	fakecount -= 40;
	if(fakecount % 111 == 0 || counter == 40){
		counter += 111;
	}
	else {
		counter -= 40;
		counter = Math.ceil(counter/111);
		counter *= 111;
		counter +=40;
	}
	animInstance.goToAndStop(counter, true);
}


function onPrevGen(e){
	counter = animInstance.currentRawFrame;
	fakecount = counter;
	fakecount -= 40;
	if(counter <= 40) {
		counter = 40;
	}
	else if(fakecount % 111 == 0){
		counter -= 111;
	}
	else {
		counter -= 40;
		counter = Math.floor(counter/111);
		counter *= 111;
		counter +=40;
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
	animInstance.goToAndStop(slider.getValue()*41.66, false);

}

pause_btn.addEventListener("click", onPauseClick);

start_btn.addEventListener("click", onStartClick);

nextGen_btn.addEventListener("click", onNextGen);

prevGen_btn.addEventListener("click", onPrevGen);

console.log(animInstance);