const passCredits = require("../../../Controllers/Credits/passCredits")


const postCredits=async(req,res)=>{
try {
    const response=await passCredits(req.body) 
    res.status(200).json(response)
} catch (error) {
    res.status(400).json(error.message)
}
}
module.exports=postCredits