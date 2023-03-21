const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
  process.env.DB_NAME, //НАЗВАНИЕ БД
  process.env.DB_USER, // ПОЛЬЗОВАТЕЛЬ
  process.env.DB_PASSWORD, // ПАРОЛЬ БД
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }

)