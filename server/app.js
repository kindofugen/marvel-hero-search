const express = require('express');
const config  = require('config');
const routes = require('./routes/index.js');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);


const PORT = config.get('port') ?? 8080;


async function start() {
    try {
        app.listen(PORT, () => console.log(`server has been started on port ${PORT}`));
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

start();