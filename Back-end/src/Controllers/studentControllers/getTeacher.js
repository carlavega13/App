const axios = require("axios");
const { User } = require("../../db");

const getTeacher = async ({ token, courseid, domain }) => {
  try {
    const people = await axios.get(`${domain}/webservice/rest/server.php`, {
      params: {
        wstoken: token,
        wsfunction: "core_enrol_get_enrolled_users ",
        moodlewsrestformat: "json",
        courseid: courseid,
      },
    });
    const res = people.data.filter(
      (people) =>
        people.roles[0].shortname == "teacher" ||
        people.roles[0].shortname == "editingteacher"
    );

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getTeacher;
