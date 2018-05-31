const express = require('express'),
bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/dist/index.html'));
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});