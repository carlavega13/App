const editUser = require("../../../Controllers/Users/putControlleres/editUser");

const putUser=async(req,res)=>{
    try {
        const response=await editUser(req.body)
        res.status(200).json(response)
        
    } catch (error) {
       res.status(400).json() 
    }
}
module.exports=putUser