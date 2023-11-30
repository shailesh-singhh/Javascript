// Create a faulty calculator using javascript 

// it should perform wrong operation 10 %  times only 

// Faulty Calculation includes :-
//    +  -------------->  -;
//    *  -------------->  +;
//    -  -------------->  /;
//    /  -------------->  **;
  
let random = Math.random();

let a = prompt("Enter the first number ");
let b = prompt("Enter the Second number ");
let c = prompt("Enter the Operation ");

let obj = {
    "+" : "-",
"*" : "+" ,
"-" : "/",
"/" : "**",
 }

if(random > 0.1){
    console.log(` The Result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
}