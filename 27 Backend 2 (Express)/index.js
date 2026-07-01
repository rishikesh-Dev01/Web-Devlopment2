const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port,() => {
    console.log(`This is lestening on port ${port}`);
} );

// app.get("/", (req , res) => {
//     res.send("you conected root path");
// });

// app.get("/apple", (req , res) => {
//     res.send("you conected apple root path");
// });

// app.get("/orange", (req , res) => {
//     res.send("you conected orange root path");
// });

// app.get("/*", (req, res) => {
//     res.send("This path does not exits")

// });

// app.post("/", (req, res) => {
//     res.send("You send a post request")

// });

// app.use((req, res) => {
//     console.log("request received")
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><ul>";
//     res.send(code);
// });


app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/Search", (req, res) => {
    let {q} = req.query;
    res.send(`search result for query: $ `);
});