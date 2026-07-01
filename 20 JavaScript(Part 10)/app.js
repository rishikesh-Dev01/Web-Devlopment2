// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("button was clicked ");
//     alert("button was clicked ");
// };


let btns =  document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = seyHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button ");
//     }
// }

// function seyHello() {
//     alert("Hello");
// }

// btn.onclick = seyHello;



/* Event Listener properties */

// for(btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Apna collage");
// }


// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Color updated")
// })


// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;

//     return color; 
// } 


// Keybord EvenListner

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(Event) {
//     // console.log("key = ", Event.key);
//     console.log("code = ", Event.code); // Arrowdown(U), ArrowUp(D), Arrowleft(L), Arrowright(R)
//     if(Event.code == "keyU") {
//         console.log("charecter moves UP") 
//     } else if (Event.code == "KeyD"){
//         console.log("charecter moves Down")
//     } else if (Event.code == "keyL"){
//         console.log("charecter moves left")
//     } else if (Event.code == "keyR"){
//         console.log("charecter moves right")
//     }
// })


// inp.addEventListener("keyup", function() {
//     console.log("key was releseed");
// } )



// Form Event listner


// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    // console.dir(form);

    // let user = this.elements[0];
    // let pass = this.elements[1];
   
    // // let user = document.querySelector("#user");
    // // let pass = document.querySelector("#pass");

    // console.log(user.value);
    // console.log(pass.value);

    // alert(`(${user.value}, your password is set to ${pass.value})`);
// })

// let user = document.querySelector("#user");

// user.addEventListener("change ", function() {
  
//     console.log("input changed");
//     console.log("final value = ", this.value)
// })

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value; 
})