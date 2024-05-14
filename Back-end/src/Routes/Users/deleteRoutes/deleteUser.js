const deleteController = require("../../../Controllers/Users/deleteControllers/deleteController")

const deleteUser=async(req,res)=>{
    try {
        const response=await deleteController(req.params.id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.messge)
    }
}
module.exports=deleteUser