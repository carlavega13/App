const { User } = require("../../../db");
const recoveryToken = require("../../../utils/recoveryToken");
const htmlSendRecoveryCode = require("../../sendGridControllers/htmlSendRecoveryCode");
const postMailController = require("../../sendGridControllers/postMailController");
const forgetPasswordController = async (info) => {
  try {
    const user = await User.findOne({ where: { email: info.email } });
    if (user) {
      const token = recoveryToken();
      const text = htmlSendRecoveryCode(token);
      await postMailController({
        to: info.email,
        subject: "Recupera tu contraseña",
        text: text,
      });

      return token;
    } else {
      throw Error("No hay usuario con esas credenciales.")
    }
  } catch (error) {
    throw Error(error.message)
  }
};

module.exports = forgetPasswordController;
