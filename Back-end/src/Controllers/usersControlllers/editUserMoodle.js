const axios = require("axios");
const { User } = require("../../db");
const editUserMoodle = async (body) => {
  try {
    const { info } = body;


    const admin = await User.findOne({ where: { rol: "administrador",isSuperAdmin:true,domain:body.domain } });
    const token = await axios(
      `${body.domain}login/token.php?username=${admin.username}&password=${admin.password}&service=admin-functions`
      );

    let url = `${body.domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_update_users&moodlewsrestformat=json&users[0][id]=${info.idMoodle}`;
    if (info.username) {
      url += `&users[0][username]=${info.username}`;
    }
    if (info.password) {
      url += `&users[0][password]=${info.password}`;
    }
    if (info.firstname) {
      url += `&users[0][firstname]=${info.firstname}`;
    }
    if (info.lastname) {
      url += `&users[0][lastname]=${info.lastname}`;
    }


    if (info.phone1) {
      url += `&users[0][phone1]=${info.phone1}`;
    }
    if (info.country) {
      url += `&users[0][country]=${info.country}`;
    }
    if (info.city) {
      url += `&users[0][city]=${info.city}`;
    }
    const res = await axios(`${url}`);

    if (!res.data) {
      return "Se actualizo su información";
    } else {
      throw new Error("No se pudo actualizar la información");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = editUserMoodle;
