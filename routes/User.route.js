const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Routes de /users
// Read
router.get('/', async (req, res) => {
    const users = await User.find();

    if(users.length === 0){
        res.status(404);
    }

    res.json(users);

});

// Create
router.post('/', async (req, res) => {
    const user = req.body;
    const resp = await User().create(user);
    res.status(201).json(resp);
})

module.exports = router;
