const dotenv = require('dotenv');
dotenv.config();
const express = require ('express')

const app = express();

const mongoose = require('mongoose')

async function connectDb() {
    await mongoose.connect(process.env.MONGOURL)
    .then(() => {
        console.log('connect DB');
        
    })
}

connectDb();