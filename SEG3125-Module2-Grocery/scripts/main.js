
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// Restrictions list in Array
var restrictOptions = ["Vegan","Gluten Free","Organic"];

// Makes a list of checkboxes with the possible restrictions in the list
function makeRestrictList(restrict){

	restList = document.getElementById(restrict);
	restList.innerHTML = "";

	for(i = 0; i < restrictOptions.length; i++){
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "restriction";
		checkbox.id = restrictOptions[i];
		checkbox.value = restrictOptions[i];
		restList.appendChild(checkbox);

		var label = document.createElement('label');
		label.htmlFor = restrictOptions[i];
		label.appendChild(document.createTextNode(restrictOptions[i]));
		restList.appendChild(label)

		restList.appendChild(document.createElement('br'));
	}
}


function getRestrictions(){

	console.log("Enter getRestrictions :");
	var restrictions = []

	for(i = 0; i < restrictOptions.length; i++){
		var option = document.getElementById(restrictOptions[i]);
		console.log(option.id);

		if (option.checked){
			restrictions.push(option.id);
		}
	}

	for(j = 0; j<restrictions.length;j++){
		console.log(restrictions[j]);
	}

	return restrictions;
}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
	console.log("Enter populate :");
	console.log(slct1);
	console.log(slct2);
	// Debug list pref

	// slct1 is a Restrictions List
    var s2 = document.getElementById(slct2); // List of products to display

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, slct1);

	// sort products by price
	optionArray.sort(function(a,b){ return a.price - b.price; });

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var product = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = product.name;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = product.name;
		label.appendChild(document.createTextNode(product.name));
		label.appendChild(document.createTextNode("............."));
		label.appendChild(document.createTextNode(String(product.price)));
		s2.appendChild(label);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}
