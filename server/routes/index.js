import express from 'express'
import exerciseroute from './exerciseroute.js'
import foodroute from './foodroute.js'
import UsersRoutes from './users.js'
import Dashboardroutes from './dashboard.js'
const router = express.Router()

router.get('/',(req,res)=>res.status(200).send(`<h1>Healthwell app Backend</h1><p>The application is running successfully</p>`))

router.use('/Exercises',exerciseroute)
router.use('/Nutritions',foodroute)
router.use('/user',UsersRoutes)
router.use('/Dashboard',Dashboardroutes)



export default router