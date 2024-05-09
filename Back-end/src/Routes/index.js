const { Router } = require("express");

const  postUser=require("./Users/postRoutes/postUser");
const postLogin = require("./Users/postLogin");
const getUsers = require("./Users/getRoutes/getUsers");
const postCredits = require("./Credits/postRoutes/postCredits");
const getOneUser = require("./Users/getRoutes/getOneUser");
const putUser = require("./Users/putRoutes/putUser");
//

const router = Router();
router.post("/postUser",postUser)
router.post("/login",postLogin)
router.get("/getUsers/:id",getUsers)
router.get("/getOneUser/:id",getOneUser)
router.post("/postCredits",postCredits)
router.put("/putUser",putUser)
//
router.get("/", (req, res) => {
    const html = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Soy un web service</title>
  </head>
  <body>
      <h1>Soy un web service</h1>
      <!-- El contenido de tu página web puede ir aquí -->
  </body>
  </html>s
  `;
    res.status(200).send(html);
  });
  module.exports = router;
  