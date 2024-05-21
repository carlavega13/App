const allTransactions = require("../../../Controllers/Transactions/getTransactions/allTransactions")

const getAllTransactions=async(req,res)=>{
try {
    const response =await allTransactions(req.params.id)
    res.status(200).json(response)
} catch (error) {
    res.status(400).json(error.message)
}
}
module.exports=getAllTransactions