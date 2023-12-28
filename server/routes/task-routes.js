const cors = require("cors");

module.exports = app => {
  const tasks = require("../controller/taskController");

  const headers = (req, res, next) => {
    const origin = (req.headers.origin === 'http://localhost:9000') ? 'http://localhost:9000' : process.env.CLIENT_URL
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  }

  const router = require("express").Router();

    // Create a new Task
    router.post("/", cors(), headers, tasks.create);

    // Retrieve all Tasks
    router.get("/", tasks.findAll);

    // Retrieve all user's latest Task ID
    router.put("/latest", tasks.findLatest);

    // Retrieve a single Task with id
    router.get("/:id", tasks.findOne);

    // Update a Task with id
    router.put("/:id", tasks.update);

    // Delete a Task with id
    router.delete("/:id", tasks.delete);

    // Create a new Task
    router.delete("/", tasks.deleteAll);

    app.use('/api/tasks', router);

};
