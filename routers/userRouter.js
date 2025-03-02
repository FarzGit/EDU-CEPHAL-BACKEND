
import express from 'express'
const userRouter = express.Router()


import {postContactData,postEnrollContactData} from '../controller/userController.js'


userRouter.post('/contact',postContactData)
userRouter.post('/enroll',postEnrollContactData)

userRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

export default userRouter












