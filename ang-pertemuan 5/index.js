const express =require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const userRouters = require('./userRouters');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRouters);

app.listen(port, () => {
 console.log(`Example app listening on port ${port}!`); 
});