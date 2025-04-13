/**
 * @file database.mjs
 * @description Configuration de la base de données SQLite avec Sequelize.
 */
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // charge le .env dans process.env

// Initialiser la base de données SQLite
export const sequelize = new Sequelize({
  dialect: 'sqlite',
storage: 'path/to/database.sqlite', // Chemin vers le fichier de base de données SQLite
  logging: true
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