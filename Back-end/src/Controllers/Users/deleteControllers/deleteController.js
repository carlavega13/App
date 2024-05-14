const {User}=require("../../../db")
const deleteController=async(id)=>{
try {
    const de=await User.destroy({where:{id:id}})
    return de
} catch (error) {
    console.log(error.message);
    throw new Error(error)
}
}
module.exports=deleteController