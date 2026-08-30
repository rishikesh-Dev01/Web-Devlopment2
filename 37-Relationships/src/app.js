const express = require('express')
const userModel = require('./Models/users.schema')
const Order = require('./Models/order')
const Customer = require('./Models/customer')
const Users = require('./Models/post')

const app = express()
app.use(express.json())

const addUsers = async() => {
    let user1 = new userModel({
        username: 'sherlockolemes',
        addresses: [
            {
                location: '221B Baker Street',
                city: "London",
                 
            }
        ],
         
    });
    user1.addresses.push({location: 'P32 wallStareet', city: 'London'})
    let result = await user1.save();
    console.log(result);
    
}

// addUsers()


const addOrder = async() => {
    let res = await Order.insertMany([
        {item: 'samosa', price: 12},
        {item: 'Chips', price: 10},
        {item: 'Chocolate', price: 40}
    ]);
    console.log(res);
}

// addOrder() 

const addCustomer = async() => {
    let cust1 = new Customer({
        name: 'Rahul kumar',
    });

    let order1 = await Order.findOne({item: 'Chips'});
    let order2 = await Order.findOne({item: 'Chocolate'});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
    
} 

addCustomer()

// const addData = async() => {
//     let user1 = new Users.User({
//         username: 'Rahul kumar',
//         email: 'rahul@gmail.com',
//     });

//     let post1 = new Users.Post({
//         content: "hello world",
//         likes: 8
//     })

//     Users.Post.user = user1;

//     await user1.save();
//     await post1.save();
// }

const addData = async() => {
    let user = Users.User.findOne({username: 'RahulKumar'});

    let post2 = new Users.Post({
        content: "Bye Bye :) ",
        likes: 23,
    })

    Users.Post.user = user;

    // await user1.save();
    await post2.save();
}

// addData()

// Funtions
const findCustomer = async() => {
    let result  = await Customer.findOne({}).populate('orders');
    console.log(result);
}

const addCust = async() => {
    let newCust = new Customer({
        name: "karan Arjun"
    });

    let newOrder = new Order({
        item: 'Burger',
        price: 250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log('added new customer');
}

const delCust = async() => {
    let data = await Customer.findByIdAndDelete('6a87da75e2be69edbba04ee6');
    console.log(data);
}

// addCust()
delCust()

module.exports = app