const express = reqiure('express');
const app = express();
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});