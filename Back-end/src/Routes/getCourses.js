const getCoursesController = require("../Controllers/coursesControllers/getCoursesController");

const getCourses = async (req, res) => {
  try {
    const response = await getCoursesController(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = getCourses;
