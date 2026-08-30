const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    item: String,
    price: String
});


// orderSchema.pre('findOneAndDelete', async() => {
//     console.log('PRE MIDDLEWARE');
    
// })

// orderSchema.post('findOneAndDelete', async() => {
//     console.log('post MIDDLEWARE');
    
// })
 

const Order = mongoose.model('Order', orderSchema);


module.exports = Order