// ES5


var num5 = 5;

// ES6

let num6 = 6;
const cons6 = 10;

console.log(num6);

/*

In ES6 we can also use let and const to declare variables

with let we can mutate variable value but const prevent from mutating later on

In ES5 variable have function scope, whereas in ES6 block scope ex. below

*/


es5_func = function(testPassed){
	if (testPassed){

		var text = 'I have passed test!!!'
		var name = 'Dave'

	}

	console.log(name + ': ' + text);

};


es6_func = function(testPassed){
	if (testPassed){

		let text = 'I have passed test!!!'
		const name = 'Dave'

	console.log(name + ': ' + text);
	}

	// console.log(name + ': ' + text); // will have error

};


es5_func(true);
es6_func(true);



// ES5

// to created data privacy in ES5 we need to create block with function in brackets

(function(){
	c = 5;
})

// console.log(c); // will bring error as c is in block scope


//ES6

// to create data privacy in ES6 just put variables in curly braces

{

	let num = 10;
	const t = 'ttt';
	var glob = 'world'
}


// console.log(num); // will bring error as c is in block scope
// console.log(t); // will bring error as c is in block scope
console.log(glob); // will work cause created with var keyword

// Strings

// ES5

firstname = 'David'
lastname = 'Gadyan'
job = 'data-scientist'

console.log('My name is ' + firstname + ' ' + lastname + '. I am ' + job + '.');

//ES6

console.log(`My name is ${firstname} ${lastname}. I am ${job}.`)


// news methods on strings in ES6

console.log(`${firstname} ${lastname}`.startsWith('D'));
console.log(`${firstname} ${lastname}`.endsWith('n'));
console.log(`${firstname} ${lastname}`.includes(' '));
console.log(`${firstname} ${lastname} `.repeat(5));

// Arrow functions

// ES5

var yearsBirth = [1992, 1999, 2000, 1950];

var ages = yearsBirth.map(function(el){
	return 2020 - el
});

console.log(ages);


// ES6

var ages = yearsBirth.map(el => 2020 - el);

console.log(ages);


var ages = yearsBirth.map((el, index) => `${index} Age: ${2020 - el}`);

console.log(ages);


var ages = yearsBirth.map((el, index) => 
	{   const cur_year = new Date().getFullYear();
	return `${index} Age: ${cur_year - el}`});


console.log(ages);


// Arrow functions

// in ES5 this keyword is function scoped

var box5 = {
	color : 'green',
	position : 1,
	clickMe: function(){
		var self = this;
		document.querySelector('.green').addEventListener('click', function(){
			var str = 'This is box number ' + this.position + ' and it is ' + this.color + ' color.';
			alert(str);
		})
	}
};

//ES6

const box6 = {
	color : 'green',
	position : 1,
	clickMe: function(){
		document.querySelector('.green').addEventListener('click', () => {
			var str = `This is box number ${this.position} and it is  ${this.color} color.`; // in this ES6 has access to object this property not global object
			alert(str);})
		
	}};


// destructuring

// ES5
var arr = [2018, 2019, 2020];

var y0 = arr[0];
var y1 = arr[1];
var y2 = arr[2];


//ES6

const [year0, year1, year2] = arr

console.log(year0);
console.log(year1);
console.log(year2);


// Array methods

// ES5

// ES5

// Converting to Array
var sel5 = document.querySelectorAll('.box')

// arr5 = Array.prototype.slice.call(sel5);

// arr5.forEach(function(cur){


// 	cur.style.backgroundColor = 'dodgerblue'
// });


// ES6

var sel6 = document.querySelectorAll('.box');

var arr6 = Array.from(sel6);

arr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')


// Iterate over list/array

// ES5

// for (var i = 0; i < arr6.length; i ++){

// 	if (arr6[i].className === 'box blue'){
// 		continue;
// 	}

// 	arr6[i].textContent = 'Changed to blue'
// }


// ES6

// for of


for (var cur of arr6){

	if (cur.className.includes('blue')){
		continue;
	}

	cur.textContent = 'Changed to blue'


}


// find value in array

// ES5

var ages = [1990, 1992, 1999, 2005, 2020]

var full_age = ages.map(function(cur){

	return  (2020 - cur) > 18
});
console.log(full_age.indexOf(true));
console.log(ages[full_age.indexOf(true)])


// ES6

console.log(ages.find(cur => 2020 - cur > 18));
console.log(ages.findIndex(cur => 2020 - cur > 18));




