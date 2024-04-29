const axios = require("axios");
const { User } = require("../../db");
const postUser = require("../dbControllers/postUser");
const createUserMoodle = async ({ domain, username, info }) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    const token = await axios(
      `${domain}login/token.php?username=${user.username}&password=${user.password}&service=admin-functions`
    );

    const res = await axios(
      `${domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_create_users&moodlewsrestformat=json&users[0][username]=${info.username}&users[0][password]=${info.password}&users[0][firstname]=${info.firstname}&users[0][lastname]=${info.lastname}&users[0][email]=${info.email}`
    );

    if (res.data[0].id) {
      await postUser({...info,idMoodle:info.id});
    }
    return res.data;
  } catch (error) {
    throw new Error("No se pudo crear el usuario.");
  }
};
module.exports = createUserMoodle;
