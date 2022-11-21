import express from 'express';
import { genres } from './moviesData';
import Genre from './genreModel';
import uniqid from 'uniqid'

const router = express.Router(); 

router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

export default router;