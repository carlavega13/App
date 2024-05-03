const usersList = require("../../../Controllers/Users/getControllers/usersList");

//
const getUsers = async (req, res) => {
  try {
    const response = await usersList(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
//
module.exports = getUsers;
