const express = require("express");
const app = express();
const { product, users } = require("./dummy.json");

app.get("/abc", (request, response) => {
  response.type("application/json");
  response.send("Hello");
});

app.get("/product", (request, response) => {
  response.type("application/json");
  response.send({ product, users });
});

app.get("/names", (request, response) => {
  response.type("application/json");
  response.send({ names });
});

app.listen("3001", () => {
  console.log("Server is listening at port 3001");
});

const names = users.map((e) => {
  console.log("e: ", e.name);
  return e.name;
});

console.log("names: ", names);
