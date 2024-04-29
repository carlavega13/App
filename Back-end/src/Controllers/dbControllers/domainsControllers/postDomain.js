const { Domain } = require("../../../db");
const getUserForDomain = require("./getUserForDomain");
const postDomain = async ({ domain }) => {
  try {
    const res = await getUserForDomain(domain);

    if (!res) {
      return "debe crear un usuario superAdmin para esta url";
    }
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (typeof domain === "string") {
      if (urlRegex.test(domain)) {
        const actualDomain = await Domain.findOne({
          where: { isActive: true },
        });

        if (!actualDomain) {
          let find = await Domain.findOne({ where: { url: domain } });
          if (find) {
            await find.update({ isActive: true });
          } else {
            find = await Domain.create({ url: domain, isActive: true });
          }
          return find;
        }

        if (actualDomain.url == domain) {
          return "Esta URL es la misma que esta activa en estos momentos";
        } else {
          const find = await Domain.findOne({ where: { url: domain } });

          await actualDomain.update({ isActive: false });
          if (find) {
            await find.update({ isActive: true });
            return find;
          } else {
            const response = await Domain.create({
              url: domain,
              isActive: true,
            });

            return response;
          }
        }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = postDomain;
