import express from 'express';
import { genres } from './moviesData';
import uniqid from 'uniqid'

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(genres);
});

export default router;