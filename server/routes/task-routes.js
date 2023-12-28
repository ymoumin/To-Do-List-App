const cors = require("cors");

module.exports = app => {
  const tasks = require("../controller/taskController");

  const router = require("express").Router();

    router.options("/", cors());

    // Create a new Task
    router.post("/", tasks.create);

    // Retrieve all Tasks
    router.get("/", tasks.findAll);

    router.put("/", tasks.findForUser);

    // Retrieve all user's latest Task ID
    router.put("/latest", tasks.findLatest);

    // Retrieve a single Task with id
    router.get("/:id", tasks.findOne);

    router.options("/:id", cors());
    // Update a Task with id
    router.put("/:id", tasks.update);

    // Delete a Task with id
    router.delete("/:id", tasks.delete);

    // delete all Tasks
    router.delete("/", tasks.deleteAll);

    app.use('/api/tasks', router);

};
