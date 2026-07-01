// Qs 1.>   create a new input and button Element on the page using javaScript only. Set the text of button to "click me!"

let button = document.createElement("button");
let input = document.createElement('input');

button.innerText = "click me!";


document.querySelector('body').append(input);
document.querySelector('body').append(button);


// Qs 2.> Add following Attribute to the element :
//          - Change placeholder value of input to "username"
//          - Change the id of button to "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


// Qs 3.> Access the btn uaing the quearySelector and button id. Change the button background color to blue and text color to white .

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


// Qs 4.> Create an h1 element on the page and set its text to "DOM Practice" underlined. Change its color to purple

let h1 = document.createElement('h1');
 h1.innerText = "DOM Practice";
//  h1.innerHTML = "<u>DOM Practice </u>";

 h1.setAttribute("id", "heading");

 document.querySelector('body').prepend(h1);
 let heading = document.querySelector("#heading");


 // Qs 5.> Create a p tag on the page and set its text to "Apna collage Delta Practice", where Delta is bold 

 let para3 = document.createElement("p");
 para3.innerHTML = "Apna collage <b>Delta</b> Practice";

 document.querySelector('body').append(para3);