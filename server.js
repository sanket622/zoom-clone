import express from 'express';
import { createServer } from 'http';
import { v4 as uuidv4 } from 'uuid';
import { Server } from 'socket.io';
import { ExpressPeerServer } from 'peer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize dotenv
dotenv.config();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

// Static files and layout
app.use(express.static('public'));

// Create server and peer server
const server = createServer(app);
const peerServer = ExpressPeerServer(server, {
    debug: true
});

// Set up views
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


// PeerJS route
app.use('/peerjs', peerServer);

// Routes
app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
});

// Set up Socket.io with CORS support
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Socket.io connection handling
io.on('connection', (socket) => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', userId);
        
        socket.on('message', (message) => {
            io.to(roomId).emit('createMessage', message);
        });
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
