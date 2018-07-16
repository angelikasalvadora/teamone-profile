var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
var app = express();

//HANDLE BARS
app.set('views ',path.join(__dirname, 'views') );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
app.get('/', function(req,res){
  res.render('home');
});

//Salvadora
app.get('/nofuente', function(req,res){
  res.render('nofuente',{ //home is the views homehandlebars
    profilename1:'THIS IS NOFUENTE PROFILE',
    published1: true
  });
});

//nofuente
app.get('/salvadora', function(req,res){
  res.render('salvadora',{ //home is the views homehandlebars
    profilename2:'THIS IS SALVADORA PROFILE',
    published2: true
  });
});


/*
app.get('/member/1', function(req,res){
  res.send("This is a server response on nofuente");
});

app.get('/member/2', function(req,res){
  res.send("This is a server response on salvadora");
}); */

/*
app.listen(8000, function(){
  console.log("Server started on port 8000");
}); */

app.listen(process.env.PORT || 8000);
