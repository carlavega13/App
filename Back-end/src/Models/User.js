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
      email: {
        type: DataTypes.STRING,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: "cliente",
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      fullname: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
