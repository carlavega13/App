const postUser = require("../../Controllers/dbControllers/postUser");

const createUser = async (req, res) => {
  try {

    const response = await postUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = createUser;
