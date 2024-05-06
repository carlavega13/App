const oneUser = require("../../../Controllers/Users/getControllers/oneUser")

const getOneUser=async(req,res)=>{
    try {
        const response=await oneUser(req.params.id)
        res.status(200).json(response)
    } catch (error) {
        res.status(200).json(error.message)
    }
}
module.exports=getOneUser