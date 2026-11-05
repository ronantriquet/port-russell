// Charge les secrets du fichier .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Route de test
app.get('/', (req, res) => {
  res.send('Bienvenue au port de Russell ⚓');
});

// Connexion à MongoDB, puis démarrage du serveur
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion MongoDB :', err.message);
  });