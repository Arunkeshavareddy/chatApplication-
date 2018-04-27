var express =require('express');
var app = express();
var socket = require('socket.io')

var server = app.listen(4000,function(){
  console.log('we are in port 4000');
})

//Static files
app.use(express.static('public'));

//Settingup the Sockey
var io = socket(server);


io.on('connection', function(socket){
  console.log('Made a connection');

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing',data)
  })

})
