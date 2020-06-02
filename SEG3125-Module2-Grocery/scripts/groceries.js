
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
		organic: true,
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

function restrictListProducts(prods, restrictionsList) {

	console.log("Enter restrictProducts :");

	let products = [];

	// V GF O
	if (restrictionsList.includes("Vegan") && restrictionsList.includes("Gluten Free") && restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].glutenFree == true && prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	}
	// V GF
	else if (restrictionsList.includes("Vegan") && restrictionsList.includes("Gluten Free")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
	// V O
	else if (restrictionsList.includes("Vegan") && restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true && prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	}
	// GF O
	else if (restrictionsList.includes("Organic") && restrictionsList.includes("Gluten Free")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].organic == true && prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
	// V
	else if (restrictionsList.includes("Vegan")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].vegetarian == true){
				products.push(prods[i]);
			}
		}
	}
	// GF
	else if (restrictionsList.includes("Gluten Free")) {
		for(i = 0; i < prods.length; i++){
			if(prods[i].glutenFree == true){
				products.push(prods[i]);
			}
		}
	}
	// O
	else if (restrictionsList.includes("Organic")){
		for(i = 0; i < prods.length; i++){
			if(prods[i].organic == true){
				products.push(prods[i]);
			}
		}
	} else {
		for(i = 0; i < prods.length; i++){
			products.push(prods[i]);
		}
	}

	return products;
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
