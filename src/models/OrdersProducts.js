import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Orders from "./Orders";
import Products from "./Products";

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    priceProducts: {
      type: DataTypes.NUMERIC,
      field: "price_products",
      allowNull: false
    },
    quantity :{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);


Orders.belongsToMany(Products, {
  through: OrdersProducts,
  as: 'products',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey:{
    name: 'idOrder',
    field: 'id_order',
    allowNull: false
  }
})

Products.belongsToMany(Orders, {
  through: OrdersProducts,
  as: 'order',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
  foreignKey:{
    name: 'idProduct',
    field: 'id_product',
    allowNull: false
  }
})

export default OrdersProducts;