const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
async function initialize(passport,getUser,getUserById) {
    const authenticateUser = async(username, password, done) => {
        
        var user = await getUser(username);

        if (user == null || user == undefined) { return done(null, false, { message: 'No user found' }) }
        if(bcrypt.compareSync(password,user.password)){
            return done(null,user)
        }else{return done(null,false,{message:"Password is incorrect"})}
    }
    passport.use(new localStrategy({ usernameField: 'username',passwordField: 'password' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => { return  done(null,getUserById(id)) })
}
module.exports = initialize;