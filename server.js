const express = require("express");
const BudgetRouter = require("./budgets/budget-router");

const server = express();

server.use(express.json());
server.use("/api/budgets", BudgetRouter);

server.get("/", (req, res) => {
    res.send("<h1>WebDB I Challenge</h1>");
});

module.exports = server;
