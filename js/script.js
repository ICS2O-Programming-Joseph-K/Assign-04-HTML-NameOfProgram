"use strict"

// Calculate what museum admission fee you will need to pay depending on day and age
function enterClicked () {
  	// initialize variables
	let Output = ""
  
	// get user input
	let age = parseInt(document.getElementById('age').value)

  // get day of the week (different from day)
  let select = document.getElementById("rice");
  let rice = select.options[select.selectedIndex].value;

  // get day of the week (different from day)
  let select1 = document.getElementById("extra");
  let extra = select1.options[select.selectedIndex].value;


  // HOW ON EARTH DO YOU WRITE THIS AS AN CONSTANT!!?!?!??!?!?!------------------------------------------
  //let volume = (rice + extra) * 0.13 + rice + extra;


  	// else if user input for day is Tuesday or Thursday OR age is 12 - 21
	if (rice == "R" || extra == "Kimchi") {
		Output = "Student discount"
	} 

    //else if none of the conditions are met
	else {
		Output = "Full admission"
	}
	
  // display the results
  document.getElementById('user-info').innerHTML = Output     

  // display calculated result to user
  //document.getElementById('user-info').innerHTML = "The volume of your sphere is " + volume.toFixed(2) + " m<sup>3</sup>"
}
