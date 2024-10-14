import exsmodel from '../models/exercisemodel.js'
import { randString } from "../common/helper.js";

const createExslog = async(req,res)=>{
    try {
        req.body.exsid = randString(8)
        req.body.userId= req.body.formDataWithUser.userId;
        req.body.exstitle= req.body.formDataWithUser.name;
        req.body.exsduration= req.body.formDataWithUser.duration;
        req.body.exscalburned= req.body.formDataWithUser.calburned;

        await exsmodel.create(req.body)
        return res.status(201).send({
            message:'Exercise Log created '
        })
    } catch (error) {
        return res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const getAllExes = async (req,res)=>{
    try {
     let allexsdata = await exsmodel.find({userId:req.body.formDataWithUser.userId},{exsid:1, userId:1, exstitle:1, exsduration:1,exscalburned:1, _id:0})
     return res.status(200).send({
         message:"All Exercises Data Fetch Successfull",
         data:allexsdata
     })
    } catch (error) {
        return res.status(500).send({
             message:error.message || "Internal Server Error",
             error
         })
    }
 }

 const getExes = async (req,res)=>{
    try {
        let exsdata = await exsmodel.findOne({exsid:req.body.exsid},{exsid:1, userId:1, exstitle:1, exsduration:1,exscalburned:1, _id:0})
        return res.status(200).send({
         message:"Exercise Data Updated Successfully",
         data:exsdata
     })
    } catch (error) {
        return res.status(500).send({
             message:error.message || "Internal Server Error",
             error
         })
    }
 }

export default {createExslog,getAllExes,getExes}