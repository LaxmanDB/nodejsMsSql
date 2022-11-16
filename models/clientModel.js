const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "Users",
    {
      // Id: { type: DataTypes.INTEGER },
      Name: { type: DataTypes.STRING },
      // RoleId: { type: DataTypes.INTEGER, allowNull: true },
      Email: { type: DataTypes.STRING },
      ObjectId: { type: DataTypes.INTEGER, allowNull: true },
      Mobile: { type: DataTypes.STRING },
      EmployeeId: { type: DataTypes.INTEGER },
      ManagerId: { type: DataTypes.INTEGER },
      CreatedBy: { type: DataTypes.INTEGER },
      CreatedDate: { type: DataTypes.STRING },
      UpdatedBy: { type: DataTypes.INTEGER },
      UpdatedDate: { type: DataTypes.STRING },
      IsActive: { type: DataTypes.BOOLEAN },
      Department: { type: DataTypes.STRING },
    },
    {
      tableName: "[Users]",
      timestamps: false,
      freezeTableName: true,
      schema: "UserMgmt",
    }
  );

  return Users;
};

// module.exports = model;

// function model(sequelize) {
//   const attributes = {
//     Name: { type: DataTypes.STRING, allowNull: false },
//     RoleId: { type: DataTypes.NUMBER, allowNull: true },
//     Email: { type: DataTypes.STRING, allowNull: false },
//     ObjectId: { type: DataTypes.NUMBER, allowNull: true },
//     Mobile: { type: DataTypes.STRING, allowNull: false },
//     EmployeeId: { type: DataTypes.NUMBER, allowNull: false },
//     ManagerId: { type: DataTypes.NUMBER, allowNull: false },
//     CreatedBy: { type: DataTypes.NUMBER, allowNull: false },
//     CreatedDate: { type: DataTypes.STRING, allowNull: false },
//     UpdatedBy: { type: DataTypes.NUMBER, allowNull: false },
//     UpdatedDate: { type: DataTypes.DATE, allowNull: false },
//     IsActive: { type: DataTypes.BOOLEAN, allowNull: false },
//     Department: { type: DataTypes.STRING, allowNull: false },
//   };

//   const options = {
//     defaultScope: {
//       // exclude password hash by default
//       attributes: { exclude: ["passwordHash"] },
//     },
//     scopes: {
//       // include hash with this scope
//       withHash: { attributes: {} },
//     },
//   };

//   return sequelize.define("Usermgmt.Users", attributes, options);
// }
