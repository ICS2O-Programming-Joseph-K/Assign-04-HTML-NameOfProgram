"use strict"

// Calculate the subtota, tax, and total for food order
function enterClicked () {


  // get rize size 
  let select = document.getElementById("rice");
  let rice = select.options[select.selectedIndex].value;

  // get topping specifications 
  let select2 = document.getElementById("toppings");
  let toppings = select.options[select.selectedIndex].value;

  //constants, initialize variables
  const REGULAR_PRICE = 2;
  const LARGE_PRICE = 3;
  const EXTRALARGE_PRICE = 4;


  // if user selects regular for rice
	if (size == "Regular") {
		sizePrice = REGULAR_PRICE
  }

  // else if user selects large for rice
	else if (size == "Large") {
		sizePrice = LARGE_PRICE
  }

  // else if user selects Extra Large for rice
	else if (size == "ExtraLarge") {
		sizePrice = EXTRALARGE_PRICE
  }

  // else if none of the conditions are met
	else {
		sizePrice = 0
  }


  //constants, initialize variables
   const TOPPINGS_PRICE = 0.50;
  
  // if user selects seaweed for toppings
	if (toppings == "Seaweed" || toppings == "Seasame") {
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


  //variables, calculations 
  let subtotal = sizePrice + toppingsPrice;
  let tax = subtotal * 0.13;
  let total = subtotal + tax;

  
  //display the results
  document.getElementById('user-info').innerHTML = "Your subtotal is " + subtotal.toNearest(2) + ". While Tax Price is " + tax.toNearest(2) + ". Your total cost is " + total.toNearest(2)


  
}
                                                                                                                                                                                
