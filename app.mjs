import express from 'express';
import cors from 'cors';
import blagueRoutes from './routes/blague.route.mjs';

export const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');



// Logging simple
app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(`[${date}] ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(' Request Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});


// Route d'accueil
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

// Routes spécifiques
app.use('/api/v1/blagues', blagueRoutes);



// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route non trouvée"
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(' Error:', err.stack);
  res.status(500).json({
    success: false,
    message: "Une erreur est survenue sur le serveur",
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});
