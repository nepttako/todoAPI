var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Pay the rent',
    completed: true
}];

app.get('/', function(req, res){
    res.send('Todo API Root');
});

// GET  /todos
app.get('/todos', function(req, res){
    res.json(todos);
})
// GET /todos/:id

app.get('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id, 10);
    var matchTodo;
    for(var i = 0; i < todos.length; i++){
        if(todos[i].id === todoId){
            matchTodo = todos[i];
            res.json(matchTodo);
        }
    }
    if(typeof matchTodo === 'undefined'){
        res.status(400).send('This page is not found.');
    }
})

app.listen(PORT, function(){
    console.log('Express listening to ' + PORT + '!');
});
