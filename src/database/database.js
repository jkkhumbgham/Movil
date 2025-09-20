import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Trazzodb", "postgres", "2006", {
    port: 5433,
    host: "localhost",
    dialect: "postgres",
});