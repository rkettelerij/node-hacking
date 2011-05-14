var app = require('express').createServer();

app.get('/hello', function(req, res){
  res.send('hello world');
});

app.get('/users/:id?', function(req, res, next){
    var id = req.params.id;
    if (id) {
        console.log('id:' + id);
    } else {
        next();
    }
});

app.get('/users', function(req, res){
    console.log('users');
});

app.listen(process.env.C9_PORT, "0.0.0.0");