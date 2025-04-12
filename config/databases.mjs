/**
 * @file databases.mjs
 * @description Configuration de la base de données SQLite
 * ! Resources Doc Sequelize - https://sequelize.org/docs/v7/databases/sqlite/
 */

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

// Synchroniser les modèles avec la base de données
export const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};



