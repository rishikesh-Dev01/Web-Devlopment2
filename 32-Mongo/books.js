const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successfuly");

    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLenght: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("6a453c7e82f99ee1a5e89633", {price: -500}, {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.category);
    })

// let book1 = new Book ({
//     title: "Marvel comics v2", 
//     price: "699",
//     genre: ["comics", "superheroes", "fiction"]
// });

// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });