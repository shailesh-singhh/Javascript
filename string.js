//let obj = {
  //  item :"pen",
  //  price : 10,
//};
 //let output = `The cost of ${obj.item} is ${obj.price} rupees`;
 //console.log(output);
 //let str = "Apna\tCollege";
 //console.log(str);

 
 //console.log(str.toUpperCase());
 
// let str = prompt("Enter your Name ");
// console.log(`${"@"}${str}${str.length}`);


console.log("String tutorial");
let str = "ApnaCollege";
console.log(str.length);
for(let i =0 ; i<str.length;i++){
  console.log(str[i]);
};
console.log(
str.toUpperCase());
console.log(
str.toLowerCase());
// str.trim();

console.log(str.slice(4));
 console.log(str.replace("Apna","Hamara"));
let Rname = "Shailesh";
let friend = "Ashutosh";
console.log("His name is " +Rname + " and his friend's name is "+ friend);
console.log(`His name is ${Rname} and his friend's name is ${friend}`);

console.log(str.concat(Rname,friend));