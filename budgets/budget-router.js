const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.select("*")
        .from("accounts")
        .then(accounts => res.status(200).json(accounts))
        .catch(err =>
            res
                .status(500)
                .json({ message: "error getting accounts", error: err })
        );
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.select("*")
        .from("accounts")
        .where("id", "=", id)
        .then(account => {
            if (account[0]) {
                res.status(200).json(account[0]);
            } else {
                res.status(404).json({ error: `invalid id: ${id}` });
            }
        })
        .catch(err =>
            res
                .status(500)
                .json({ message: "error getting account", error: err })
        );
});

module.exports = router;
