const server = require("./src/index");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
conn.sync({ force: false }).then(() => {
  console.log(" db conectada");
  server.listen(port, () => {
    console.log(" listening at 3001");
  });
});
