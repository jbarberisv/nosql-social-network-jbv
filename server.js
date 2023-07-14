const express = require('express');
//importing mongoose
const mongoose = require('mongoose');
const app = express();
//if not port in env, will use 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes')); 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-project-jbv', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true); // for log

app.listen(PORT, () => console.log(`On localhost:${PORT}`));
