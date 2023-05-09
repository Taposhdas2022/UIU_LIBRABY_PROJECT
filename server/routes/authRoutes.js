const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Book = mongoose.model("Book");
const jwt = require('jsonwebtoken');
 
require('dotenv').config();

const bcrypt = require('bcrypt');


router.post('/Registration', (req, res) => {
    console.log('sent by client - ', req.body);
    const { name,id, email, phoneNumber, password, conPassword } = req.body;
    if (!name || !id || !email || !phoneNumber || !password || !conPassword) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    User.findOne({ email: email })
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
            const user = new User({
                name,
                id,
                email,
                phoneNumber,
                password,
                conPassword,
            })

            try {
                await user.save();
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                res.send({ token });
            }
            catch (err) {
                console.log(err);
            }
        })
})


router.post('/LogIn', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" });
    }
    const savedUser = await User.findOne({ email: email })

    if (!savedUser) {
        return res.status(422).json({ error: "Invalid Account" });
    }

    try {
        bcrypt.compare(password, savedUser.password, (err, result) => {
            if (result) {
                console.log("Log in complete");
                const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
                res.send({ token });
            }
            else {
                console.log('Password does not match');
                return res.status(422).json({ error: "Invalid Account" });
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})
router.post('/addBook', (req, res) => {
    console.log('sent by client - ', req.body);
    const { bookName, departmentName } = req.body;
    if (!bookName || departmentName) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    Book.findOne({ bookName: bookName })
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
            const Book = new Book({
                bookName,
                departmentName,
            })

            try {
                await book.save();
                const token = jwt.sign({ _id: book._id }, process.env.JWT_SECRET);
                res.send({ token });
            }
            catch (err) {
                console.log(err);
            }
        })
})
router.delete('/deleteBook', (req, res) => {
    console.log('sent by client - ', req.body);
    const { bookName, departmentName } = req.body;
    if (!bookName || departmentName) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    Book.findOne({ bookName: bookName })
        .then(async (savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" });
            }
            const Book = new Book({
                bookName,
                departmentName,
            })

            try {
                await book.save();
                const token = jwt.sign({ _id: book._id }, process.env.JWT_SECRET);
                res.send({ token });
            }
            catch (err) {
                console.log(err);
            }
        })
})

module.exports = router;