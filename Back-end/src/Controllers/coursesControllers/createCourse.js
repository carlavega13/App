const axios = require("axios");
const { User } = require("../../db");
const createCourse = async ({ domain, username, info }) => {
  try {
    const user = await User.findOne({ where: { username: username } });

    const token = await axios(
      `${domain}login/token.php?username=${user.username}&password=${user.password}&service=admin-functions`
    );

    const res = await axios(
      `${domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_course_create_courses&moodlewsrestformat=json&courses[0][fullname]=${info.fullname}&courses[0][shortname]=${info.shortname}&courses[0][categoryid]=${info.categoryid}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = createCourse;
