

const express = require('express');

const upload = require('../middleware/file_upload');
const path = require('path')
const userController = require('../controllers/user');
const passport = require('passport');

const imageUpload = upload.single('image');

let router = new express.Router();




router.get('/', async (req, res) => {

    await res.sendFile(path.resolve('pages/index.html'))
})

router.get('/signup', async (req, res) => {
    res.cookie('_csrf', res.cookie.val, { httpOnly: true, maxAge: 14 * 24 * 3600000 })
    res.set('csrfToken', req.csrfToken())
    await res.sendFile(path.resolve('pages/signup.html'), { 'csrfToken': req.csrfToken() })
});
router.post('/signup',  userController.registerUser);

router.post('/signin', userController.passportLogin );
router.get('/me',userController.me);
router.post('/me',userController.updateMe);
router.post('/logout', userController.logOut);

module.exports = router;