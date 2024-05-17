const createUser = require("../../../Controllers/Users/postControllers/createUser")

//
const postUser=async(req,res)=>{
    try {
        const response=await createUser(req.body)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
}
//
module.exports=postUser