
// Create a button on the page using javaScript. Add an Event Listener to the button that change the button's color to green when it is clicked. 

// let btn = document.createElement("button");

// btn.innerText = "Change color";

// document.body.append(btn);

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";
// })

// Qs3.Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters froma a-z, A-Z and space (all other characters should not be detected). When ever the user inputs the ir name, the input should be dynamically visible inside the heading. [Please note that no other character a part from the allowed characters should be visible in the heading

let input = document.querySelector("#nameInput");
let h2 = document.querySelector("#heading");

input.addEventListener("input", function() {
    let filteredValue = input.value.replace(/[^a-zA-Z]/g, "");

    input.value = filteredValue;

    heading.innerText =  filteredValue;
});