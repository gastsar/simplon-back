/**
 * @file app.mjs
 * @description Point d'entrée de l'application Express
 * @description Gère la configuration de l'application, les middlewares et les routes.
 */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/database.mjs';
import blagueRoutes from './routes/blague.route.mjs';

// Charger les variables d'environnement selon l'environnement
const nodeEnv = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${nodeEnv}` });

// Initialiser l'application Express
export const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Tester la connexion à la base de données
testConnection();

// Récupérer le préfixe API des variables d'environnement
const API_PREFIX = process.env.API_PREFIX || '/api/v1';

// Route racine
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur l'API de blagues",
    environment: nodeEnv,
    endpoints: {
      getAllJokes: `GET ${API_PREFIX}/blagues`,
      getJokeById: `GET ${API_PREFIX}/blagues/:id`,
      getRandomJoke: `GET ${API_PREFIX}/blagues/random`,
      createJoke: `POST ${API_PREFIX}/blagues`
    }
  });
});

// Utiliser les routes avec le préfixe des variables d'environnement
app.use(`${API_PREFIX}/blagues`, blagueRoutes);

// Middleware pour gérer les routes non trouvées
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route non trouvée"
  });
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Une erreur est survenue sur le serveur",
    error: nodeEnv === 'development' ? err.message : {}
  });
});

