const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

      },
      idMoodle: {
        type: DataTypes.INTEGER,
   
  
      },
      username: {
        type: DataTypes.STRING,
   
  
      },
      password: {
        type: DataTypes.STRING,

      },
      token: {
        type: DataTypes.STRING,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: "estudiante",
      },
      isSuperAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      fullname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.STRING,
      },
      domain: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
