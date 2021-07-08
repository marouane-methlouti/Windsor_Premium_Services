const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { CANCELLED } = require('dns');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/contactSubmit',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))   // resolve
  .catch(() => console.log('Connexion à MongoDB échouée !')); // reject

/***************************** USER */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

/************************************ */
const dateSchema = new mongoose.Schema({
  date: { type: Date, required: true },
});
const Cal = mongoose.model('Cal', dateSchema);
/*
app.post('/contact', function (req, res) {
  console.log(req.body)
  res.json({ reponse:'ok' })
});
*/

app.post('/contactSubmit', function (req, res) {
  console.log(req.body) //affiche dans console back
  const Person = new User(req.body);
  Person.save()
    .then(() => res.json({ reponse: 'ok' })) //reponse de la bd
    .catch((err) => console.log(err));
  //reponds au front
});

app.post('/routeDate', function (req, res) {
  console.log(req.body) //affiche dans console back
  const DateInsert = new Cal(req.body);
  DateInsert.save()
    .then(() => res.json({ reponse: 'ok' })) //reponse de la bd
    .catch((err) => console.log(err));
  //reponds au front
});

module.exports = app;
