const loginController = require("../../Controllers/Users/loginController")


const postLogin=async(req,res)=>{
try {
    const response=await loginController(req.body)
    res.status(200).json(response)
} catch (error) {
    res.status(400).json(error.message)
}
}
module.exports=postLogin