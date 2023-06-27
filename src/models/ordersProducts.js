import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Orders from "./orders";
import Products from "./products";

const OrdersProducts = sequelize.define(
  'orders_products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price_products: {
      type: DataTypes.NUMERIC,
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