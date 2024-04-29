const postDomain = require("../../Controllers/dbControllers/domainsControllers/postDomain");

const createDomain = async (req, res) => {
  try {
    const domain = await postDomain(req.body);
    res.status(200).json(domain);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = createDomain;
