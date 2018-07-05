const express = require("express");
const data = require("./utils/data.json");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require ('./swagger-sample.json')

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// TODO: Create CRUD endpoints for your data!

//show log on json API
app.get("/", (req, res) => {
  res.json("You've gotten datas!");
});

//show ALL data on json API
app.get("/data", (req, res) => {
  res.json(data);
});

//show only AMOUNT on json API
app.get("/data/amount", (req, res) => {
  var amountData = data.map(child => child.amount);
  res.json(amountData);
});

//show only SPECIFIC AMOUNT on json API
app.get("/data/amount/:amount", (req, res) => {
  res.json(data.find(child => child.amount === req.params.amount));
});

//show with query search
app.get("/data/search", (req, res) => {
  var queryData = data.find(child => child.amount === req.query.amount);
  res.json(queryData);
});

app.get("/data/search", (req, res) => {
  var queryAmt = data.find(child => child.frequency === req.query.frequency);
  res.json(queryAmt);
});

module.exports = app;
