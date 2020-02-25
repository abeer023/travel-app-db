const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const passport = require('passport');
const users = require('./routes/users');
const city = require('./routes/city');
const cityVisited = require('./routes/cityVisited');

const app = express();

// Body parser middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
.connect(db,{ useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req,res) => res.json({msg:"hello"}));
app.get('/about', (req,res) => res.send("test"));
app.use('/users', users);
app.use('/city', city);
app.use('/cityVisited', cityVisited);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));