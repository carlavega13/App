const axios = require("axios");
const { User } = require("../../db");
const getPeopleInCourse = async (payload) => {
  try {
    const { domain, token, courseId } = payload;
    const people = await axios.get(`${domain}/webservice/rest/server.php`, {
      params: {
        wstoken: token,
        wsfunction: "core_enrol_get_enrolled_users ",
        moodlewsrestformat: "json",
        courseid: courseId,
      },
    });

    for (let i = 0; i < people.data.length; i++) {
      if (!people.data[i].phone1) {
        let findDb = await User.findOne({
          where: { username: people.data[i].username },
        });
        
        if (findDb && findDb.phone) {
          people.data[i].phone1 = findDb.phone;
        }
      }
    }

    let teachers = people.data.filter((person) => {
      if (person.roles) {
        if (person.roles[0]) {
          if (person.roles[0].shortname) {
            if (
              person.roles[0].shortname === "teacher" ||
              person.roles[0].shortname === "editingteacher"
            ) {
              return person;
            }
          }
        }
      }
    });

    return [courseId, teachers, ...people.data];
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getPeopleInCourse;
