
// Guessing Game : 
    // User enter man number & then tries to guess a random  generated number between 1 to max. 

let max = prompt("Enter max number");
// console.log(max);

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("you are quit")
        break;
    }
    if(guess == random) {
        console.log("You are right! congrats! random number was ", random);
        break;
    } else if(guess < random) {
        guess = prompt(" hint : Your guess was too small. Please try again");
    } else {
        guess = prompt(" hint : Your guess was too large. Please try again");
    }
    
    // else {
    //    guess = prompt("Your guess was wrong! Please try again");
    // }
}