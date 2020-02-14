
//DATABASE
require('./src/db/db')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//passport
const passport = require('passport');

const user = require('./src/routes/api/user');
const product = require('./src/routes/api/products/produts')



//bodyParsre

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// passport Config
require('./src/config/passport')(passport)



//use Api routes
app.use('/api/users', user)
//porducts
app.use('/api/product',product)

const port = process.env.PORT || 8080;
app.listen(port, () => {

    console.log(`servsr is running ${port}`)
})