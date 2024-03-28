/**********check JS linked to HTML */
console.log("hello")

/***************Variables in JS*****************/
/* 
    JS has 3 way to declear variables
    each has diff behaviour
    1. var : support global and function scope and NOT block scope && reDeclaration allow && mutable
    2. let : Support block and function scope and NOT global scope && reDeclaration NOT allow && mutable
    3. const : Support block and function scope and NOT global scope && reDeclaration NOT allow && NOT mutable.
*/
// Demo for var
var var_a = "Hello I am Ganesh";
console.log('1st declaration var_a == ',var_a) // NO Error
//redclear same variable using var
var var_a = "Hello I am Rahul";
console.log('2nd declaration var_a == ',var_a) // NO Error
// check with Block scope
if(true){
    var var_a = "Hello I am Pooja";
    console.log('3rd declaration var_a == ',var_a) // NO Error
    var var_a = "Hello I am Pooja Patil";// Can update the value
    console.log('3rd declaration var_a == ',var_a) // NO Error
    var var_b = "Hello I am Soni";
}
console.log('Outside block var_b == ',var_b) // NO Error

//demo for let

/*
let let_a = "hello I am Ganesh" // can not define in global sope
console.log("let_a == "+let_a) // Error
*/

function abc(){
    let let_a = "hello I am Ganesh" // can not define in global sope
    console.log("let_a == "+let_a) // NO Error
    //let let_a = "hello I am Rahul" //Error //Can not redeclear
    if(true){
        let let_b = "hello I am Rahul"
        console.log("let_b == "+let_b)// NO Error
        let_b = "hello I am Rahul rajput"// can update the value
        console.log("let_b == "+let_b)// NO Error
    }
    //console.log("let_b == "+let_b)//Error // Can not access out of scope 
}
abc()

/************************** Data Type ********************************/
/**
 * JS has below Data Types
 * 1. number
 * 2. string
 * 3. boolean
 * 5. null
 * 6. undefine
 * 7. object
 * 8. Symbol
 */

var a = 10;
console.log(`a == ${a}, Typeof == ${typeof a}`)

var b = "hello";
console.log(`b == ${b}, Typeof == ${typeof b}`)

var c = true;
console.log(`c == ${c}, Typeof == ${typeof c}`)

var d
console.log(`d == ${d}, Typeof == ${typeof d}`)

var e = null;
console.log(`e == ${e}, Typeof == ${typeof e}`)

var f = {};
console.log(`f == ${f}, Typeof == ${typeof f}`)

var g = Symbol("1");
console.log(`g == symbol, Typeof == ${typeof g}`)


/******************* Diff between null and undefine *******************/
console.log(null == undefined) // true
console.log(null === undefined) // false

/******************* Spred operators *******************/
// ... (three operator)
// Use Case 1st convert string to array of character
var str = "hello salesforce Developers"
console.log("str == ",str);
var arr = [...str]; //convert to array
console.log("arr == ",arr);

// Use case 2nd combine 2 array
var arr1 = ["Amazon","Apple"]
var arr2 = ["Facebook","Instagram"]
var arr3 = [...arr1,...arr2]
console.log('arr3 == ',arr3)

// Use case 3rd add new element to component
arr3 = [...arr3,"Microsoft"]
console.log('arr3 == ',arr3)
/*********** Note *************/
// push and pop doesnt break refernce explain in below example
var arr4 = ["a","b","c"]
var arr5 = arr4
arr5.push("Ganesh")
console.log(`arr5 == ${arr5}`) //a,b,c,Ganesh
console.log(`arr4 == ${arr4}`) //a,b,c,Ganesh // programatically this is wrong

// solution for above problem is to create shallow copy using spread operators
var arr4 = ["a","b","c"]
var arr5 = [...arr4]
arr5.push("Ganesh")
console.log(`arr5 == ${arr5}`) //a,b,c,Ganesh
console.log(`arr4 == ${arr4}`) //a,b,c // programatically this is Correct
 
//Use case 4th combine object
var person1 = {firstName : "Ganesh",
                lastName : "Rajput"};

var person2 = {firstName : "Ganesh",
                lastName : "Rajput",
                age: 28}; // age is extra property here 


var person3 = {...person1,...person2}
console.log(`person3 == ${JSON.stringify(person3)}`) //{"firstName":"Ganesh","lastName":"Rajput","age":28}

/***************** Destructuring array and Obejct (Short hand Notations) *************************/
var arr6 = ["Amazon","Facebook","Microsoft"]
let [Amazon,Facebook,Microsoft] = arr6
console.log(`Amazon == ${Amazon}`)
console.log(`Facebook == ${Facebook}`)
console.log(`Microsoft == ${Microsoft}`)

let person = {firstName : "Ganesh",
            lastName : "Rajput",
            age : 28}
let {firstName,lastName,age} = person;
console.log(`firstName == ${firstName}`)
console.log(`lastName == ${lastName}`)
console.log(`age == ${age}`)

/***************** String interpolation *************************/
// using `` for string concadination
/***************** String Methods *************************/
/**
 * 1. includes()
 * 2. indexOf()
 * 3. startWith()
 * 4. slice()
 * 5. toLowerCase()
 * 6. toUpperCae()
 * 7. trim()
 */

    var str = "    Hello I am salesforce Developer     "
    console.log(`includes() == ${str.includes("Hello")}`)
    console.log(`indexOf() == ${str.indexOf("am")}`)
    console.log(`startWith() == ${str.startsWith("Hello")}`)
    console.log(`slice() == ${str.slice(5,10)}`)
    console.log(`toLowerCase() == ${str.toLowerCase()}`)
    console.log(`toUpperCae() == ${str.toUpperCase()}`)
    console.log(`trim() == ${str.trim()}`)
    
/***************** Object and JSON Operation *************************/
/**
 * Object.keys()
 * Object.values()
 * JSON.stringify()
 * JSON.parse()
 */
var obj = {firstName : "Ganesh",
           lastName : "Rajput",
           age: 28};
console.log(`Object.keys == ${Object.keys(obj)}`)
console.log(`Object.values == ${Object.values(obj)}`)
var str1 = JSON.stringify(obj)
console.log(`Object.stringify == ${str1}`)
console.log(`Object.parse == ${JSON.parse(str1)}`)

/***************** array Methods *************************/
/**
 * map()
 * every()
 * sort()
 * filer()
 * some()
 * reduce()
 * forEach()
 */
// map() return new array with processing each element
arr = [1,2,3,4,5,6,7,10,40,30,60,80]
console.log(`arr == ${arr}`)
// return array of element multiply by 2
let arr7 = arr.map(function(currentItem,index,array){
    return currentItem*2;
})
console.log(`Map() == ${arr7}`)
// filter event no from array
let arrOfEven = arr.filter(function(currentItem){
    return currentItem % 2 === 0
})
console.log(`filter() even == ${arrOfEven}`)
//filter odd no from array
let arrOfodd = arr.filter(function(currentItem){
    return currentItem % 2 !== 0
})
console.log(`filter() odd == ${arrOfodd}`)
//sort array element in assending order
let arr8 = arr.sort(function(a,b){
    return a-b
})
console.log(`sort == ${arr8}`)

// return true if some element match the condition
let arr9 = arr.some(function(currentItem){
    return currentItem % 5 === 0;
})
console.log(`Some == ${arr9}`)

// return true if All element match the condition
let arr10 = arr.every(function(currentItem){
    return currentItem % 5 === 0;
})
console.log(`every == ${arr10}`)
// retun total of array 
let arr11 = arr.reduce(function(total,currentItem){
    return total + currentItem;
})
console.log(`reduce == ${arr11}`)

arr.forEach(function(currentItem){
    console.log(`foreach == ${currentItem * 2}`)
}) 

/***************** Promise *************************/
/**
 * promise is async block which has status and result
 * Status : resolve or rejected
 * result : fulfil,  Pending, Rejected
 */

promiseObj = new Promise((resolve,reject)=>{
    let status = true
    if(status){
        resolve("request Sucess")
    }else{
        resolve("request Failed")
    }
})

promiseObj.then(result=>{
    console.log(`result == ${result}`);
}).catch(error=>{
    console.log(`error == ${error}`);
})
/***************** import & export modules*************************/
//import { PI } from './JS2_Basic.js'
//console.log(`sum == ${PI}`)
/***************** query Selector *************************/
//let demo = document.querySelector('div')
//console.log(`demo == ${demo}`)
//demo.textContent = "hello"
/***************** Event *************************/

/***************** Event Prpogation *************************/

/***************** CustomEvent *************************/
function handleClick(){
    console.log("handleClicks")
    let env = new CustomEvent("hello",{detail:{"name":"Ganesh Rajput"}})
    document.dispatchEvent(env);
}

document.addEventListener("hello",function(data){
    console.log(`data.detail == ${JSON.stringify(data.detail)}`)
})  
/***************** arrow functions *************************/

/***************** setTimeInterval and SetTimeOut *************************/

