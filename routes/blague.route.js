/**
 * @file blague.route.js
 * @description Routes pour les blagues
 */

import express from 'express';
import blagueController from '../controllers/blague.controller.js';

export const router = express.Router();

// Créer une nouvelle blague
router.post('/', blagueController.create);

// Récupérer toutes les blagues
router.get('/', blagueController.findAll);

// Récupérer une blague aléatoire
router.get('/random', blagueController.findRandom);

// Récupérer une blague spécifique par ID
router.get('/:id', blagueController.findOne);

