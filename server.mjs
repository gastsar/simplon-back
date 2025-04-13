/**
 * @file server.mjs
 * @description Démarrage propre d'une API Express avec synchronisation de la base de données.
 */

import { app } from './app.mjs';
import { syncDatabase, testConnection } from './config/database.mjs';
import dotenv from 'dotenv';

// Charger les variables d'environnement selon l'environnement
const nodeEnv = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${nodeEnv}` });

// Définir le port à partir des variables d'environnement
const PORT = process.env.PORT || 3000;

// Fonction pour démarrer le serveur
const startServer = async () => {
  try {
    // Tester la connexion à la base de données
    await testConnection();
    console.log('Connexion à la base de données établie avec succès.');

    // Synchroniser la base avant de lancer le serveur
    await syncDatabase();
    console.log(' Base de données synchronisée.');

    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log(` Serveur API lancé sur le port ${PORT}`);
      console.log(` API accessible à : http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(' Erreur critique au démarrage du serveur :', err.message);
    process.exit(1);
  }
};

startServer();
