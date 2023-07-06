import { sequelize } from "../config";
import { DataTypes } from "sequelize";
import Users from "./User";

const Adresses = sequelize.define(
  'adresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    zipCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "zip_code"
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numberForget: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "number_forget"
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Adresses.belongsTo(Users, {
  as: 'categories',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUser',
    field: 'id_user',
    allowNull: false
  }
});

export default Adresses;