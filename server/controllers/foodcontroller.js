import foodmodel from '../models/foodmodel.js'
import { randString } from "../common/helper.js";

const createfoodlog = async(req,res)=>{
    try {

        req.body.foodid = randString(7)
        req.body.userId= req.body.formDataWithUser.userId;
        req.body.foodtitle= req.body.formDataWithUser.name;
        req.body.foodcal= req.body.formDataWithUser.calories;
        req.body.foodmicront= req.body.formDataWithUser.micro;
        req.body.foodmacront= req.body.formDataWithUser.macro;

        await foodmodel.create(req.body)
        return res.status(201).send({
            message:'Nutrition Log created '
        })
    } catch (error) {
        return res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const getAllFood = async (req,res)=>{
    try {
     let allfooddata = await foodmodel.find({userId:req.body.formDataWithUser.userId},{foodid:1, userId:1, foodtitle:1, foodcal:1,foodmicrnt:1,foodmacrnt:1, _id:0})
     return res.status(200).send({
         message:"All Food Data Fetch Successfull",
         data:allfooddata
     })
    } catch (error) {
        return res.status(500).send({
             message:error.message || "Internal Server Error",
             error
         })
    }
 }

 const getFood = async (req,res)=>{
    try {
     let fooddata = await foodmodel.find({foodid:req.body.foodid},{foodid:1, userId:1, foodtitle:1, foodcal:1,foodmicrnt:1,foodmacrnt:1, _id:0})
     return res.status(200).send({
         message:"Food Data Updated Successfully",
         data:fooddata
     })
    } catch (error) {
        return res.status(500).send({
             message:error.message || "Internal Server Error",
             error
         })
    }
 }

export default{createfoodlog,getAllFood,getFood}