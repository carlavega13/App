const { User } = require("../../db");
const axios = require("axios");
const enrolUser = async ({ domain, username, info }) => {
  try {
    const user = await User.findOne({ where: { username: username } });

    const token = await axios(
      `${domain}login/token.php?username=${user.username}&password=${user.password}&service=admin-functions`
    );

    const res = await axios(
      `${domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=enrol_manual_enrol_users&moodlewsrestformat=json&enrolments[0][roleid]=${info.roleid}&enrolments[0][userid]=${info.userid}&enrolments[0][courseid]=${info.courseid}`
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = enrolUser;
