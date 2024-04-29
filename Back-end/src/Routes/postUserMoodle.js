const createUserMoodle = require("../Controllers/usersControlllers/createUserMoodle");

const postUserMoodle = async (req, res) => {
  try {
    const response = await createUserMoodle(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
module.exports = postUserMoodle;
