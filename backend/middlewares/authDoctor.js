import jwt from 'jsonwebtoken'


//Doctor authentication middleware
const authDoctor = async (req,res,next)=>{
    try{
        const { dtoken } = req.headers
        if(!dtoken){
            return res.json({success:false, message:"not authorized login again"})
        }
        //we'll  Decoded token and get our email and password 
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
        req.docId =  token_decode.id
        next();

    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}



export default authDoctor