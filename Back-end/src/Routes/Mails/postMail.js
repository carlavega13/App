const postMailController = require("../../Controllers/sendGridControllers/postMailController");

const postMail = async (req, res) => {
  try {
    const response = await postMailController(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
module.exports = postMail;
