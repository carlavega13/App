const forgetPasswordController = require("../../../Controllers/Users/postControllers/forgetPasswordController")

const forgetPassword=async(req,res)=>{
try {
    const response=await  forgetPasswordController(req.body)
    res.status(200).json(response)
} catch (error) {

    res.status(200).json(error.message)
}
}

module.exports=forgetPassword