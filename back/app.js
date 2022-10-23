const dotenv = require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const path = require('path')
const mongoose = require('mongoose')
var MongoStore = require('connect-mongo');
const passport = require('passport');
const flash = require('connect-flash');
const userRoute = require('./router/userRoutes')
const productRoute = require('./router/productRoutes');
const initializePassport = require("./utilities/passport-config")
const User = require('./schemas/user/userSchema')
const Payment = require('./router/stripe');
findByUsername = (username) => {
    User.find({
        $or: [
            { username },
            { 'email': username },

        ]
    }, function (err, docs) {
        if (!err) return docs[0];
    });
}


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}
var app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      methods:'POST,GET,DELETE,PATCH',
      origin: 'http://localhost:3000',
      credentials: true,
      allowCredentials: true
    })
  );
app.use(session({
    name: 'sId',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SES_SECRET,
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        collectionName: 'sessions',

    }),
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
       
        
    }
}));
initializePassport(passport, async (username) => {
    docs = await User.find({
        $or: [
            { username },
            { 'email': username },

        ]
    });
    return docs[0];
},async (id) => {
  var user = await User.findById(id);
  return user;
})
if (process.env.STATE === 'production') {
    app.set('trust proxy', 1);
    var isproduction = true
} else { var isproduction = false; }

app.use(passport.initialize())
app.use(passport.session({sameSite:'none',httpOnly:false}));
app.use('/public', express.static(path.resolve('public')));
app.use('/pages',express.static(path.resolve('pages')))
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);
app.use(productRoute);
app.use(Payment);




module.exports = app;

