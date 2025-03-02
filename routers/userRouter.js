
import express from 'express'
const userRouter = express.Router()


import {postContactData} from '../controller/userController.js'


userRouter.post('/enquiry',postContactData)
userRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

export default userRouter












