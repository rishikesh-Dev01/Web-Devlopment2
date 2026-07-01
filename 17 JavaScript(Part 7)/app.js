
const student2 = {
    name: "rishikesh",
    age: 21,
    Eng: 93,
    Math: 95,
    Phy: 97,
    getAvg() {
        let avg = (this.Eng + this.Math + this.Phy) / 3;
        console.log(`${this.name} got avg marks =  ${avg}`);
    }
}



// Arrow Function

const sum = (a,b) => {
    console.log(a + b);
};

const mul =  (a,b) => (a * b);

// Set time out function

// console.log("hi there!")

// setTimeout(() => {
//     console.log("Apna collage");
// }, 4000);

// console.log("Welcome to");

// set interval funtion

 let id = setInterval(() => {
    console.log("Apna collage");
}, 2000);

clearInterval(id);



// This with Arrow Functions

const student = {
    name: "Rishi",
    marks: 95,
    prop: this, // global scope
    getName: function() {
        console.log(this);
        return this.name;
    },

    getMarks: function() {
        console.log(this); // Parent's scope -> window
        return this.marks;
    },

    getInfo1: function()  {
        setTimeout( () => {
            console.log(this);// student
        }, 2000);
    },


    getInfo2: function()  {
        setTimeout( function() {
            console.log(this); // window
        }, 2000);
    }

};



// Practice Question 

const squre = (n) => n*n ;

console.log(squre(4));


let i2d = setInterval( () => {
    console.log("Hello World's");
}, 2000);

setTimeout( () => {
    clearInterval(i2d);
    console.log("clear interval ran");
}, 10000);


