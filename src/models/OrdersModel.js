import { sequelize } from "../config";
import { DataTypes } from "sequelize";
import Users from "./UserModel";
import Adresses from "./AdressesModel";
import Payments from "./PaymentsModel";
import Cupoms from "./CupomsModel";

const Orders = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    total: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    totalDiscount: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "total_discount"
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Orders.belongsTo(Users, {
  as: 'usersCostumers',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserCostumer',
    allowNull: false,
    field: 'id_user_costumer'
  }
})

Orders.belongsTo(Users, {
  as: 'usersDeliver',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idUserDeliver',
    allowNull: true,
    field: 'id_user_deliver'
  }
})

Orders.belongsTo(Adresses,{
  as : 'adresses',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idAdress',
    allowNull: true,
    field: 'id_adress'
  }
})

Orders.belongsTo(Payments, {
  as: 'payments',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idPayment',
    allowNull: false,
    field: 'id_payment'
  }
})

Orders.belongsTo(Cupoms, {
  as: 'cupoms',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey: {
    name: 'idCupom',
    allowNull: true,
    field: 'id_cupom'
  }
})


export default Orders;