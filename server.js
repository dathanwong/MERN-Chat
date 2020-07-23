const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
    
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = require("socket.io")(server);

const messages = [];

io.on("connection", socket =>{
    socket.emit('Welcome', {messages});

    socket.on("new message", message =>{
        messages.push(message);
        io.emit("messages updated", messages);
    });
});