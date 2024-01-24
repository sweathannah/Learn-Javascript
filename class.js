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


                    // symbols
const mySymbol = Symbol();
console.log(mySymbol);
const newSymbol = ("hi");
console.log(newSymbol);


                        // concatination
const love = "I love";
const luv = love[2];
console.log(luv);
console.log(love.replace("love", "hate"))
const sentence = love + " " + "studing " + day;
console.log(sentence);

                    
const backtickSentence = `${love}  studying  ${day}`;
console.log(backtickSentence);

const myArray = ["Rukaya", "Marvellous", "Grace", "Munirah"];
console.log(myArray);
myArray[0] = "Salamat";
console.log(myArray);


                    // math object
const four = 4;
console.log(Math.sqrt(four));
console.log(Math.pow(four, 2));
console.log(Math.PI);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(3,4,9,0));

// trying to get a random number range 0-10 which allows float/decimal numbers
// console.log(Math.floor(Math.random()*10 +1)) //this allows only integers
let random = (Math.random()*10 + 1);
const click = random;


                    //window operators

// let greetings = "Hello";
// alert(`${greetings}`);      

// let name = prompt("Enter Your name");
// console.log(`${name}`);

// let firstNumber = prompt("Enter number");//prompt are naturally strings
// let secondNumber = prompt("Enter number");
// // let output = firstNumber + secondNumber; here the number is seen as strings to make the browser see it has number its done in three ways
// // let output = Number(firstNumber) + Number(secondNumber);  //first method
// // let output = +firstNumber + +secondNumber; //second method
// console.log(output);

const agree = confirm("Are you sure you want to subscribe");
console.log(agree);

//Regex
    let numBer = "I love Javascript and i belive you also love javascript";
    let res = /javascript/gi;
    console.log(numBer.match(res))

    const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    let inequalities = /[@#$%&;]/g;
    console.log (sentenc.replace (inequalities, ""));

    let extract = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
    let extractNum = /\d+/gi;
    let a = extract.match(extractNum);
    console.log(a);
    let ai = +a[0] * 12;
    console.log(ai);
    let bi = +a[2] * 12;
    console.log(bi)
    let output = ai + bi + 10000;
    console.log(output);
    

                            // Ternary Operators

// let isAMan = true;
// isAMan ? console.log("yes, he is a man") :
// console.log ("No, he is not a man");

let isAMan = true;
if (isAMan){
    console.log('yes, he is a man');
}
else{
    console.log("No, he is not a man");
}

let b = 5;
if (b < 5){
    console.log('Not correct') 
}
else if (b = 5){
    console.log("It's correct");
}
else if (b >5){
    console.log("It's wrong")
}
else{
    console.log("Try again");
}


let today = prompt('What day is today');
let days = today.toLocaleLowerCase()
switch (days) {
    case 'monday':
        console.log('Today is Monday')
    break;
    case 'tuesday':
        console.log('Today is tuesday')
    break;
    case 'wednesday':
        console.log('Today is Wednesday')
    break;
    case 'thursday':
        console.log('Today is Thursday')
    break;
    case 'friday':
        console.log('Today is Friday')
    break;
    default:
        console.log('It is not a day')
}


