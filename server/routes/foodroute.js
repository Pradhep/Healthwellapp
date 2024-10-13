import express from 'express';
import foodcontroller from '../controllers/foodcontroller.js'

const router= express.Router()

router.post('/createNutritions',foodcontroller.createfoodlog)
router.get('/getAllNutritions',foodcontroller.getAllFood)
router.get('/getNutritions',foodcontroller.getFood)

export default router