import express from 'express';
const router = express.Router();
import { verifyToken } from '../utils/verfiyToken.js';
import { deleteAllNft, deleteNft, getAllNfts, getNft, likeNft, postNft, unlikeNft, updateNft } from '../controllers/nft.js';
// Get all blogs 
router.route('/find/all').get(getAllNfts)
// Get a blog by id
router.route('/find/:id').get(getNft)
// Post a blog
router.route('/post').post(verifyToken, postNft);
// Delete a blog
router.route('/delete/:id').delete(verifyToken, deleteNft);
// Delete all blogs
router.route('/all').delete(deleteAllNft);
// Update a blog
router.route('/update/:id').put(verifyToken, updateNft);
// Like a Nft
router.route('/like/:id').put(verifyToken,likeNft);
// Dislike a Nft
router.route('/dislike/:id').put(verifyToken,unlikeNft);

export default router;