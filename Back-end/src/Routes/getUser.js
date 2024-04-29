const getUserController = require("../Controllers/getUserController");

const getUser = async (req, res) => {
  try {
    const response = await getUserController(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
module.exports = getUser;
