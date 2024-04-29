const postSuperAdmin = require("../../Controllers/dbControllers/postSuperAdmin")

const createSuperAdmin=async(req,res)=>{
    try {
        const response=await postSuperAdmin(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports= createSuperAdmin