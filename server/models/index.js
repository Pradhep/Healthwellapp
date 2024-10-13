import 'dotenv/config'
import mongoose from 'mongoose'
const Mongodb_url = process.env.Mongodb_url
const Mongodb_db = process.env.Mongodb_db


const URL = `${Mongodb_url}/${Mongodb_db}`

mongoose.connect(URL)
.then(()=>console.log('MongoDB connected successfully'))
.catch(error=>console.log('MongoDB connection failed',error))

export  default mongoose