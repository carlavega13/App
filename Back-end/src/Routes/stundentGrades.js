const getStudentGrades = require("../Controllers/studentControllers/getStudentGrades");

const studentGrades = async (req, res) => {
  try {
    const response = await getStudentGrades(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = studentGrades;
