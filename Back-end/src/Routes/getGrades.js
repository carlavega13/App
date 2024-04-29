const getGradesController = require("../Controllers/coursesControllers/getGradesController");

const getGrades = async (req, res) => {
  try {
    const response = await getGradesController(req.body);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = getGrades;
