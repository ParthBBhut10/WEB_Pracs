const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/input.html")
})
app.post('/book', (req, res) => {

    var name = req.body.name;
    var ibin = req.body.ibin;
    res.send("Name of the book: " + name + " <br> IBIN no of book: " + ibin)
    console.log("User name = " + name + ", password is " + ibin);

})

app.listen(3000)