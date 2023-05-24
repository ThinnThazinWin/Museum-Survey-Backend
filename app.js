const express = require('express');
const app = express();
const IP = require('ip');
const port = 3000;

const guestRouter = require('./api/guest/guest.router');

app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use('/api/guest', guestRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Museum\'s Survey'});
})

//client
app.get('/api', (req, res) => {
    const cli_ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    res.json({
        success: 1,
        message: `This is API working on :${cli_ipAddress}`
    })

}) 

//server
app.listen(port, '0.0.0.0', () => {
    const ipAddress = IP.address();
    console.log(`API server is running on: \n IP: ${ipAddress} \n Port: ${port}`);
})