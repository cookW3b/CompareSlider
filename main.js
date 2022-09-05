'use strict'

function slide(){
	let slideValue = document.getElementById('slider').value;
	document.getElementById('two').style.clipPath ="polygon("+ slideValue+"%" + " 0, 100% 0, 100% 100%, " + slideValue +"%" + " 100%)";
	console.log();
}