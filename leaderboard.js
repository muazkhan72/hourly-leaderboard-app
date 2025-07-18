const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find().sort({ fire: -1 });
    res.json(users);
});

router.post('/add', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: 'User added successfully' });
});

module.exports = router;