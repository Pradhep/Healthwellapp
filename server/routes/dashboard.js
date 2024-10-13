import express from 'express';
import Dashboard from '../controllers/dashboard.js'

const router= express.Router()

router.get('/getdata',Dashboard.getdata)

export default router