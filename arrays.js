//let marks = [10 ,34, 56,5,4,3,];
//console.log(marks);
//console.log(marks.length);
//for(let i = 0; i<marks.length ;i++){
//    console.log(marks[i]);
//};

//for(let mark of marks){
//    console.log(mark);
//};
//let cities =["Prayagraj" , "bhopal" , "simla" , "Hydrabad", "delhi"];
//for(let city of cities){
//    console.log(city.toUpperCase());
//;

///  Code to find average of elements of array --  //

let marks = [85 ,97,44,37 ,76 ,60 ];
let total = 0;
for(let i = 0 ; i < marks.length ;i++){
    total = total + marks[i];
}
console.log(" The average is :" , total/marks.length);