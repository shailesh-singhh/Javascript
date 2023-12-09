// let adj = [Crazy , Amazing , fire ];
// let Shop =[Engine , Food , Garnament];
// let oWord = [ Bros ,Limited , Hub];

// let random = Math.random();

// console.log(`${adj[random]}${Shop[random]}${oWord[random]}`);

let ran = Math.random();
let first , second , third;
if(ran < 0.33){
first = "Crazy"
}
else if(ran <0.66 && ran>=0.33){
    first="Amazing";
}
else{
    first = "Fire";
}
if(ran < 0.33){
second = "Engine";
}
else if(ran <0.66 && ran>=0.33){
    second="Food";
}
else{
    second = "Garment";
}
if(ran < 0.33){
third = "Bros";
}
else if(ran <0.66 && ran>=0.33){
    third="Limited";
}
else{
    third = "Hub";
}
alert(`${first} ${second} ${third}`);
console.log(`${first} ${second} ${third}`);