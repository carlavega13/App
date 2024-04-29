const axios = require("axios");

const getStudentGrades = async ({ token, domain, courseid, userid }) => {
  try {

    const params = {
      wstoken: token,
      wsfunction: "gradereport_user_get_grade_items",
      moodlewsrestformat: "json",
      courseid: Number(courseid),
      userid: Number(userid),
    };
    const res = await axios(`${domain}webservice/rest/server.php`, { params });

    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = getStudentGrades;

