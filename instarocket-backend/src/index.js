const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// Working with Websockers
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Conecting to MongoDB Cluster
mongoose.connect('mongodb+srv://semana:69910912@insta-rocket-finji.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);
