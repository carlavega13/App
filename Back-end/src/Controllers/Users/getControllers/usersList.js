const { User } = require("../../../db");
const { Sequelize } = require("sequelize");
//
const usersList = async (id) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      where: { id: { [Sequelize.Op.ne]: id } },
    });

    if (users.length == 0) {
      return "No hay usuarios para mostrar";
    }
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = usersList;
