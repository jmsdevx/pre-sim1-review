require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();
const { makePost } = require("./controller");

app.use(json());

//endpoints
app.post("/api/post", makePost);

const port = 3005;

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    // dbInstance
    //   .create_table()
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  })
  .catch(error => console.log(error));

app.listen(port, () => console.log(`Listening on ${port}`));
