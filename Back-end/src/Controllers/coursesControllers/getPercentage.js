const axios = require("axios");
const getPercentage = async (ids, domain, token) => {
  try {
    let promises = ids.map((id) => {
      return axios
        .get(`${domain}/webservice/rest/server.php`, {
          params: {
            wstoken: token,
            wsfunction: "core_enrol_get_users_courses",
            moodlewsrestformat: "json",
            userid: Number(id),
          },
        })
        .then((res) => res.data);
    });

    let response = await Promise.all(promises).then((res) => res);

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getPercentage;
