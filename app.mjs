import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { testConnection } from './config/database.mjs';
import blagueRoutes from './routes/blague.route.mjs';

// Initialiser l'application Express
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Tester la connexion à la base de données
testConnection();

// Route racine
app.get('/', (req, res) => {
  res.json({
    message: "Bienvenue sur l'API de blagues",
    endpoints: {
      getAllJokes: "GET /api/v1/blagues",
      getJokeById: "GET /api/v1/blagues/:id",
      getRandomJoke: "GET /api/v1/blagues/random",
      createJoke: "POST /api/v1/blagues"
    }
  });
});

// Utiliser les routes
app.use('/api/v1/blagues', blagueRoutes);

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
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

export default app;