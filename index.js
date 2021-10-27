/** @format */

const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();
app.use(cors());
app.use(express.json());
// const port = process.env.PORT;
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello this is my second note changed");
});

const users = [
  {
    id: 1,
    name: "Sahol",
    email: "asmsahol@gmail.com",
    address: "Jashore",
  },
  {
    id: 2,
    name: "Shimul",
    email: "shimul@gmail.com",
    address: "Jashore",
  },
  {
    id: 3,
    name: "Tahazzat",
    email: "tahazat@gmail.com",
    address: "Jashore",
  },
  {
    id: 4,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 5,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 6,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 7,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 8,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 9,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
  {
    id: 10,
    name: "Omar Faruque",
    email: "omarfaruque@gmail.com",
    address: "Jashore",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("heatting the post", req.body);
  // res.send(json.toString(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Listen", port);
});
