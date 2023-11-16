var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;
const hostnameUnix = process.env.HOSTNAME;
const samePlace = ['localhost:'+port, hostnameUnix+":"+port, '127.0.0.1:'+port]


app.get('/', function(req, res){
  res.sendFile(__dirname + '/peresentation.html');
});

app.get('/presentation.js', function(req, res){
  res.sendFile(__dirname + '/presentation.js');
});

app.get('/arrow.dae', function(req, res){
  res.sendFile(__dirname + '/static/arrow.dae');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('keyPressedp', function(e){
      //console.log(socket)
      var comingFrom = socket.handshake.headers.host;
      //console.log(comingFrom in samePlace)
     if(comingFrom == 'localhost:'+port || comingFrom == '127.0.0.1'+port)
        socket.broadcast.emit('keyPressedp', e)
     else
        console.log(comingFrom+" hit p")
  })
  socket.on('keyPressedo', function(e){
    var comingFrom = socket.handshake.headers.host;
    if(comingFrom == 'localhost:'+port || comingFrom == '127.0.0.1'+port)
        socket.broadcast.emit('keyPressedo', e)
     else
        console.log(comingFrom+" hit o")
  })
});

http.listen(port, function(){
  console.log('listening on *:'+port);
  console.log(samePlace)
});