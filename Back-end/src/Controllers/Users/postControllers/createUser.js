const { User } = require("../../../db");
const bcrypt = require("bcryptjs");

//
const createUser = async (user) => {
  try {
    if (user.firstname && user.lastname) {
      user.fullname = `${user.firstname[0].toUpperCase()}${user.firstname.slice(
        1
      )} ${user.lastname[0].toUpperCase()}${user.lastname.slice(1)}`;
    }

    const userCreated = await User.create({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    });

    return userCreated;
  } catch (error) {
    throw new Error(error.message);
  }
};
//
module.exports = createUser;
