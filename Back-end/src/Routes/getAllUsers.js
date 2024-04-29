const getAllUsersController = require("../Controllers/usersControlllers/getAllUsersController");

const getAllUsers = async (req, res) => {
  try {
    const response = await getAllUsersController(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = getAllUsers;
