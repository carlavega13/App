const createCourse = require("../Controllers/coursesControllers/createCourse");
const postCourse = async (req, res) => {
  try {
    const response = await createCourse(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = postCourse;
