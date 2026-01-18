import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

const app=express()
const port= process.env.PORT || 8080;

//middleware
app.use(express.json())
app.use(cors()) //allow frontend connect to backend
connectDB()
connectCloudinary()


//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
//localhost:8080/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send(`API WORING ON great ${port}`)
})

app.listen(port,()=>{
    console.log(`Server started on ${port}` )
})

