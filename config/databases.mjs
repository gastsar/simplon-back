import { Sequelize } from "sequelize";

// Initialiser la base de données SQLite
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
  logging: false,
});

// Tester la connexion
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}



