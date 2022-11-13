const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use("/static", express.static('static'));  // For serving static files 
app.use(express.urlencoded())

//app.set('view engine', 'pug');  // Set the template engin as pug
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/views'));  // Set the views directory

app.get('/', (req, res) => {
    const params = {  }
    res.status(200).render('home.html', params);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});