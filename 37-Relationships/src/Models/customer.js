const mongoose = require('mongoose')
const Order = require('./order')

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// customerSchema.pre('findOneAndDelete', async() => {
//     console.log('PRE MIDDLEWARE');
    
// })

customerSchema.post('findOneAndDelete', async(customer) => {
     if(customer.orders.length) {
        let res = await  Order.deleteMany({_id: {$in: customer.orders}})
        console.log(res);
        
     }
    
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer