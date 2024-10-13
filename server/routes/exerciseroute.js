import express from 'express';
import exercisecontroller from '../controllers/exercisecontroller.js'

const router= express.Router()

//router.post('api/Exercises/createExslog',exercisecontroller.createExslog)
router.post('/createExslog',exercisecontroller.createExslog)
//http://localhost:5000/exs/exscreate
export default router