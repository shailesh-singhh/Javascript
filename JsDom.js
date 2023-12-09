// let high = document.querySelector("h1");
// console.log(high.setAttribute("class" ,"NewClass"));
// let newButton = document.createElement("button");
// newButton.innerText="Click Me";
// console.log(newButton);

// let div = document.querySelector("div");

//div.prepend(newButton);
// div.after(newButton);
//div.before(newButton);
let newHeading = document.createElement("h1");
newHeading.innerHtml = "<i>I am new </i>";
newHeading.innerText="Hey ! I am New ";
let body =document.querySelector("body");
body.prepend(newHeading);
let para = document.querySelector("p");
para.remove();
// let img =document.querySelector("img");
// img.remove();