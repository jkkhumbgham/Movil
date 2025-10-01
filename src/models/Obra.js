import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Obra = sequelize.define(
    "obras",
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
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        obraIMG: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numComentarios: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        compartidos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        vistas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }
);