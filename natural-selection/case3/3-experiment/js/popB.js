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
		var traitA_1 = document.getElementsByClassName("p_dark");
		var traitA_2 = document.getElementsByClassName("darkpepperedmoth");
		var traitB_1 = document.getElementsByClassName("p_light");
		var traitB_2 = document.getElementsByClassName("lightpepperedmoth");
		var notifcount = 0;

		
		var slider = new Slider('#slider', {
		});

		var ctx = document.getElementById("barChart");
		var barChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Dark", "Light"],
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
		
		function highlightGraph (colour, $a, $b) {
			barChart.data.datasets[0].backgroundColor[$a] = colour;
			barChart.data.datasets[0].backgroundColor[$b] = 'rgba(0, 0, 0, 0.1)';
			barChart.update();
		}
		
		function resetHighlight() {
			Achecked = 0;
			Bchecked = 0;
			$('.lightpepperedmoth').removeClass("highlight");
			$('.parent_light').removeClass("highlight");
			$('.darkpepperedmoth').removeClass("highlight");
			$('.parent_dark').removeClass("highlight");
			$('#highlightB').removeClass("highlighttext");
			$('#highlightA').removeClass("highlighttext");
			$("input[name='trait']").prop('checked', false);
			barChart.data.datasets[0].backgroundColor[0] = 'rgba(0, 0, 0, 0.1)';
			barChart.data.datasets[0].backgroundColor[1] = 'rgba(0, 0, 0, 0.1)';
			barChart.update();
			
		}

		/* Highlights trait A */
		function highlightTraitA() {
			$('.darkpepperedmoth').addClass("highlight");
			$('.parent_dark').addClass("highlight");
			$('.lightpepperedmoth').removeClass("highlight");
			$('.parent_light').removeClass("highlight");
			$('#highlightA').addClass("highlighttext");
			$('#highlightB').removeClass("highlighttext");

			Achecked = 1;
			Bchecked = 0;

			highlightGraph('#ff4438', 0, 1);
		}

		/* Highlights trait B */
		function highlightTraitB() {
			$('.darkpepperedmoth').removeClass("highlight");
			$('.parent_dark').removeClass("highlight");
			$('.lightpepperedmoth').addClass("highlight");
			$('.parent_light').addClass("highlight");
			$('#highlightB').addClass("highlighttext");
			$('#highlightA').removeClass("highlighttext");

			Achecked = 0;
			Bchecked = 1;

			highlightGraph('#ff4438', 1, 0);
		}
		function updateChart() {
			counter = animInstance.currentRawFrame;
			console.log(counter);
			if (counter < 62) {
				notifcount = 0;
				generations.innerHTML = "0 Generation";
				timepassed.innerHTML = "0 Years";
				barChart.data.datasets[0].data = [10, 10];
				barChart.update();
			}
			else if (counter >= 62 && counter < 174) {
				notifcount = 0;
				generations.innerHTML = "1st Generation";
				timepassed.innerHTML = "1 Year";
				barChart.data.datasets[0].data = [11, 10];
				barChart.update();
			}
			else if (counter >= 174 && counter < 284) {
				notifcount = 0;
				generations.innerHTML = "2nd Generation";
				timepassed.innerHTML = "2 Years";
				barChart.data.datasets[0].data = [9, 12];
				barChart.update();
			}
			else if (counter >= 284 && counter < 394) {
				notifcount = 0;
				generations.innerHTML = "3rd Generation";
				timepassed.innerHTML = "3 Years";
				barChart.data.datasets[0].data = [11, 8];
				barChart.update();
			}
			else if (counter >= 394 && counter < 504) {
				notifcount = 0;
				generations.innerHTML = "4th Generation";
				timepassed.innerHTML = "4 Years";
				barChart.data.datasets[0].data = [10, 10];
				barChart.update();
				if (notifcount == 0) {
					$.notify({
					// options
					message: '<b>Change in environment:</b> tree bark lightens' 
					},{
						// settings
						type: 'warning', 
						element: 'div#animationContainer'
					});
					notifcount = 1;
				}
			}
			else if (counter >= 504 && counter < 614) {
				notifcount = 0;
				generations.innerHTML = "5th Generation";
				timepassed.innerHTML = "5 Years";
				barChart.data.datasets[0].data = [7, 12];
				barChart.update();
			}
			else if (counter >= 614 && counter < 724) {
				notifcount = 0;
				generations.innerHTML = "6th Generation";
				timepassed.innerHTML = "6 Years";
				barChart.data.datasets[0].data = [7, 13];
				barChart.update();
			}
			else if (counter >= 724 && counter < 834) {
				notifcount = 0;
				generations.innerHTML = "Generation 7";
				timepassed.innerHTML = "7 Years";
				barChart.data.datasets[0].data = [8, 12];
				barChart.update();
			}
			else if (counter >= 834 && counter < 944) {
				notifcount = 0;
				generations.innerHTML = "8th Generation";
				timepassed.innerHTML = "8 Years";
				barChart.data.datasets[0].data = [10, 10];
				barChart.update();
			}
			else if (counter >= 944 && counter < 1054) {
				notifcount = 0;
				generations.innerHTML = "9th Generation";
				timepassed.innerHTML = "9 Years";
				barChart.data.datasets[0].data = [12, 10];
				barChart.update();
			}
			else if (counter >= 1054 && counter < 1164) {
				notifcount = 0;
				generations.innerHTML = "10th Generation";
				timepassed.innerHTML = "10 Years";
				barChart.data.datasets[0].data = [12, 7];
				barChart.update();
			}
			else if (counter >= 1164 && counter < 1274) {
				notifcount = 0;
				generations.innerHTML = "11th Generation";
				timepassed.innerHTML = "11 Years";
				barChart.data.datasets[0].data = [10, 8];
				barChart.update();
			}
			else if (counter >= 1274 && counter < 1384) {
				notifcount = 0;
				generations.innerHTML = "12th Generation";
				timepassed.innerHTML = "12 Years";
				barChart.data.datasets[0].data = [8, 9];
				barChart.update();
			}
			else if (counter >= 1384 && counter < 1494) {
				notifcount = 0;
				generations.innerHTML = "13th Generation";
				timepassed.innerHTML = "13 Years";
				barChart.data.datasets[0].data = [9, 12];
				barChart.update();
			}
			else if (counter >= 1494 && counter < 1604) {
				notifcount = 0;
				generations.innerHTML = "14th Generation";
				timepassed.innerHTML = "14 Years";
				barChart.data.datasets[0].data = [9, 11];
				barChart.update();
			}
			else if (counter >= 1604 && counter < 1714) {
				notifcount = 0;
				generations.innerHTML = "15th Generation";
				timepassed.innerHTML = "15 Years";
				barChart.data.datasets[0].data = [10, 10];
				barChart.update();
			}
			else if (counter >= 1714 && counter < 1824) {
				notifcount = 0;
				generations.innerHTML = "16th Generation";
				timepassed.innerHTML = "16 Years";
				barChart.data.datasets[0].data = [12, 10];
				barChart.update();
			}
			else if (counter >= 1824 && counter < 1934) {
				notifcount = 0;
				generations.innerHTML = "17th Generation";
				timepassed.innerHTML = "17 Years";
				barChart.data.datasets[0].data = [11, 8];
				barChart.update();
			}
			else if (counter >= 1934 && counter < 2044) {
				notifcount = 0;
				generations.innerHTML = "18th Generation";
				timepassed.innerHTML = "18 Years";
				barChart.data.datasets[0].data = [10, 10];
				barChart.update();
			}
			else if (counter >= 2044 && counter < 2154) {
				notifcount = 0;
				generations.innerHTML = "19th Generation";
				timepassed.innerHTML = "19 Years";
				barChart.data.datasets[0].data = [11, 9];
				barChart.update();
			}
			else if (counter >= 2154 && counter < 2262) {
				notifcount = 0;
				generations.innerHTML = "19th Generation";
				timepassed.innerHTML = "20 Years";
				barChart.data.datasets[0].data = [9, 10];
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
            path: 'http://annietseng.co/prototype/natural-selection/case3/3-experiment/js/case3_exp1_data.json' // the path to the animation json
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
			fakecount -= 27;
			if(fakecount % 110 == 0 || counter == 27){
				counter += 110;
			}
			else {
				counter -= 27;
				counter = Math.ceil(counter/110);
				counter *= 110;
				counter +=27;
			}
            animInstance.goToAndStop(counter, true);
        }
		
		
        function onPrevGen(e){
			counter = animInstance.currentRawFrame;
			fakecount = counter;
			fakecount -= 27;
			if(counter <= 27) {
				counter = 27;
			}
			else if(fakecount % 110 == 0){
				counter -= 110;
			}
			else {
				counter -= 27;
				counter = Math.floor(counter/110);
				counter *= 110;
				counter +=27;
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
        
        animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
        animInstance.addEventListener("data_ready", onAnimDataReady);
        animInstance.addEventListener("config_ready", onAnimConfigReady);
        animInstance.addEventListener("DOMLoaded", onAnimDomLoaded);
        
        pause_btn.addEventListener("click", onPauseClick);

        start_btn.addEventListener("click", onStartClick);

        nextGen_btn.addEventListener("click", onNextGen);
		
        prevGen_btn.addEventListener("click", onPrevGen);

        console.log(animInstance);