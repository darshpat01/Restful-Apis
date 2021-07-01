const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const bodyParser = require('body-parser');
const router = express.Router();
const postsRoute = require('./routes/Post');
const cors = require('cors');





require('dotenv/config');

mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database connected');
    })

const app = express();


//middleware

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


//importing routes
app.use('/posts', postsRoute);



//routes
router.get('/', (req, res) => {
    res.send('Homepage');
})



app.listen(3000, () => {
    console.log('Running on port 3000');
})