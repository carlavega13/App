const { User } = require("../../db");
//
const passCredits = async (info) => {
  try {
    if(info.type=="add"){
      const updatedUser = await User.update(
        { credits:Number(info.credits)+Number(info.clientCredits)},
        { where: { id: info.client } }
      );      

      return updatedUser
    }
    if(info.type=="delete"){
      const updatedUser = await User.update(
        { credits:Number(info.clientCredits)-Number(info.credits)},
        { where: { id: info.client } }
      );

      return updatedUser
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = passCredits;
