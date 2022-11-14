import express from 'express';
import { genres } from './moviesData';
import uniqid from 'uniqid'

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(genres);
});

// // Get movie details
// router.get('/', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (movieDetails.id == id) {
//         res.status(200).json(movieDetails);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });

export default router;