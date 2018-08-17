"use strict";

var inputarea_1 = document.getElementById(noteID_1);
var inputarea_2 = document.getElementById(noteID_2);

$(document).ready(function () {
    function init() {
        if (sessionStorage[noteID_1]) {
            $(notediv_1).val(sessionStorage[noteID_1]);
        }
        if (sessionStorage[noteID_2]) {
            $(notediv_2).val(sessionStorage[noteID_2]);
        }
    }
    init();
});

$('.stored').keyup(function () {
    sessionStorage[$(this).attr('name')] = $(this).val();
});

function saveNotes($id) {
	var savealert = document.getElementsByClassName("form-group");
	if(inputarea_1.value && $id == 0) {
		savealert[$id].insertAdjacentHTML('beforeend', '<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
		setTimeout(disappear, 1500);
	}
	else if(inputarea_2.value && $id == 1) {
		savealert[$id].insertAdjacentHTML('beforeend', '<span id="savealert"><font class="saved"><i class="fas fa-check-circle"></i> Saved!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("saved")[0].classList.add("fadein");}, 10);
		setTimeout(disappear, 1500);
	}
	else {
		savealert[$id].insertAdjacentHTML('beforeend', '<span id="savealert"><font class="warning"><i class="fas fa-exclamation-triangle"></i> There are no notes!</font></span>');
		setTimeout(function(){
			document.getElementsByClassName("warning")[0].classList.add("fadein");}, 10);
		setTimeout(disappear, 1500);
	}
}

function disappear() {	
	$( "#savealert" ).remove();
}