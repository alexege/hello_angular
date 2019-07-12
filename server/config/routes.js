const tasks = require('./../controllers/tasks');

module.exports = (app) => {
    app.get('/', tasks.index)
    app.get('/:id', tasks.view)
    app.post('/create', tasks.create)
    app.put('/update/:id', tasks.update)
    app.delete('/delete/:id', tasks.delete)


    // GET: Retrieve all Tasks
    // GET: Retrieve a Task by ID
    // POST: Create a Task
    // PUT: Update a Task by ID
    // DELETE: Delete a Task by ID
    
};