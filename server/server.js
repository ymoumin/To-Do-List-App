const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: true
}));

app.use(bodyParser.json());

const db = require("./models");

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

//default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the YETII BACK-END application." });
});

require("./routes/task-routes")(app);
require("./routes/user-routes")(app);

const PORT = process.env.PORT || 9000;
const httpServer = app.listen(PORT, () => {
    console.log('HTTP REST API Server running at '+PORT+'.');
});

