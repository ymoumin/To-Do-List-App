
module.exports = app => {

    const users = require("../controller/userController");

  const router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve a single User with email
  router.get("/:email", users.findOne);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Retrieve all Users
  //router.get("/", users.findAll);

  app.use('/api/users', router);
};
