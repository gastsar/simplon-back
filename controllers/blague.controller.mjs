/**
 * Contrôleur pour gérer les blagues
 * @file blague.controller.mjs
 * @description Contient les fonctions pour créer, récupérer et gérer les blagues.
 * @description Utilise Sequelize pour interagir avec la base de données.
 */
import { sequelize } from '../config/database.mjs';
import { Blague } from '../models/blague.model.mjs';

// Créer une nouvelle blague
export const create = async (req, res) => {
  try {

    const titre = req.body?.titre || req.query?.titre;
    const contenu = req.body?.contenu || req.query?.contenu;

    console.log('Données extraites :', { titre, contenu });

    // Validation simple
    if (!titre || !contenu) {
      return res.status(400).json({
        success: false,
        message: "Le titre et le contenu sont obligatoires",
        receivedData: { 
          body: req.body || {}, 
          query: req.query || {} 
        }
      });
    }

    // Création
    const blague = await Blague.create({
      titre,
      contenu,
    });

    return res.status(201).json({
      success: true,
      message: "Blague créée avec succès",
      data: blague
    });
  } catch (error) {
    console.error('Erreur lors de la création :', error);
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la création de la blague",
      error: error.message
    });
  }
};

// Récupérer toutes les blagues
export const findAll = async (req, res) => {
  try {
    const blagues = await Blague.findAll(); 
    return res.status(200).json({
      success: true,
      count: blagues.length,
      data: blagues
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la récupération des blagues",
      error: error.message
    });
  }
};

// Récupérer une blague par son ID
export const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const blague = await Blague.findByPk(id);

    if (!blague) {
      return res.status(404).json({
        success: false,
        message: `Aucune blague trouvée avec l'ID ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      data: blague
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la récupération de la blague",
      error: error.message
    });
  }
};

// Récupérer une blague aléatoire
export const findRandom = async (req, res) => {
  try {
    const blague = await Blague.findOne({
      order: sequelize.random()
    });

    if (!blague) {
      return res.status(404).json({
        success: false,
        message: "Aucune blague disponible"
      });
    }

    return res.status(200).json({
      success: true,
      data: blague
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la récupération d'une blague aléatoire",
      error: error.message
    });
  }
};
