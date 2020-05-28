
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



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);// Liste des restrictions
    var s2 = document.getElementById(slct2);// Liste des produits filtrés à remplir

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
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


// Restrictions list in Array
var restrictOptions = ["Vegan","Gluten Free","Organic","None"];

// Makes a list of checkboxes with the possible restrictions in the list
function makeRestrictList(restrict){

	console.log("Enter makeRestrictList :");
	console.log(restrict);

	restList = document.getElementById(restrict);
	restList.innerHTML = "";

	for(i = 0; i < restrictOptions.length; i++){
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "restriction";
		checkbox.value = restrictOptions[i];
		//checkbox.oninput = "buildFiltersList(restrictFilter, 'restriction'); populateListProductChoices(restrictFilter,'displayProduct');"
		restList.appendChild(checkbox);

		var label = document.createElement('label');
		label.htmlFor = restrictOptions[i];
		label.appendChild(document.createTextNode(restrictOptions[i]));
		restList.appendChild(label)

		restList.appendChild(document.createElement('br'));
	}
}

var restrictFilter = [];

// Returns the list of restrictions to filter the products
function buildFiltersList(restrictFilter,checkbox){
	boxList = document.getElementsByName(checkbox);// List des checkbox restrictions

	for(i = 0; i < boxList.length; i++){
		if(boxList[i].checked){
			if (!restrictFilter.includes(boxList[i].value)){
				restrictFilter.push(boxList[i].value);
			}
		} else {
			if (restrictFilter.includes(boxList[i].value)){
				var newList = restrictFilter.filter(function(value) { return value != boxList[i].value;});
				restrictFilter = newList;
			}
		}
	}

}


function displayRestrict(){
	disp = document.getElementById("displayRestList");
	disp.innerHTML = "";

	for(i = 0; i < restrictFilter.length; i++;){
		var elem = document.createTextNode(restrictFilter[i]);
		disp.appendChild(elem);
		disp.appendChild(document.createElement("br"));

	}
}

function hello(){
	console.log("Hello ^^!");
}
