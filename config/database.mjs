/**
 * @file database.mjs
 * @description Configuration de la base de données SQLite avec Sequelize.
 */
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // Charge .env dans process.env

// Initialiser la base de données SQLite
export const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_STORAGE || './path/to/database.sqlite',
  logging: process.env.DB_LOGGING === 'true' ? console.log : false
});

// Tester la connexion
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
};

// Synchroniser les modèles avec la base de données
export const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Base de données synchronisée.');
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  }
};
