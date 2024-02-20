const express = require("express");
const dummyData = require("./dummy.json");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");

app.get("/users", (req, res) => {
  res.type("application.json");
  res.send(dummyData);
});

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  //   console.log(newUser);

  fs.readFile("dummy.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("write file success");
          res.send("User added");
        }
      });
    }
    // fs.writeFile("dummy.json", JSON.stringify, err);
  });

  res.status(200);
  res.send("User added successfully");
});

app.listen("3001", () => {
  console.log("Server is listening at port 3001");
});
