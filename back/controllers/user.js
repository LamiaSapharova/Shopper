const User = require('../schemas/user/userSchema');
const mongoose = require('mongoose');
const passport = require('passport');
const Cart = require('../schemas/user/userCartScahema');
const bcrypt = require('bcrypt');
const chHead = async function (req, res, next) {
  req.headers['csrf-token'] = req.body.csrf;
  next()
}

const registerUser = async function (req, res) {

  const { first_name, last_name, password, email } = req.body;

  const user = new User({
    first_name,
    last_name,
    password,
    email,
  });
  if (req.file) {
    const { path } = req.file;
    user.image = path
  };

  try {
    await user.save(function (e) {
      if (e?.name === "ValidationError") {
        let errors = {};

        Object.keys(e.errors).forEach((key) => {
          errors[key] = e.errors[key].message;
        });
        return res.status(400).send(errors);
      }


      if (e) {
        console.log(e)
        res.status(504).send('something get bad');
        return;
      }
      res.status(201).send();
    });
  }
  catch (e) {
    console.log(e)
  }
};
const logOut = function (req, res) {
  req.logOut(function (err) {
    if (err) { return next(err); }
    console.log(req.session);
    return res.status(200).send();
  });
}
const passportLogin = function (req, res, next) {
  passport.authenticate('local',  function (err, user, info) {
    if (err) { return next(err); } //error exception

    // user will be set to false, if not authenticated
    if (!user) {
      res.status(401).json(info); //info contains the error message
    } else {
      // if user authenticated maintain the session
      let cart = req.session.cart || [];

      
      req.logIn(user, async function () {
        data = {
          username: user.username,
          email: user.email,
          fulname: user.first_name + user.last_name
        };
        req.session.user = {
          username: user.username,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          id: user._id,
        }
        let myfunc = async (i) => {
          if (i >= cart.length) {
            return;
          }
          cart[i].product_id = mongoose.Types.ObjectId(cart[i].product_id);
          let docs = await Cart.findOneAndUpdate({user_id:req.session.passport.user, product_id: cart[i].product_id, size: cart[i].size, color: cart[i].color }, [{
            $addFields: {
              count: { $cond: { if: { $ne: ['$count', null] }, then: { $sum: ['$count', cart[i].count] }, else: cart[i].count } }
            }
          }], { upsert: true, new: true });
          myfunc(i + 1);
        }
        await myfunc(0);
        res.send(data);
        // do whatever here on successful login
      })
    }
  })(req, res, next);
}
const me = async (req, res) => {
  if (req.isAuthenticated()) {
    let user = await req.user;
    user = {
      email: user.email,
      first_name: user.first_name,
      last_name:user.last_name,
      DofB: user.DofB
    }
    
    return res.status(200).send(user)
  }
  else return res.status(401).send();
}

async function updateMe(req,res){
  let {first_name,last_name,cPassword,password,DofB} = req.body;
  let user = await req.user;
  DofB = DofB.split('.');
  DofB = new Date(DofB[2],DofB[1],DofB[0]);
  if(bcrypt.compareSync(cPassword,user.password)){
    password = bcrypt.hashSync(password,10);
    await User.findOneAndUpdate({_id:user._id},{
      first_name,last_name,password,DofB
    },{new:true});
    user = await User.findById(mongoose.Types.ObjectId(req.session.passport.user));
    res.status(200).send();
  }else{
    return res.status(401).send();
  }


}
module.exports = {
  me,
  updateMe,
  passportLogin,
  logOut,
  registerUser,
  chHead,
};

