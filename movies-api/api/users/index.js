import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register
router.post('/', asyncHandler(async (req, res) => {
    if (req.query.action === 'register') {  //if action is 'register' then save to DB
        await User(req.body).save();
        res.status(201).json({
            code: 201,
            msg: 'Successful created new user.',
        });
    }
    else {  //NEW CODE!!!
        const user = await User.findByUserName(req.body.username);
        if (user.comparePassword(req.body.password)) {
            req.session.user = req.body.username;
            req.session.authenticated = true;
            res.status(200).json({
                success: true,
                token: "temporary-token"
              });
        } else {
            res.status(401).json('authentication failed');
        }
    }
}));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code: 200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

/// ... Code as Before
router.post('/:id/favourites', async (req, res) => {
    const newFavourite = req.body;
    if (newFavourite && newFavourite.id) {
        const user = await User.findById(req.params.id);
        if (user) {
            user.favourites.push(newFavourite);
            user.save();
            res.status(201).json({ code: 201, msg: "Added Favourite" });
        } else {
            res.status(404).json({ code: 404, msg: 'Unable to add favourites' });
        }
    }
});

router.get('/:id/favourites', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.status(200).json(user.favourites);
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find favourites' });
    }
});
export default router;