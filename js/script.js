"use strict"

// Calculate the subtotal, tax, and total for food order
function enterClicked () {
  //constants
  const REGULAR_PRICE = 2;
  const LARGE_PRICE = 3;
  const EXTRALARGE_PRICE = 4;
  const TOPPINGS_PRICE = 0.50;
  const EXTRA_PRICE = 1;
  const HST = 0.13;

  // initialize variables (0 is written over)
  let sizePrice = 0
  let toppingsPrice = 0
  let extraPrice = 0
  
  // get rize size 
  let selectRice = document.getElementById("rice");
  let rice = selectRice.options[selectRice.selectedIndex].value;

  // get topping specifications 
  let selectToppings = document.getElementById("toppings");
  let toppings = selectToppings.options[selectToppings.selectedIndex].value;

  let selectExtra = document.getElementById("extra");
  let extra = selectExtra.options[selectExtra.selectedIndex].value;


  
  //get extra specifications 
  //let extra = document.getElementById("Side").value
 


  

  

  // if user selects regular for rice
	if (rice == "Regular") {
		sizePrice = REGULAR_PRICE
  }
  // else if user selects large for rice
	else if (rice == "Large") {
		sizePrice = LARGE_PRICE
  }
  // else if user selects Extra Large for rice
	else if (rice == "Extra Large") {
		sizePrice = EXTRALARGE_PRICE
  }
  // else if none of the conditions are met
	else {
		sizePrice = 0
  }

    
  
  
  // if user selects seaweed for toppings
	if (toppings == "Seaweed" || toppings == "Sesame") {
		toppingsPrice  = TOPPINGS_PRICE 
  }
  // else if user selects both toppings for toppings
	else if (toppings == "TwoToppings") {
		toppingsPrice  = TOPPINGS_PRICE * 2
  }
  // else if none of the conditions are met
	else {
		toppingsPrice  = 0
  }

  

  // if user selects kimchi for extra
  if (extra == "Kimchi") {
    extraPrice = EXTRA_PRICE
  }
  // else if noneof the conditions are met
  else {
    extraPrice = 0
  }
  

  
  //variables, calculations 
  let subtotal = sizePrice + toppingsPrice + extraPrice;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  
  
  //display the results
  document.getElementById('display-results').innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + " CAD. While Tax Price is $" + tax.toFixed(2) + " CAD. Your total cost is $" + total.toFixed(2) + " CAD."
  
}
                                                                                                                                                                                
