import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Follower = sequelize.define(
    "followers",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        followerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "artistas",
                key: "id",
            }
        },
        followedId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "artistas",
                key: "id",
            }
        },
    }
)