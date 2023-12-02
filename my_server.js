const express = require('express')
const cors = requires('core')
const path = require('path')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)
const robot = require('robotjs')
const dict = require('./dict')

app.use(express.static(path.join(__dirname, '../')))
app.set('views', path.join(__dirname, '../'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(cors())

app.use('/', (req, res) => {
    res.render('index.html')
})

let connectedUsers = []
let hostId

io.on('connection', socket => {
    socket.on("enter room ", roomName => {
        console.log(socket.rooms)
        socket.join(roomName)
        console.log(socket.rooms)
    })
})