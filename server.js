const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-data', (req, res) => {
    const { value } = req.body;
    console.log('Отримані дані:', value);
    res.json({ status: 'success', receivedValue: value });
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});
