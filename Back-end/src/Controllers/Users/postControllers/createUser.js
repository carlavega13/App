const { User } = require("../../../db");
const bcrypt = require("bcryptjs");
const postMailController = require("../../sendGridControllers/postMailController");
const htmlUserCreated=require("../../sendGridControllers/htmlUserCreated")
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

   await postMailController({text:htmlUserCreated(user),to:user.email,subject:"Cuenta creada en credits-app!"})

    return userCreated;



  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
//
module.exports = createUser;
