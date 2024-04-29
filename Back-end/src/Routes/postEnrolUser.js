const enrolUser = require("../Controllers/usersControlllers/enrolUser");

const postEnrolUser = async (req, res) => {
  try {
    const response = await enrolUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(200).json(error.message);
  }
};
module.exports = postEnrolUser;
