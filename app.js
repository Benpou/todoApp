const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/todoapp';


//body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//View setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Connect to mongodb
MongoClient.connect(url, (err, database) => {
   console.log('MongoDB conntected ....');
   if (err) throw err;

   db = database;
   Todos = db.collection('todos');

    app.listen(port, () => {
        console.log('Server running on port: ' + port);
    });
});

app.get('/', (req, res, next) => {
    Todos.find({}).toArray((err, todos) => {
        if (err) {
            return console.log(err);
        }
        console.log(todos);
       res.render('index', {
           todos: todos
       });
    });
});



