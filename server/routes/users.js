import express from 'express'
import UsersController from '../controllers/users.js'
import verify from '../middleware/verify.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

const router = express.Router()

router.get('/getAllUsers',verify,verifyAdmin,UsersController.getAllUsers)
router.post('/login',UsersController.login)
router.post('/signup',UsersController.signup)
router.post('/updateprofile',UsersController.UpdateProfile)

export default router

