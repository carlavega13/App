const { User, Transaction } = require("../../db");
//
const passCredits = async (info) => {
  try {
    console.log(info);
    if (info.type == "add") {
      const updatedUser = await User.update(
        { credits: Number(info.credits) + Number(info.clientCredits) },
        { where: { id: info.client } }
      );
      await Transaction.create({
        user_id: info.client,
        admin_id: info.admin,
        credits: info.credits,
        transaction_type: "add",
      });

      return updatedUser;
    }
    if (info.type == "subtract") {
      const updatedUser = await User.update(
        { credits: Number(info.clientCredits) - Number(info.credits) },

        { where: { id: info.client } }
      );
      await Transaction.create({
        user_id: info.client,
        admin_id: info.admin,
        credits: info.credits,
        transaction_type: "subtract",
      });

      return updatedUser;
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = passCredits;
