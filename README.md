# Exemple Express

Ce projet est une API Express qui prend en compte les variables d'environnement.

Elle se connecte à une base de données MongoDB.

## Installer les dépendances

`npm install`

## Lancer le projet

### En local
> Renseigner les variables d'environnement dans un fichier .env (cf: [.env.example](.env.example))

`npm start`

Par default l'application se lance sur le port 3000 et se connecte à une base de données MongoDB sur localhost et port 27017.

### Avec Docker-Compose

`docker-compose up` pour lancer le projet avec la base de données

## Dépendences

- MongoDB avec Mongoose
- NodeJS 16
