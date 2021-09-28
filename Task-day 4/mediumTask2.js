//Task 2: Simple Programs todo for Operators

//(Q-1) //Square of a number
let num = 2 ** 3 ;
console.log(num);

//(Q-2) Swapping 2 numbers
let a = 7;
let b = 2;
a = a + b; 6
b = a - b; 2
a = a - b; 4
console.log(a)
console.log(b)

//(Q-3) Addition of 3 numbers
const num1 = 2;
const num2 = 3;
const num3 = 4;
console.log(num1 + num2 + num3);

//(Q-4) Celsius to Fahrenheit conversion
let Celsius = 30;
let fahrenheit = (Celsius * 1.8) + 32 ;
console.log(`${Celsius} is equal to ${fahrenheit}`)

//(Q-5)Meter to miles
const meter = 1000;
const factor = 0.000621371;
const miles = meter * factor;
console.log(`${meter} meter is equal to ${miles}`);

//(Q-6) Pounds to kg
const lb = 1;
const integers = 0.45359237 ;
const kg = lb * integers;
console.log(`${lb} pounds is eqaul to ${kg}`) 

//(Q-7) Calculate Batting Average
var guvi = {
  firstName: 'guvi',
  hits: 1000000,
  atBats: 50000,
  calcAVG: function() {
      this.avg = this.hits / this.atBats;
      return this.avg;
  }
}
guvi.calcAVG();
console.log(guvi.firstName + ' has a batting average of ' + guvi.avg);

//(Q-8) Calculate five test scores and print their average
let a1 = 90;
let b1 = 60;
let c1 = 80;
let d1 = 40;
let e1  =50;
let average = (a1 + b1 + c1 + d1 + e1)/5;
console.log(average);

//(Q-9) Power of any number x ^ y.
let number = 2;
let exponent = 3;
console.log( number ** exponent);
// using the Math library 
console.log( Math.pow(number, exponent));

//(Q-10) Calculate Simple Interest
let amount  = 500000;
let rate = 7;
let year = 5;
const simpleInterest = (amount*rate*year)/100; 
console.log(simpleInterest);

//(Q-11) Calculate area of an equilateral triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//(Q-12) Area Of Isosceles Triangle
const h = 3;
const base = 8;
const Area = (1 / 2.0) * base * h;   
console.log("Area of Isosceles Triangle = " + Area);

//(Q-13) Volume Of Sphere
let r = 2;
let Volume = ((4/3)*3.14*r*r*r);
console.log(`The volume of sphere is ${Volume}`);

//(Q-14) Volume Of Prism
let L = 10;
let B = 8;
let H = 6;
const Prism  = ( L * B * H ) / 2 ;
console.log(`volume of prism is: ${Prism}`);

//(Q-15) Area Of Triangle
const baseValue = 10;
const heightValue = 20;
const triangle = (baseValue * heightValue)/2;
console.log(`The area of traingle is ${triangle}`);

//(Q-16) Give the Actual cost and Sold cost, Calculate Discount Of Product
let aCost = 50;
let sCost = 75;
let Discount = aCost-(aCost*sCost/100);
console.log(`Discount for this product is :${Discount}`);

//(Q-17) Given their radius of a circle and find its diameter, circumference and area.
let R = 10;
let D = 2 * 10;
let C = 2 * 3.14 * 10;
let A = 3.14 * (10 * 10);
console.log(`Diameter is ${D}`)
console.log(`circumference is ${C}`)
console.log(`area is ${A}`)
     
//(Q-18) Given two numbers and perform all arithmetic operations
    let p = 8;
    let q = 6;
    sum = p + q;
    sub = p - q;
    mul = p * q;
    div = p / q;
    mod = p % q;
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)


//(Q-20) Calculate electricity bill?
function calculateBill(units)
{
     
    if (units <= 100)
    {
        return units * 10;
    }
    else if (units <= 200)
    {
        return (100 * 10)
            + (units - 100)
                  * 15;
    }
    else if (units <= 300)
    {
        return (100 * 10)
            + (100 * 15)
            + (units - 200)
                  * 20;
    }
    else if (units > 300)
    {
        return (100 * 10)
            + (100 * 15)
            + (100 * 20)
            + (units - 300)
                  * 25;
    }
    return 0;
}
console.log(calculateBill(250));

//(Q-21) Program To Calculate CGPA
let English = 9.1  
let Hindi = 8.5  
let Maths = 9.5  
let Science =9.6;  
let SocialStudy = 8.6  
let CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0)  
console.log(CGPA);




