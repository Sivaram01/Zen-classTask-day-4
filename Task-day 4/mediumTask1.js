//GUVI: Zen Class — Variables Arrays & Objects
//Task 1: Simple Programs to do for variables

//(Question-1):
//Declare four variables without assigning values and print them in console

var a;
var b;
let c;
let d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//(Q-2):
//How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");

var myvar = 1;
console.log(myvar);

//(Q-3):
//Declare variables to store your first name, last name, marital status, country and age in multiple lines

let FirstName = "sivaram";
let LastName = "vasudevan";
let MaritalStatus = "single";
let country = "India";
let Age = "22";

//(Q-4):
//Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName = 'sivaram', lastName = "vasudevan", maritalStatus = 'single', Country = "India" , age = "22";

//(Q-5):
//Declare variables and assign string, boolean, undefined and null data types
let stringfy = "string";
let guvi = true;
let data = undefined;
let users = null;

//(Q-6)// Convert the string to integer
let num = "5";
console.log(10 + parseInt(num));
console.log(10 + Number(num));
console.log(10 + (+num));

//(Q-7)//Write 6 statement which provide truthy & falsey values.
function truthyOrFalsy(val){
  if(val){
    console.log (`${val} is truthy`);
  } else{
    console.log (`${val} is falsy`);
  }   
}
truthyOrFalsy("1")
truthyOrFalsy(-1)
truthyOrFalsy(0)
truthyOrFalsy(-0)
truthyOrFalsy(null)
truthyOrFalsy(undefined)

