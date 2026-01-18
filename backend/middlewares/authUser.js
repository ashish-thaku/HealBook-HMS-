import jwt from 'jsonwebtoken'

 
//admin authentication middleware
const authUser = async (req,res,next)=>{
    try{
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:"not authorized login again"})
        }
        //we'll  Decoded token and get our email and passwordx  
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = {id: token_decode.id};
        next();

    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}



export default authUser