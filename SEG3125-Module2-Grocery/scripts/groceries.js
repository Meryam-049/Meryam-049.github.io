
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "peanut butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 5.60
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 13.50
	},
	{
		name: "spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 1.50
	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		price: 4.00
	},
	{
		name: "beef lasagna",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: 9.99
	},
	{
		name: "tortillas",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.50
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictTags) {

	var product_names = prods;

	if (restrictTags.includes("Vegan")){
		var temp = product_names.filter(function(elem){ return elem.vegetarian == true; });
		product_names = temp;
	}
	if (restrictTags.includes("Gluten Free")){
		var temp = product_names.filter(function(elem){ return elem.glutenFree == true; });
		product_names = temp;
	}
	if (restrictTags.includes("Organic")){
		var temp = product_names.filter(function(elem){ return elem.organic == true; });
		product_names = temp;
	}

	return product_names;

	// Je n'ai pas trouvé de manière plus optimisée de faire ça, je ne sais pas comment
	// faire correspondre les strings "Vegan" et les attributs .vegetarian
	// En Java, j'aurais fait une enum.

	/*
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
	*/
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
