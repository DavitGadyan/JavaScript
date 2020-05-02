// const add = (a, b) => {
//   // The inside of the function
//   const c = a + b;
//   return c;
// }

// console.log(add(4, 6)); // 10


function add(a, b) {
  // The inside of the function
  const c = a + b;
  return c;
}

// console.log(add(4, 6)); // 10


var number=5; // declaring varibale

/*
hey whats'up

*/


/*

we can declare variable with 3 keywords

var    -- global scope definition
let	   -- local scope definition
const  -- variable cannot be later changed

*/

var a; //declaring
var b=2; //assigning

b ++; // increment by one

b += 3; // add 3 to b
b -= 2; // minus 2 from b

b *= 2; //multiply by 2 and assign back

b /= 2; // divide by 2 and assogn back

var myString = 'you are a cool "person"';
var myString = "you are a cool \"person\"";

var multiLineString = 'First Line\n\t\\Second Line\nThird Line';


var myName = 'David';
var sent1 = 'My name is ' + myName + '. I am cool!!';

var setn1Lenght = sent1.length

var firstLetter = sent1[0]


// console.log(sent1[sent1.length -1]);

// Arrays

var my_array = [1,2,3]

// console.log(my_array[2])

// nested array

var my_nested_array = [[1,2,3], [4,5,6], [7,8,9]]

// console.log(my_nested_array[0][0])

// push to array i.e. append

my_nested_array.push([10,11,12])

// console.log(my_nested_array)

// pop from array i.e. delteing from arrray last element
var removedArray = my_nested_array.pop()

// console.log(my_nested_array)
// console.log(removedArray )

// shift to remove first element
var shiftedArray = my_nested_array.shift()


//unshift add to the beginning of array
my_nested_array.unshift([100,200,300])

// console.log(my_nested_array)

function print_hello() {

	console.log('Hello World!!')
}

// print_hello()


function add(a,b) {

	c = a + b;

	return c
}

// console.log(add(10,5))


function equal12(num) {

	if (num  == 12) {

		return 'Yes, number is equal to 12.'
	}

	return 'No, number is not equal to 12.'
}

// console.log(wasTrue(false));

// console.log(equal12(12))

/*

strict equality ===

12 === 12      true
12 === '12'	   false

12 == 12        true
12 == '12'      true

*/


function moreThan10LessThan30(num) {

	if (num > 10 && num < 30){
		return 'Yes'
	}
	return 'No'

}



/*

&& and operator
|| or operator

*/


function moreThan20orLessThanMinus20(num) {

	if (num > 20 || num < -20){
		return 'Yes'
	}else{
		return 'No'
	}
	

}

// console.log(moreThan20orLessThanMinus20(-21))

function func1(num) {

	if (num < 5 ){

		return 'Tiny'
	} else if (num < 10){
		return 'Small'
	} else if (num < 15){
		return 'Medium'
	} else if (num < 20){
		return 'Large'
	}else{
		return 'Huge'
	}

}


// console.log(func1(100))


function latin(val) {
	var answer="";

	switch(val){
	case 1:
		answer = 'alpha'
		break;
	case 2:
		answer = 'beta'
		break;
	case 3:
		answer = 'gamma'
		break;
	case 4:
		answer = 'delta'
		break;
	default:
		answer='stuff'
		break;
	}
	return answer
}

// console.log(latin(400))


function ranger(val) {
	var answer="";

	switch(val){
	case 1:
	case 2:
	case 3:
		answer = 'Low'
		break;
	case 4:
	case 5:
	case 3:
		answer = 'High'
		break;
	default:
		answer='stuff'
		break;
	}
	return answer
}

// console.log(ranger(4))


var dict1 = {

	'k1' : 10,
	'k2' : 20,
	'k3' : 30,
	1 : 0
}

// console.log(dict1['k1'])

delete dict1[1]

// console.log(dict1)


// while loop

var myArray = []
var i = 0;

while (i < 5){
	myArray.push(i);
	i ++;
}

// console.log(myArray)

var myArray = []

for (var i=0; i<6; i++){
	myArray.push(i);

}

// console.log(myArray)


// console.log(Math.random())

// console.log(Math.floor(Math.random() * 20))


// ternary operator

function equal(a,b){
	return a===b ? true: false;

}

// console.log(equal(10,10))

function checkSign(num){
	return num > 0 ? 'postive' : num < 0 ? 'negative': 'zero'

}

// console.log(checkSign(0))

var myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1,2,3],[4,5,6]))

class Car{
	constructor(model){
		this.model = model
	}

}

const new_car = new Car('Lexus');
// console.log(new_car.model)

import { capitalizeString } from "string_func"

console.log(capitalizeString('hello'));