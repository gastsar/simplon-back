/**
 * @file blague.route.mjs
 * @description Routes pour gérer les blagues
 */

import express from 'express';
import * as blagueController from '../controllers/blague.controller.mjs';

const router = express.Router();

// Créer une nouvelle blague
router.post('/', blagueController.create);

// Récupérer toutes les blagues
router.get('/', blagueController.findAll);

// Récupérer une blague aléatoire
// Note: Cette route doit être placée avant la route paramétrée /:id
router.get('/random', blagueController.findRandom);

// Récupérer une blague spécifique par ID
router.get('/:id', blagueController.findOne);

export default router;