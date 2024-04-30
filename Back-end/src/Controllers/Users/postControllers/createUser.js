const {User}=require("../../../db")
const bcrypt = require('bcryptjs');
//
const createUser=async(user)=>{
    try {
const userCreated=await User.create({
    ...user,
password:await bcrypt.hash(user.password, 10)
})
return userCreated
    } catch (error) {
        throw new Error(error.message)
    }
}
//
module.exports=createUser