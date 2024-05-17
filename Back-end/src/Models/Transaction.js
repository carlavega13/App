const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Transaction",
    {
      transaction_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      transaction_type: {
        type: DataTypes.ENUM("add", "subtract"),
        allowNull: false,
      },
      transaction_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};
