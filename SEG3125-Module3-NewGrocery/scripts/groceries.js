
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Vegetables",
		img: "images/brocoli.jpg",
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grocery",
		img: "images/bread.jpg",
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "Meat and Fish",
		img: "images/salmon.jpg",
		price: 10.00
	},
	{
		name: "peanut butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Grocery",
		img: "images/peanut_butter.png",
		price: 3.50
	},
	{
		name: "yogurt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Dairy",
		img: "images/yogurt.jpg",
		price: 5.60
	},
	{
		name: "chicken breast",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Meat and Fish",
		img: "images/chicken_breast.jpg",
		price: 13.50
	},
	{
		name: "spaghetti",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grocery",
		img: "images/spaghetti.jpg",
		price: 1.50
	},
	{
		name: "tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetables",
		img: "images/tomatoes.jpg",
		price: 4.00
	},
	{
		name: "beef lasagna",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "Meat and Fish",
		img: "images/beef_lasagna.jpg",
		price: 9.99
	},
	{
		name: "tortillas",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grocery",
		img: "images/tortillas.jpg",
		price: 4.50
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Fruits",
		img: "images/apples.jpg",
		price: 3.70
	},
	{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Fruits",
		img: "images/bananas.jpg",
		price: 0.90
	},
	{
		name: "peaches",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Fruits",
		img: "images/peaches.jpg",
		price: 9.30
	},
	{
		name: "mango",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Fruits",
		img: "images/mangos.jpg",
		price: 1.20
	},
	{
		name: "blueberries",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Fruits",
		img: "images/blueberries.jpg",
		price: 5.90
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Vegetables",
		img: "images/carrots.jpg",
		price: 2.80
	},
	{
		name: "onions",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetables",
		img: "images/onions.jpg",
		price: 3.20
	},
	{
		name: "peppers",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Vegetables",
		img: "images/peppers.jpg",
		price: 3.99
	},
	{
		name: "zuccini",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Vegetables",
		img: "images/zuccinis.jpg",
		price: 4.00
	},
	{
		name: "shrimps",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Meat and Fish",
		img: "images/shrimps.jpg",
		price: 12.00
	},
	{
		name: "breaded haddock",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		category: "Meat and Fish",
		img: "images/breaded_haddock.jpg",
		price: 11.50
	},
	{
		name: "ground beef",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "Meat and Fish",
		img: "images/ground_beef.jpg",
		price: 8.40
	},
	{
		name: "sour cream",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Dairy",
		img: "images/sour_cream.jpg",
		price: 3.50
	},
	{
		name: "mozzarella",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		category: "Dairy",
		img: "images/mozzarella.jpg",
		price: 5.00
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "Dairy",
		img: "images/milk.jpg",
		price: 4.00
	},
	{
		name: "cottage cheese",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		category: "Dairy",
		img: "images/cottage_cheese.jpg",
		price: 7.20
	},
	{
		name: "coconut milk",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		category: "Grocery",
		img: "images/coconut_milk.jpg",
		price: 3.00
	},
	{
		name: "corn",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		category: "Grocery",
		img: "images/corn.jpg",
		price: 2.00
	},
	{
		name: "thyme",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		category: "Grocery",
		img: "images/thyme.jpg",
		price: 5.50
	}
];

function filterCategory(cat){
	var prodList = [];

	for(i = 0; i < products.length; i++){
		if(products[i].category == cat){
			prodList.push(products[i]);
		}
	}

	return prodList;
}

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
