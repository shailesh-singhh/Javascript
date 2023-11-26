//function myFunction(){
   // console.log("Welcome to Apna college");
//    console.log("We are learning Javascript");
//}

//myFunction();

//---------------FUNCTION TO ADD TWO NUMBER----------//
// let x = prompt("Enter the first number ");
// let y = prompt("Enter second number");
// let z = prompt("Enter third number ");
// function addition(x,y,z){
//     console.log(x+y+z);
// }
// addition(34,34,54);
//const arrowsum (a,b)=>{
//console.log(a+b);
//}
  
//------------Multiplication Function ---------------//

//function mul(a ,b){
  //  return a * b ;
//}

// -------------p1------------/-//

// function countVowel(str){
//     let count = 0;
//     for(const char of str){
//       ///  console.log(char);
//        if(char === "a" || char=== "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//        }
//     }
//     console.log(count);
// }
// countVowel("hello"); 

//--------------Callback function------------------//

// let arr =["a","b","c","d","e","f"];
// arr.forEach(function print(val){
//     console.log(val);
// });

//---------------P2-------------------------------//

// let arr = [2,4,5,6,7];
// arr.forEach(function square(val){
//     console.log(val*val);
// });


// let arr= [56,4,45];
// let newarr =arr.map((val)=>{
//     return val*val;
// });
// console.log(newarr);

// let newArr = arr.filter((val)=>{
// return val%2 ===0;
// })
// ;
// console.log(newArr);
 
// const output = arr.reduce((res,curr) => {
//     return res + curr;

// });
// console.log(output);


// let arr = [90,65,45,97,57,7,9,97,76,95];
// let newarr=arr.filter((val)=>{
//     return val>=90;
// });
// console.log(newarr);
let n = prompt("Enter a number :");
let arr =[];
for(let i = 0; i <= n ;i++){
    arr[i-1]=i;

};
console.log(arr);
let sum = arr.reduce((res ,curr)=>{
    return res + curr;
});
console.log("sum :" , sum);

let fact = arr.reduce((res,curr)=>{
    return res* curr;
});
console.log(fact);
