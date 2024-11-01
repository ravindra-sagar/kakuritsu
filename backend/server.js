const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let markets = [
    { id: 1, question: 'Will it rain tomorrow?', odds: '60%' },
    { id: 2, question: 'Will the stock market go up?', odds: '40%' },
];

// Get markets
app.get('/api/markets', (req, res) => {
    res.json(markets);
});

// Create a market
app.post('/api/markets', (req, res) => {
    const newMarket = {
        id: markets.length + 1,
        question: req.body.question,
        odds: req.body.odds,
    };
    markets.push(newMarket);
    res.status(201).json(newMarket);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
