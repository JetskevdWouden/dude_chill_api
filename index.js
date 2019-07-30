//import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//MODELS
const User = require('./user/model');
const Game = require('./game/model');
const Stress = require('./stress/model');
const Content = require('./content/model');

//ROUTES

//intialize & define port
const app = express();
const port = process.env.PORT || 4000;

//declare middleware
const jsonParser = bodyParser.json();

//register middleware
app.use(cors());
app.use(jsonParser);

//add onListen function that logs the current port
function onListen() {
    console.log(`Listening on port ${port}.`);
}

//Start listening
app.listen(port, onListen);