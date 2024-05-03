const { User } = require("../../db");
//
const passCredits = async (info) => {
  try {
    const receiverClient = await User.findOne({
      where: { id: Number(info.client) },
    });
    await receiverClient.update({
      credits: receiverClient.credits + Number(info.credits),
    });

    return receiverClient;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = passCredits;
