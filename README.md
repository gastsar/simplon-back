
# Carambar & Co - Application de Blagues

Bienvenue sur le projet d'application web de blagues pour Carambar & Co ! Cette application permet d'afficher des blagues aléatoires à travers une interface web simple et élégante qui reflète l'identité de la marque.
> [!NOTE]
> Projet réalisé dans le cadre d'une test technique pour la formation Concepteur Développeur d'Applications (CDA) chez Simplon.


> [!WARNING]
> - La documentation est en cours de finalisation.  
> - Certaines fonctionnalités peuvent ne pas être encore entièrement décrites.
> - N'hésitez pas à consulter le code source ou ouvrir une issue si besoin d'information urgente.

> [!CAUTION]
> - **Projet fourni par Simplon dans le cadre d’un test technique.**  
> - Ce dépôt a un objectif **pédagogique** uniquement.  
> - Toute utilisation en dehors de ce contexte, notamment à des fins commerciales, devra être préalablement validée par Simplon.


##  Description du Projet

###  Structure du Projet
Le projet consiste à concevoir une application web fullstack composée de deux volets :
- Une API backend permettant la gestion de blagues : [Repository Backend](https://github.com/gastsar/simplon-back.git)
- Une application frontend affichant une landing page interactive : [Repository Frontend](https://github.com/gastsar/simplon-front.git)
##  Backend (API REST)

Développée avec Node.js, Express, Sequelize et SQLite, l'API suit une architecture MVC propre.

###  Fonctionnalités

- `POST /api/v1/blagues` : Ajouter une nouvelle blague
- `GET /api/v1/blagues` : Lister toutes les blagues  
- `GET /api/v1/blagues/:id` : Récupérer une blague spécifique
- `GET /api/v1/blagues/random` : Obtenir une blague aléatoire

###  Structures

simplon-back/
├── config/
│   └── database.js
├── controllers/
│   └── blague.controller.js
├── models/
│   └── blague.model.js
├── routes/
│   └── blague.routes.js
├── .gitignore
├── app.js
├── package.json
└── server.js

###  Versionnement de l'API

> [!IMPORTANT]
> L'API est versionnée pour garantir la stabilité et faciliter les évolutions.  
> Actuellement, seule la version `v1` est active.

###  Documentation API

Une documentation Swagger est disponible ici :
- [Lien vers Swagger](https://app.swaggerhub.com/apis-docs/NarsonKevineYVES/carambarco/1.0.0)

### ⚙ Installation et Lancement (dev)

```bash
# Cloner le repo
git clone https://github.com/gastsar/simplon-back.git
cd simplon-back

# Installer les dépendances
npm install

# Migrer la base de données
npm run migrate

# Lancer le serveur de développement
npm run dev
```

###  Déploiement
> [!IMPORTANT]
> **Important :** L'API est déployée via Render.com :
> [Lien vers l'API déployée](https://simplon-back.onrender.com/)

##  Prérequis

- Node.js (v16+)
- npm ou yarn ou pnpm
- Git

##  Auteur

Développé par :
- Yves Narson Kévine
- [github.com/gastsar](https://github.com/gastsar)

## Ressources

-[Sequelize (v6-stable)](https://sequelize.org/docs/v6/)
-[IUT Belfort-Montbéliard](https://cours-info.iut-bm.univ-fcomte.fr/upload/supports/S3/web/cot%20serveur/R307/Introduction%20a%20Sequelize%20ORM.pdf)
-[IUT Belfort-Montbéliard](https://cours-info.iut-bm.univ-fcomte.fr/upload/supports/S3/web/cot%20serveur/R307/Introduction%20Sequelize%20et%20ORM%20dans%20Node.js.pdf)

##  Licence

Ce projet est sous licence ***.

