const axios = require("axios");
const getAllUsersController = async (info) => {
  try {
    const { domain, token } = info;
    const people = await axios.get(`${domain}/webservice/rest/server.php`, {
      params: {
        wstoken: token,
        wsfunction: "core_enrol_get_enrolled_users ",
        moodlewsrestformat: "json",
        courseid: 1,
      },
    });

    return people.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getAllUsersController;
