import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Interes = sequelize.define(
    "intereses",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        artistaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "artistas",
                key: "id",
            }
        },
        interes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
)