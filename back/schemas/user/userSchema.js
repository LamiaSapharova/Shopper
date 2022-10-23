const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    username: {type: String ,},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    telephone: {type: Number, },
    DofB: {type: Date, },
    image: String,
    gender: {type: String,},
    address: {
        country: String,
        city: String,
        address_line1: String,
        address_line2: String,
        postal_code: Number,
    },
},{timestamps: true});
userSchema.plugin(uniqueValidator);
userSchema.pre('save', async function (next) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
    next();
  });
User = mongoose.model('users',userSchema)
module.exports  = User

