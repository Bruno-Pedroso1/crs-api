import { DataTypes } from "sequelize";
import { sequelize } from "../config";


const Users = sequelize.define(
    'users',
    {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        username: {
			type: DataTypes.STRING(50),
            allowNull: false
		},
        cpf: {
			type: DataTypes.STRING(14),
            allowNull: false,
            unique: true
		},
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        passwordHash: {
            type: DataTypes.STRING(255),
            field: "password_hash"
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull:true
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull:false
        },
        cart: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        recuperation: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    },
    
    {
        freezeTableName: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
    }

)


export default Users;