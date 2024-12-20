const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

dotenv.config();

//Instantiate my DB
mongoose.connect(process.env.MONGODB_URL);

//Mongoose error check
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// Routes
const cakeRoutes = require('./routes/cake');
const userRoutes = require('./routes/users');

app.use('/api/cake', cakeRoutes);
app.use('/api/usersCake', userRoutes);
app.use('/api/data', (req, res) => {
    res.json({message: 'Hello from server'});
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});