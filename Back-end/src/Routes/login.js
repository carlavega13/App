const loginController = require("../Controllers/loginController");
const login = async (req, res) => {
  try {
    const response = await loginController(req.body);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = login;
