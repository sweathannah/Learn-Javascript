// console.log("Hello World");
// let name = "Titi";
// console.log(name);
// name = "Abiola";
// console.log(name);


// let age = 57;
// let newAge = 13;
// let percentage = newAge/age;
// console.log(percentage);


// let myString = 'hi';
// let otherString = "hello";
// let backtick = `hi again`;
// let num = 31;
// let bol = true;
// let undefinedVariable;
// let emptyValue = null;

// console.log(myString);
// console.log(num);
// console.log(otherString);
// console.log(backtick);
// console.log(bol);
// console.log(undefinedVariable);
// console.log(emptyValue)

// console.log(typeof myString);
// console.log(typeof otherString);
// console.log(typeof backtick);
// console.log(typeof num);
// console.log(typeof bol);
// console.log(typeof undefinedVariable);
// console.log(typeof emptyValue);


let string = "Javascript";
firstletter = string[3];
console.log(firstletter);
console.log(string.length);
console.log(string.length - 1);
// console.log(string[lastIndex]);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

                                // string methods

// 1-length
// 2-toUpperCase()
// 3-toLowerCase()
// 4- substring()
// 5- split()
// 6-includes()
// 7- substr()
// 8-charAt()
// 9-indexOft()


let text = "Programming";
console.log(text.substring(1, 4));
console.log(text.substr(1, 4));

let day = "30 Days of javascript";
console.log(day.split());
console.log(day.split(" "));
console.log (day.replace("Days", "Months"));
console.log(day.includes("Days"));

let title = "Javascript";
let lastIndex = title.length-1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf('J'));
console.log(title.replace("Javascript", "Asabeneh"));


                                    // Assignment Operators
let numOne = 5;
let numTwo = 2;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf)


                                    // Comparison Operators
let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first == second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log ("3" == 3);
console.log("3" === 3);


                                // truthy and falsy values
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);


                            // logical Operators

// only true when both are true remaining are false
// i.e, true and true = true,
//     true and false = false
//     false and false = false
let check = 4 > 3 && 10 > 5;
let see   = 4 > 3  && 5 >10;
console.log(check, see);

// only false when both are false remaining are true
// i.e, true or true = true,
//     true or false = true,
//     false or false = false
let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;
console.log(compare, value, answer)

                            // Negotion Operators

 let negate = !(4 <3); //i.e :if it not 4<3 then it is 4>3 were 4>3 is true thats why our ans is true
 let result = !true; // i.e if its not true then its false thats why our ans is false 
 console.log(negate, result);


                            // Increment andDecreament Operators

let count = 20;
console.log(++count);
console.log(count++);
let num = 20;
    num--;
    console.log(num);

                        // Ternary Operators

let isAMan = true;
isAMan ? console.log("yes, he is a man") :
console.log ("No, he is not a man");

