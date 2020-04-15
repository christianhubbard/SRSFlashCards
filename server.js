const path = require('path');
const express = require('express')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
});

app.get('/src/app.css', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './src/app.css'))
});

app.get('/build/bundle.js', (req, res)=> {
res.status(200).sendFile(path.resolve(__dirname, './build/bundle.js'))
});

app.listen(PORT, () =>
console.log(`Server listening on port: ${PORT}`))

module.exports = app