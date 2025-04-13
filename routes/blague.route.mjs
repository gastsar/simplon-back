/**
 * @file blague.route.mjs
 * @description Routes pour gérer les blagues
 * @description Utilise Express pour définir les routes et les contrôleurs.
 * @description Les routes sont préfixées par /api/v1/blagues
 */

import express from 'express';
import * as blagueController from '../controllers/blague.controller.mjs';

const router = express.Router();

// Créer une nouvelle blague
router.post('/', blagueController.create);

// Récupérer toutes les blagues
router.get('/', blagueController.findAll);

// Récupérer une blague aléatoire
router.get('/random', blagueController.findRandom);

// Récupérer une blague spécifique par ID
router.get('/:id', blagueController.findOne);

export default router;