let favMovie = "avatar";
let guess = prompt("guess my favorite movie");

while(guess != favMovie) {
    if(guess == "quit") {
        console.log("You quit");
        break;
    }

    guess = prompt("guess wrong. please try again");
}

if(guess == favMovie) {
    console.log("congrats!");
}
//  else {
//     console.log("you quit")
// } 