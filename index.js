var express = require('express');
var cors = require('cors');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host        : '127.0.0.1',
    user        : 'regly_app',
    password    : 'regly_password',
    database    : 'regly'
  }
})

var app = express();
app.use(cors());


app.get('/students', function(req, res) {
  knex('student').select().then(function(students) {
    res.send({students: students})
  })
})

app.get('/students/:id', function(req, res) {

})

app.listen(8000, function () {
  console.log('Rocking it on port 8000');
});
