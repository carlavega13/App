const { Transaction, User } = require("../../../db");
const allTransactions = async (id) => {
  try {
    const response = await Transaction.findAll({
      where: { admin_id: id },
      include: [
        {
          model: User,
          as: "User",
          attributes: { exclude: ["password"] },
        },
        {
          model: User,
          as: "Admin",
          attributes: { exclude: ["password"] },
        },
      ],
    });
    if (response.length == 0) {
      return "No tienes transacciones realizadas.";
    }
    return response;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = allTransactions;
