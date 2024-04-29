const { User } = require("../../../db");
const axios = require("axios");
const getUserForDomain = async (domain) => {
  try {
    const admins = await User.findAll({
      where: {
        rol: "administrador",
        isSuperAdmin: true,
      },
    });

    for (let i = 0; i < admins.length; i++) {
      let res = await axios.get(
        `${domain}login/token.php?username=${admins[i].username}&password=${admins[i].password}&service=moodle_mobile_app`
      );

      if (res.data.token) {
        return true;
      }
    }

    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getUserForDomain;
