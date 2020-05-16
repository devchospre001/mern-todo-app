const router = require('express').Router();
let Todo = require('../models/todos.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route('/add').post((req, res) => {
    const content = req.body.content;

    const newTodo = new Todo({
        content
    })

    newTodo.save()
        .then(() => res.json("Todo added successfully!"))
        .catch(err => res.status(400).json("Adding error: " + err))
})

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json("Reading error") + err)
})

router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json("Todo deleted successfully."))
        .catch(err => res.status(400).json("Deleting error: " + err))
})

router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.content = req.body.content

            todo.save()
                .then(() => res.json("Todo updated successfully!"))
                .catch(err => res.status(400).json("Update/Save error: " + err))
        })
        .catch(err => res.status(400).json("Updating error: " + err))
})

module.exports = router;