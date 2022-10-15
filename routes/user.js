import express from 'express'
import {users, createUsers, loginUsers} from '../controllers/userController.js'
const router = express.Router()

router.get('/users', users)

router.post('/signup', createUsers)

router.post('/login', loginUsers)

export default router