const getStudentCourses = require("../../Controllers/studentControllers/getStudentCourses");

const getEnrolledCourses = async (req, res) => {
  try {
    const response = await getStudentCourses(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = getEnrolledCourses;
