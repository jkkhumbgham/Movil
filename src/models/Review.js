import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Review = sequelize.define(
    "reviews",
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
        },obraId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "obras",
                key: "id",
            }
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);