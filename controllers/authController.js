const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

async function registerUser(req, res) {
    const { firstName, lastName, username, password } = req.body;

    try {
        const duplicate = await User.find({ username });
        if (duplicate.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const user = new User({ firstName, lastName, username, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: error.message });
    }
}

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        let token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        let finalData = {
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token
        }
        res.send(finalData);
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    registerUser,
    loginUser
};