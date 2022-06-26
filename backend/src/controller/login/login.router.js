const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

// post
router.post('/', async (req, res, next) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.sendStatus(401);
    }

    user.password = 'test789';
    await user.save();

    const valid = user.verifyPasswordSync(password);
    if (valid) {
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            role: 1,
        }, 'egynagyontitkosszöveg', {
            expiresIn: '1h',
        });

        res.json({ 
            success: true, 
            accessToken, 
            user: {...user._doc, password: ''},
        });
    } else {
        return res.sendStatus(401);
    }
});

module.exports = router;