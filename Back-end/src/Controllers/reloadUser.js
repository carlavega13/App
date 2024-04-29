const { User, Domain } = require("../db");
const bcryptjs = require("bcryptjs");
const loginController = require("./loginController");
const reloadUser = async (user) => {
  try {
    const activeUrl = await Domain.findOne({ where: { isActive: true } });
    const userDB = await User.findOne({
      where: { username: user.username, domain: activeUrl.url },
    });

    if (bcryptjs.compareSync(userDB.password, user.hash)) {
      const res = await loginController({
        username: userDB.username,
        password: userDB.password,
      });
      return res;
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = reloadUser;
