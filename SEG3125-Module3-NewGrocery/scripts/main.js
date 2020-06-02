function openProdDisplay(panelId){
	// Code from W3Schools Tabs
	var panels = document.getElementsByClassName("maintab");
	for(i = 0; i < panels.length; i++){
		panels[i].style.display = "none";
	}

	document.getElementById(panelId).style.display = "block";
}

function makeNav(category, htmlComp){
	var bread = document.getElementById(htmlComp);

	bread.innerHTML = "";

	var p = document.createElement("P");

	var cat = document.createElement("SPAN");
	cat.innerHTML = "Category";
	console.log(cat)
	cat.setAttribute("onclick", "openProdDisplay('categories');");
	cat.setAttribute("id","backCat");
	p.appendChild(cat);

	p.appendChild(document.createTextNode(" > "));
	p.appendChild(document.createTextNode(category));

	bread.appendChild(p);
}

function openCart(){
	document.getElementById("openCart").style.display = "none";
	document.getElementById("closeCart").style.display = "block";
	document.getElementById("cartPanel").style.width = "270px";
}

function closeCart(){
	document.getElementById("openCart").style.display = "block";
	document.getElementById("closeCart").style.display = "none";
	document.getElementById("cartPanel").style.width = "0px";
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

// Get selected preferences and returns them in a List
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

// Gets the products list according to category and restrictions
function getProductsList(cat){

	var prods = filterCategory(cat);
	var restrictions = getRestrictions();
	var productsList = restrictListProducts(prods, restrictions);

	productsList.sort(function(a,b){ return a.price - b.price; });

	return productsList;
}

function makeHtmlProductsList(prodList, htmlComp){

	console.log("Enter Make html");

	var choices = document.getElementById(htmlComp);
	choices.innerHTML = "";

	for (i = 0; i < prodList.length; i++) {

		var product = prodList[i];

		var box = document.createElement("DIV");
		box.setAttribute("class","prodBox");

		var image = document.createElement("IMG");
		image.setAttribute("src", prodList[i].img);
		image.setAttribute("width", "200");
		image.setAttribute("alt", prodList[i].name);
		box.appendChild(image);

		var name = document.createElement("P");
		name.innerHTML = prodList[i].name;
		name.setAttribute("class", "prodName");
		name.setAttribute("id", prodList[i].name);
		box.appendChild(name);

		var price = document.createElement("P");
		price.innerHTML = prodList[i].price;
		price.setAttribute("class", "prodPrice");
		box.appendChild(price);

		var add = document.createElement("BUTTON");
		add.innerHTML = "Add to cart"
		add.setAttribute("type","button");
		add.setAttribute("class", "prodBtn");

		var strFunc = "addToCart('" + prodList[i].name + "','myCart','total');";
		console.log(strFunc);
		add.setAttribute("onclick", strFunc);

		box.appendChild(add);

		choices.appendChild(box);
	}
}

function getProdByName(name){
	for (i = 0; i < products.length; i++){
		if (products[i].name == name){
			return products[i];
		}
	}
	return false;
}

var cartContent = [];

function addToCart(product,htmlComp,htmlTot){
	console.log("Enter addToCart :")
	prod = getProdByName(product);

	cartContent.push(prod);

	cart = document.getElementById(htmlComp);

	var prodLine = document.createElement("DIV");
	prodLine.setAttribute("class","prodLine");

	var name = document.createElement("P");
	name.innerHTML = prod.name;
	name.setAttribute("class", "cartName");
	prodLine.appendChild(name);

	var price = document.createElement("P");
	price.innerHTML = prod.price;
	price.setAttribute("class", "cartPrice");
	prodLine.appendChild(price);

	cart.appendChild(prodLine);
	computeTotal(htmlTot);
}

function computeTotal(htmlTot){
	var total = 0;
	for(i = 0; i < cartContent.length; i++){
		total = total + cartContent[i].price;
	}

	var tot = document.getElementById(htmlTot);
	tot.innerHTML = total;
}

function resetCart(htmlComp, htmlTot){
	cartContent = [];
	var cart = document.getElementById(htmlComp)
	cart.innerHTML = "";

	var tot = document.getElementById(htmlTot);
	tot.innerHTML = 0;
}
