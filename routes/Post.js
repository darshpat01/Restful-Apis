const express = require('express');
const { findByIdAndUpdate } = require('../models/user.js');
const User = require('../models/user.js');
const router = express.Router();




//all users

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }

})



//specific user

router.get('/:id', async (req, res) => {
    try {
        const specificuser = await User.findById(req.params.id);
        res.json(specificuser);
    } catch (err) {
        res.json({ message: err });
    }
})


// create user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        phone: req.body.phone,
        email: req.body.email
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
})

//delete user
router.delete('/:id', async (req, res) => {

    try {
        const removedUser = await User.remove({ _id: req.params.id });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
})


//update
router.patch('/:id', async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { name: req.body.name });
        //$set: { name: req.body.name }
        res.json(updateUser);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;