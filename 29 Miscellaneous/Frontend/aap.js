let arr = [1,2,3];

arr.sayHello = () => {
    console.log("hello! i am arr!")
};

// function personMaker(name, age) {
//     const person ={
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, name is ${this.name}!`);
//         }
//     }

//     return person
// }

// CONSTRUCTOR -> Doesn't return anything, & starts with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }

// Person.prototype.talk = function() {
//     console.log(`Hi, name is ${this.name}!`);
// }

// let p1 = new Person("odam", 23);
// let p2 = new Person("eve", 23);

// let p1 = personMaker("rishi", 23);
// let p2 = personMaker("alice", 25);

// gitHub clone link -> https://github.com/rishikesh-Dev01/Web-Devlopment-.git

class Person {
    constructor(name, age) {
         console.log("Person class constructor ");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, name is ${this.name}!`)
    }
}

// let p1 = new  Person("rishi", 23);
// let p2 =  new Person("alice", 25); 


// Inheritance 

class Student extends Person {
    constructor(name, age, marks) {
        console.log("Student class constructor ");
        super(name, age) // parent class constructor is being called 
        this.marks = marks ;
    }

}

// let stu1 = new Student("rishi", 23, 98)
// let stu2 = new Student("amit", 23, 85)
// let stu3 = new Student("anand", 23, 93)


class Teacher extends Person {
    constructor(name, age, Subject) {
        super(name, age) // parent class constructor is being called 
        this.Subject = Subject;
    }

}


class Mammal { // base class / Parent class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating")
    }
}

class Dog extends Mammal { // Child class
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff...");
    }
}

class Cat extends Mammal { // Child class
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow...");
    }
}