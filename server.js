const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/add", (req, res) => {

  const user = {
    name: req.body.name,
    phone: req.body.phone,
    time: new Date().toLocaleString("fa-IR")
  };

  users.push(user);

  res.json({
    ok:true
  });

});

app.listen(3000, () => {
  console.log("SA SERVER RUNNING 🚀");
});
