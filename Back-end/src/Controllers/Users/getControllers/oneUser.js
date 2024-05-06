const {User}=require("../../../db")
const oneUser=async(id)=>{
try {
    const user=await User.findOne({where:{id:Number(id)}})
   return user
} catch (error) {
    
}
}
module.exports=oneUser