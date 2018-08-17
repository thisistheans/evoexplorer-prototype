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
		var traitA = document.getElementsByClassName("latemigrate");
		var traitB = document.getElementsByClassName("earlymigrate");
		var notifcount = 0;

		
		var slider = new Slider('#slider', {
		});

		var ctx = document.getElementById("barChart");
		var barChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Late", "Early"],
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
			$('.latemigrate').removeClass("highlight");
			$('.earlymigrate').removeClass("highlight");
			$('#highlightB').removeClass("highlighttext");
			$('#highlightA').removeClass("highlighttext");
			$("input[name='trait']").prop('checked', false);
			barChart.data.datasets[0].backgroundColor[0] = 'rgba(0, 0, 0, 0.1)';
			barChart.data.datasets[0].backgroundColor[1] = 'rgba(0, 0, 0, 0.1)';
			barChart.update();
			
		}

		/* Highlights trait A */
		function highlightTraitA() {
			$('.latemigrate').addClass("highlight");
			$('.earlymigrate').removeClass("highlight");
			$('#highlightA').addClass("highlighttext");
			$('#highlightB').removeClass("highlighttext");

			Achecked = 1;
			Bchecked = 0;

			highlightGraph('#ff4438', 0, 1);
		}

		/* Highlights trait B */
		function highlightTraitB() {
			$('.latemigrate').removeClass("highlight");
			$('.earlymigrate').addClass("highlight");
			$('#highlightB').addClass("highlighttext");
			$('#highlightA').removeClass("highlighttext");

			Achecked = 0;
			Bchecked = 1;

			highlightGraph('#ff4438', 1, 0);
		}
		function updateChart() {
			counter = animInstance.currentRawFrame;
			console.log(counter);
			if (counter < 54) {
				notifcount = 0;
				generations.innerHTML = "0 Generation";
				timepassed.innerHTML = "0 Years";
				barChart.data.datasets[0].data = [14, 6];
				barChart.update();
			}
			else if (counter >= 55 && counter < 183) {
				notifcount = 0;
				generations.innerHTML = "1st Generation";
				timepassed.innerHTML = "2 Years";
				barChart.data.datasets[0].data = [13, 5];
				barChart.update();
			}
			else if (counter >= 184 && counter < 312) {
				notifcount = 0;
				generations.innerHTML = "2nd Generation";
				timepassed.innerHTML = "4 Years";
				barChart.data.datasets[0].data = [12, 4];
				barChart.update();
			}
			else if (counter >= 313 && counter < 441) {
				generations.innerHTML = "3rd Generation";
				timepassed.innerHTML = "6 Years";
				barChart.data.datasets[0].data = [11, 5];
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
				console.log(notifcount);
			}
			else if (counter >= 442 && counter < 570) {
				notifcount = 0;
				generations.innerHTML = "4th Generation";
				timepassed.innerHTML = "8 Years";
				barChart.data.datasets[0].data = [10, 5];
				barChart.update();
			}
			else if (counter >= 571 && counter < 699) {
				notifcount = 0;
				generations.innerHTML = "5th Generation";
				timepassed.innerHTML = "10 Years";
				barChart.data.datasets[0].data = [10, 6];
				barChart.update();
			}
			else if (counter >= 700 && counter < 828) {
				notifcount = 0;
				generations.innerHTML = "6th Generation";
				timepassed.innerHTML = "12 Years";
				barChart.data.datasets[0].data = [8, 8];
				barChart.update();
			}
			else if (counter >= 829 && counter < 957) {
				notifcount = 0;
				generations.innerHTML = "Generation 7";
				timepassed.innerHTML = "14 Years";
				barChart.data.datasets[0].data = [7, 9];
				barChart.update();
			}
			else if (counter >= 958  && counter < 1086) {
				notifcount = 0;
				generations.innerHTML = "8th Generation";
				timepassed.innerHTML = "16 Years";
				barChart.data.datasets[0].data = [6, 11];
				barChart.update();
			}
			else if (counter >= 1087 && counter < 1215) {
				notifcount = 0;
				generations.innerHTML = "9th Generation";
				timepassed.innerHTML = "18 Years";
				barChart.data.datasets[0].data = [6, 12];
				barChart.update();
			}
			else if (counter >= 1216 && counter < 1344) {
				notifcount = 0;
				generations.innerHTML = "10th Generation";
				timepassed.innerHTML = "20 Years";
				barChart.data.datasets[0].data = [5, 14];
				barChart.update();
			}
			else if (counter >= 1345 && counter < 1473) {
				notifcount = 0;
				generations.innerHTML = "11th Generation";
				timepassed.innerHTML = "22 Years";
				barChart.data.datasets[0].data = [7, 14];
				barChart.update();
			}
			else if (counter >= 1474 && counter < 1602) {
				notifcount = 0;
				generations.innerHTML = "12th Generation";
				timepassed.innerHTML = "24 Years";
				barChart.data.datasets[0].data = [4, 15];
				barChart.update();
			}
			else if (counter >= 1603 && counter < 1731) {
				notifcount = 0;
				generations.innerHTML = "13th Generation";
				timepassed.innerHTML = "26 Years";
				barChart.data.datasets[0].data = [3, 17];
				barChart.update();
			}
			else if (counter >= 1732 && counter < 1860) {
				notifcount = 0;
				generations.innerHTML = "14th Generation";
				timepassed.innerHTML = "28 Years";
				barChart.data.datasets[0].data = [2, 18];
				barChart.update();
			}
			else if (counter >= 1861 && counter < 1989) {
				notifcount = 0;
				generations.innerHTML = "15th Generation";
				timepassed.innerHTML = "30 Years";
				barChart.data.datasets[0].data = [4, 18];
				barChart.update();
			}
			else if (counter >= 1990 && counter < 2118) {
				notifcount = 0;
				generations.innerHTML = "16th Generation";
				timepassed.innerHTML = "32 Years";
				barChart.data.datasets[0].data = [3, 19];
				barChart.update();
			}
			else if (counter >= 2119 && counter < 2258) {
				notifcount = 0;
				generations.innerHTML = "17th Generation";
				timepassed.innerHTML = "34 Years";
				barChart.data.datasets[0].data = [3, 20];
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
            path: 'http://annietseng.co/prototype/natural-selection/case3/3-experiment/js/CaseStudy3_popA.json' // the path to the animation json
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
			fakecount -= 32;
			if(fakecount % 129 == 0 || counter == 32){
				counter += 129;
			}
			else {
				counter -= 32;
				counter = Math.ceil(counter/129);
				counter *= 129;
				counter +=32;
			}
            animInstance.goToAndStop(counter, true);
        }
		
		
        function onPrevGen(e){
			counter = animInstance.currentRawFrame;
			fakecount = counter;
			fakecount -= 32;
			if(counter <= 32) {
				counter = 32;
			}
			else if(fakecount % 129 == 0){
				counter -= 129;
			}
			else {
				counter -= 32;
				counter = Math.floor(counter/129);
				counter *= 129;
				counter +=32;
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