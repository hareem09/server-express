const express = require('express');  
const app = express();  

app.use(function(req, res, next) {  
    console.log(`Request ${req.method} ${req.url}`);
    next()
});



app.get('/', function(req, res) {
    res.send('Welcome to the Home Page');
    console.log('Home one')
});
app.get('/about', function(req, res) {
    res.send('Welcome to the About Page ');
    console.log('about one')
});
app.get('/contact', function(req, res) {
    res.send('Contact us at contact@tfttrainings.com');
    console.log('contact one')
});
app.get('/services', function(req, res) {
    res.send('We offer web development, automation testing, and more!');
    console.log('services one')
});

app.get("/error", (req, res, next) => {
   return next(new Error("This is a error!"));
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal server error!');
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
