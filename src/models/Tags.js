import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Tag = sequelize.define(
    "tags",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        obraId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "obras",
                key: "id",
            }
        },
    },
)