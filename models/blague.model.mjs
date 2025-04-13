/**
 * @file blague.model.js
 * @description Modèle de données pour les blagues
 * @description Utilise Sequelize pour interagir avec la base de données.
 */

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.mjs';

export const Blague = sequelize.define('Blague', {
  // ID est géré automatiquement par Sequelize
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {

  timestamps: true, 
  tableName: 'blagues' // Nom de la table dans la base de données
});
