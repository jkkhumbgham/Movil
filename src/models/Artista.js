import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Artista = sequelize.define(
    "artistas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        fotousuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        profesion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        biografia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seguidores: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seguidos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
);