const express = require('express')
const expressError = require('./ExpressError')

const app = express()

// create utility Middleware
// logger

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next()
// })

const checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next()
    }
    throw new expressError(401,'ACCESS DENIED');
}

app.get('/api', checkToken, (req, res) => {
    res.send('data')
})

app.get('/err', (req, res) => {
    abck = abck
})

app.use((err, req, res, next) => {
    console.log('-----ERROR------'); 
    next(err)
})

app.get('/', (req, res) => {
    res.send("hi  i'm root ")
})

app.get('/random', (req, res) => {
    res.send("hi  i'm root ")
})


module.exports =  app