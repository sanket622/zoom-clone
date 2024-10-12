import express from 'express'
import { createServer } from 'http'
import { v4 as uuidv4 } from 'uuid';
import { Server } from 'socket.io';
import { ExpressPeerServer } from 'peer';
import dotenv from 'dotenv'
import expressLayout from "express-ejs-layouts"; 

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static('public'))
app.use(expressLayout)
const server = createServer(app)
const peerServer = ExpressPeerServer(server,{
    debug:true
})

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use('/peerjs',peerServer)

app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room})
})

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection',socket =>{
    socket.on('join-room',(roomId, userId )=>{
       socket.join(roomId)
       socket.to(roomId).emit('user-connected', userId)
       socket.on('message',message =>{
        io.to(roomId).emit('createMessage',message)
       })
    })
})
server.listen(PORT)