const editUserMoodle = require("../Controllers/usersControlllers/editUserMoodle");

const putUserMoodle = async (req, res) => {
  try {
    const response = await editUserMoodle(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = putUserMoodle;
