
//DATABASE
require('./src/db/db')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//passport
const passport = require('passport');

const user = require('./src/routes/api/user/user');
const product = require('./src/routes/api/products/produts')
//cors is use to data send
var cors = require('cors')

//bodyParsre

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use cors
app.use(cors())
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

app.use(express.static('./'));
app.use(express.static('./client/build/'))
app.listen(port, () => {

    console.log(`servsr is running ${port}`)
})



















// Desgin for makakin website
// https://colorlib.com/preview/#minishop

// https://www.fiverr.com/muhammadhama662?