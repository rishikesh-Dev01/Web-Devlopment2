const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successfuly");

    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);

// User.deleteOne({name: "Adam"})
//     .then((res) => {
//         console.log(res)
//   }) 
//   .catch((err) => {
//     console.log(err);
    
// })


// User.deleteMany({age: 26})
//     .then((res) => {
//         console.log(res)
//   }) 
//   .catch((err) => {
//     console.log(err);
    
// })

User.findByIdAndDelete('6a45147e976ddb3042c3a20d')
    .then((res) => {
        console.log(res)
  }) 
  .catch((err) => {
    console.log(err);
    
})

// User.updateOne({name: "rohit"}, {age: 49})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
        
//     })

// User.updateMany({age: {$gt: 48}}, {age: 55})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
        
//     })


// User.findOneAndUpdate({name: "rahul"}, {age:30}, {new: true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
        
//     })

// User.find({age: {$gt: 30}})
// User.findOne({_id:"6a45147e976ddb3042c3a20d"})
// .then((res) => {
//       console.log(res[0].name);
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.findById("6a45147e976ddb3042c3a20d")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "rahul", email:"rahul@gmail.com", age: 23},
//     {name: "rohit", email:"rohit@gmail.com", age: 22},
//     {name: "tony", email:"tony@gmail.com", age: 26},
// ]).then((res) => {
//     console.log(res);
    
// });

// const user1 = new User ( {
//     name: "Adam",
//     email: "adam@yano.in",
//     age: 38,
// });

// user1.save()