const express = require('express');
const db = require('./config/connection');
// Require models
// need to add models

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//need to add routes


