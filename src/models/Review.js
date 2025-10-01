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
        obraId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "obras",
                key: "id",
            }
        },
        artistaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "artistas",
                key: "id",
            }
        },
        parentComentarioId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "comentarios",
                key: "id",
            }    
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
);