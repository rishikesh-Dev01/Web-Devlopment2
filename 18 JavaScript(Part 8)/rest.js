// function sum(...args) {
//     // arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us : ", args[i]);
//     }
// }

// function sum (...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
   
// };



// DESTRUCTURING 

let names = ["tony", "bruc", "peter", "steve", "sua", "xyz"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

let [winner, runnerup, ...others] = names;


const student = {
    name: "Rishikesh pal",
    age: 20,
    class: 12,
    subject: ["hindi", "English", "Math", "Science"],
    username: "kumar@123",
    password: "abcd"
};

let {username, password} = student;
