const { User } = require("../../db");
const bcrypt = require("bcryptjs");
//
const loginController = async (user) => {
  try {
    const userLogging = await User.findOne({ where: { email: user.email } });
    if (!userLogging) {
      throw new Error("No hay cuenta asociada con estas credenciales.");
    }
    if (await bcrypt.compare(user.password, userLogging.password)) {
      return userLogging;
    }
    throw new Error("Contraseña incorrecta.");
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = loginController;
