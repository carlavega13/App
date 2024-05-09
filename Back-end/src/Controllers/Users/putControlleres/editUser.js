const { User } = require("../../../db");
const editUser = async (info) => {
  try {
    const filterInfo = {};
    if (info.firstname) {
      filterInfo.firstname = `${info.firstname[0].toUpperCase()}${info.firstname.slice(1)}`;
    }
    if (info.lastname) {
      filterInfo.lastname = `${info.lastname[0].toUpperCase()}${info.lastname.slice(1)}`;
    }
    if (info.phone) {
      filterInfo.phone = info.phone;
    }
    if (info.password) {
      filterInfo.password = info.password;
    }
    if (info.confirmpassword) {
      filterInfo.confirmpassword = info.confirmpassword;
    }
    if (info.firstname && info.lastname) {
      filterInfo.fullname = `${info.firstname[0].toUpperCase()}${info.firstname.slice(
        1
      )} ${info.lastname[0].toUpperCase()}${info.lastname.slice(1)}`;
    }
    await User.update(filterInfo, { where: { id: info.id } });
    const updatedUser = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: info.id },
    });
    return updatedUser;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = editUser;
