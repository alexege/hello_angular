const tasks = require('./../controllers/tasks');
const path = require('path');

module.exports = (app) => {
    app.get('/api/tasks', tasks.showAll)
    app.get('/api/tasks/:id', tasks.showOne)
    app.post('/api/tasks', tasks.create)
    app.put('/api/tasks/:id', tasks.update)
    app.delete('/api/tasks/:id', tasks.delete)    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
};