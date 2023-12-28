const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let allowedOrigins = ['http://localhost:4200', process.env.CLIENT_URL];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  preflightContinue:false
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

