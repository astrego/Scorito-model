const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.send()
});

app.get('/download', (req,res) => {
    const file = publicDirectoryPath + '/data/model.xlsx';
    res.download(file);
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
