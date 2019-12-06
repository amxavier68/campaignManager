const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({Action: '1st Route loaded ...'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);