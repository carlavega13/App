const changeRol=require("../Controllers/usersControlllers/changeRol")

const postChangeRol=async(req,res)=>{
    try {
        const response=await changeRol(req.body)
        res.status(200).json(response)
     } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports=postChangeRol