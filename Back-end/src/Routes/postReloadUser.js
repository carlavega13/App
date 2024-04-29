const reloadUser = require("../Controllers/reloadUser");

const postReloadUser=async(req,res)=>{
try {
    const response=await reloadUser(req.body)

    res.status(200).json(response)
} catch (error) {
    res.status(200).json(error.message)
}
}
module.exports=postReloadUser