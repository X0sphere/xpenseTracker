const express = require('express');
const cors= require('cors');
const {connectDB}= require('./db/db.js');
const {readdirSync} = require('fs');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT

// app.get('/', (req,res)=> {
//     res.send('Root')
// })

//middleware
app.use(express.json());
app.use(cors());

//routes 
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));


const server=() => {
    connectDB()
    app.listen(PORT, () => {
        console.log("You're running on port : ", PORT);
    })
}
server();