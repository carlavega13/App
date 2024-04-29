const axios = require("axios");
const {User}=require("../../db")
const getPeopleInCourse = require("./getPeopleInCourse");
const getCoursesController = async (user) => {
  try {
    const admin=await User.findOne({where:{rol:"administrador",isSuperAdmin:true}})
    let courses = await axios.get(`${user.domain}webservice/rest/server.php`, {
      params: {
        wstoken: admin.token,
        wsfunction: "core_course_get_courses",
        moodlewsrestformat: "json",
      },
    });

    let promises = [];

    courses.data.shift();
    courses = courses.data.map((course) => {

      promises.push(
        getPeopleInCourse({
          domain: user.domain,
          token: admin.token,
          courseId: course.id,
        })
      );
      return {
        id: course.id,
        name: course.displayname,
        fullname: course.fullname,
        startdate: course.startdate,
        enddate: course.enddate,
      };
    });
    const promisesUsers = await Promise.all(promises).then((res) => res);
    for (let i = 0; i < promisesUsers.length; i++) {
      let find = courses.findIndex(
        (course) => course.id === promisesUsers[i][0]
      );
      promisesUsers[i].shift();
      let teacher = promisesUsers[i].shift();

      courses[find] = {
        ...courses[find],
        teacher,
        enrolledPeople: promisesUsers[i],
      };
    }

    if (courses.length === 0) {
      return "No hay cursos";
    }
    return courses;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getCoursesController;
