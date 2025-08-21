const User = require('../models/User.js');

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

module.exports = {
    registerUser,
};