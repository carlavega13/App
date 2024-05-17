const { User } = require("../../db");
const bcrypt = require("bcryptjs");
//
const loginController = async (user) => {
  try {
    const userLogging = await User.findOne({ where: { email: user.email } });
    if (!userLogging) {
      throw new Error("No hay cuenta asociada con estas credenciales.");
    }
//     if (user.relog) {
// ;
//       if ( bcrypt.compareSync(userLogging.password, user.password)) {
//         console.log(userLogging);
//         return userLogging;
//       }
//     }
    if (await bcrypt.compare(user.password, userLogging.password)) {
      return userLogging;
    }
    throw new Error("Contraseña incorrecta.");
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = loginController;
