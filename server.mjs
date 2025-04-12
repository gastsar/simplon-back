/**
 * @file server.mjs
 * @description Démarrage simple d'une API Express avec synchronisation base de données.
 */

import { app } from './app.mjs';
import { syncDatabase } from './config/databases.mjs'; 

const PORT = process.env.PORT || 3001;

// Synchroniser la base avant de lancer le serveur
syncDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur API lancé sur le port ${PORT}`);
      console.log(`API accessible à : http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation de la base de données :', err);
  });
