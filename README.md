
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

###  Versionnement de l'API

> [!IMPORTANT]
> L'API est versionnée pour garantir la stabilité et faciliter les évolutions.  
> Actuellement, seule la version `v1` est active.

###  Documentation API

Une documentation Swagger est disponible ici :
- [Lien vers Swagger](#)

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
> [Lien vers l'API déployée](#)

##  Frontend

Application développée en HTML/CSS/JS vanilla, avec une intégration responsive.

###  Fonctionnalités

- Landing page avec branding Carambar & Co
- Affichage d'une blague aléatoire au clic
- Design responsive

###  Technologies Utilisées

- HTML5 / CSS3
- JavaScript Vanilla
- API REST

###  Installation et Lancement (dev)

```bash
# Cloner le repo
git clone https://github.com/gastsar/simplon-front.git
cd simplon-front

# Lancer en local via Live Server ou équivalent
```
> [!NOTE]
> **Astuce :** Tu peux utiliser l'extension Live Server sur VS Code pour tester en local.

###  Déploiement

> [!NOTE]
> **Note :** Le frontend est déployé via GitHub Pages :
> [Lien vers l'application web](#)

##  Prérequis

- Node.js (v16+)
- npm ou yarn
- Git

##  Auteur

Développé par :
- Yves Narson Kévine
- [github.com/gastsar](https://github.com/gastsar)

##  Licence

Ce projet est sous licence ***.




