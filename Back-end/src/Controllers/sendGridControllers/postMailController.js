const sgMail = require("./sendGridSetApiKey");
const mail = require("./htmlSendGrid");
const postMailController = async (info) => {
  try {
console.log(info);

    const msg = {
      subject: info.subject,
      to: info.to,
      html:info.text,
      from: "carlavega231323@gmail.com",
    };
    const response = await sgMail.send(msg);

    return response;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = postMailController;
