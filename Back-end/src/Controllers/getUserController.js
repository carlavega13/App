const axios = require("axios");
const { User } = require("../db");
const getUserController = async (user) => {
  try {
    let { domain, username, password } = user;
    if (user.rol !== "administrador" && user.isSuperAdmin !== true) {
      const admin = await User.findOne({
        where: { rol: "administrador", isSuperAdmin: true, domain: domain },
      });   

      username = admin.username;
      password = admin.password;
    }
    const token = await axios(
      `${domain}login/token.php?username=${username}&password=${password}&service=admin-functions`
      );


      const response = await axios(
        `${user.domain}webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=username&criteria[0][value]=${user.username}`
        );

        const res = {
      idMoodle: response.data.users[0].id,
      username: response.data.users[0].username,
      email: response.data.users[0].email,
      firstname: response.data.users[0].firstname,
      lastname: response.data.users[0].lastname,
      fullname: response.data.users[0].fullname,
      city: response.data.users[0].city,
      country: response.data.users[0].country,
      profileimageurl: response.data.users[0].profileimageurl,
    };
    return res;
  } catch (error) {

    throw new Error(error.message);
  }
};
module.exports = getUserController;
