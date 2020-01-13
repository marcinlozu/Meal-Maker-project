const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: [],
	},
//getters and setters
get appetizers() {
	return this._courses.appetizers
},

set appetizers(appetizersIn) {
 this._courses.appetizers = appetizers;
},

get mains() {
	return this._courses.mains
},

set mains(mainsIn) {
 this._courses.mains = mains;
},

get desserts() {
	return this._courses.desserts
},

set desserts(dessertsIn) {
 this._courses.desserts = desserts;
},
//getter for all menu
get courses() {
	return {
		appetizers: this.appetizers,
		mains: this.mains,
		desserts: this.desserts,
	}
},
//function for adding dishes
addDishToCourse(courseName, dishName, dishPrice) {
	const dish = {
		courseName,
		dishName,
		dishPrice,
	}

	//this._courses[courseName].push(dish); //try to replace this with setters
	this[courseName].push(dish) //using setters
},

getRandomDishFromCourse(courseName) {
	//const dishes = this._courses[courseName];
	//const randomIndex = Math.floor(Math.random()*dishes.length);
	//return dishes[randomIndex];

	//same effects using getter and without variable dishes
	const randomIndex = Math.floor(Math.random()*this[courseName].length);
	return menu[courseName][randomIndex]
},

generateRandomMeal() {
	const appetizer = this.getRandomDishFromCourse('appetizers');
	const main = this.getRandomDishFromCourse('mains');
	const dessert = this.getRandomDishFromCourse('desserts');
	const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;

	return `Your meal is ${appetizer.dishName}, ${main.dishName} and ${dessert.dishName} and will const ${totalPrice} EUR`
},

}

// add some meals to the menu
menu.addDishToCourse('appetizers', 'Cesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Greek Salad', 4.00);
menu.addDishToCourse('appetizers', 'Foccacia', 3.50);

menu.addDishToCourse('mains', 'Pizza', 6.00)
menu.addDishToCourse('mains', 'Pasta', 5.50)
menu.addDishToCourse('mains', 'Tomato Soup', 2.50)

menu.addDishToCourse('desserts', 'Ice Cream', 2.00)
menu.addDishToCourse('desserts', 'Tiramisu', 3.00)
menu.addDishToCourse('desserts', 'Panna Cotta', 3.00)

//let's generate a random menu
let meal = menu.generateRandomMeal()
//check
console.log(meal)

//check all the menu
console.log('Other menu')
console.log(menu.courses)