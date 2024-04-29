const getTeacher = require("../../Controllers/studentControllers/getTeacher");

const getTeacherCourse = async (req, res) => {
  try {
    const response = await getTeacher(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
module.exports = getTeacherCourse;
