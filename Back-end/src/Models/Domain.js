const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Domain",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: false }
  );
};
