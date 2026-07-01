// console.log("Rishi!")
// let a = 10;
// let b = 20;

// console.log("sum is : ", a + b);

// let pancilPrice = 10;
// let eresor = 5;

// let output = "The total price is :" + (pancilPrice + eresor) + " Rupees. " ;

// let output = `The total price is : ${pancilPrice + eresor} Rupees.`;
// console.log( `The total price is : ${pancilPrice + eresor} Rupees.`);

// let a = 10;
// let b = 5;

// b = a; 

// console.log(b)

//  CONDITIONAL STATEMENTS 

// console.log("before my if statement")
// let age = 24;
// if(age >= 18){
//     console.log("you can vote");
// }
// if(age < 18) {
//     console.log("you can't vote");
// }

// console.log("after my if statement")


// let color = "green";

// // Trafic light system 
// if(color === "red") {
//     console.log("we can stop! light color is red");
// }
// if(color === "yellow") {
//     console.log("we can slow down. light color is yellow");
// }
// if(color === "green") {
//     console.log("we can Go. light color is green")
// }

// let marks = 70;

// if(marks >= 80) {
//     console.log("A+");
// } else if(marks >= 60) {
//     console.log("A");
// } else if (marks >= 33) {
//     console.log("B");
// } else if (marks < 33) {
//     console.log("F");
// }


// Create a system to calculate popcorn prices based on the size austomerasked for : 

// let size = "XL"

// if(size === "XL"){
//     console.log(" Price is Rs. 250");
// } else if(size === "L") {
//     console.log(" Price is Rs. 200");
// } else if(size === "M") {
//     console.log(" Price is Rs. 100");
// } else {
//      console.log(" Price is Rs. 50");
// }


// let num = 12;

// if((num % 3 === 0) && (num + 1 == 15) || (num - 1 == 11)) {
//     console.log("Safe!");
// } else {
//     console.log("not safe");
// }


// let str = "apple";

// if((str[0] === "a") && (str.length > 3)) {
//     console.log("good string");
// } else {
//     console.log("not good string");
// }


// let color = "Yellow";

// switch(color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "Yellow":
//         console.log("Slow Down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken light");

// }


// Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7

// let weekDay = "7"

// switch(weekDay) {
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Satarday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("over week")
// }


// let firstName = prompt("Enter first Name : ")
// let lastName = prompt("Enter last name : ")

// let msg = "welcom" + " " + firstName + " " + lastName ;

// alert(msg);

// let num = 20;

// if(num % 10 == 0) {
//     console.log("good");
// } else {
//     console.log("Bad");
// }

// let name = prompt("Enter name : ");
// let age = prompt("Enter age : ");

// let full = name + " " + "is"+ " " + age + " " + "years old";

// alert(full);


// let quarter = "quarter4";

// switch(quarter) {
//     case "quarter1":
//         console.log("January", "February", "march");
//         break;
//     case "quarter2":
//         console.log("April", "May", "Jun");
//         break;
//     case "quarter3":
//         console.log("July", "August", "September");
//         break;
//     case "quarter4":
//         console.log("Otcubar", "November", "December");
//         break;
//     default:
//         console.log("End of year");
// }


let str = "apples";

if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("This is a golden str");
} else {
    console.log("This is not a golden str");
}

let a = "5";
let b = "18";
let c = "13";

if(a > b) {
    if(a > c) {
        console.log( a, "is largest");
    } else {
        console.log(c, "is largesest");
    }
} else {
    if(b > c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }
}