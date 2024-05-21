
const {Transaction}=require("../../../db")
const allTransactions=async(id)=>{
try {
    console.log(id);
    const response = await Transaction.findAll({where:{admin_id:id}})

    return response
} catch (error) {
    console.log(error.message);
    throw new Error(error.message)
}
}
module.exports=allTransactions