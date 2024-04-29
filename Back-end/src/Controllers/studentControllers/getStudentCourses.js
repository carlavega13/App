const axios = require("axios");

const getStudentCourses = async ({ domain, token, userId }) => {
  try {

    const params = {
      wstoken: token,
      wsfunction: "core_enrol_get_users_courses",
      moodlewsrestformat: "json",
      userid: userId,
    };

    const res = await axios(`${domain}webservice/rest/server.php`, { params });

    const filterRes = res.data.map((course) => {
      return {
        id: course.id,
        fullname: course.fullname,
        lastaccess: course.lastaccess,
        progress: course.progress,
      };
    });

    return filterRes;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = getStudentCourses;
