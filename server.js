const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/leaderboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/leaderboard', leaderboardRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));