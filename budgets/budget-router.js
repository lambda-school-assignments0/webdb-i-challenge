const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

router.post("/", (req, res) => {
    const accountInfo = req.body;

    db.select("*")
        .from("accounts")
        .insert(accountInfo)
        .then(res.status(201).json(accountInfo))
        .catch(err =>
            res
                .status(500)
                .json({ message: "error inserting account", error: err })
        );
});

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

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const accountInfo = req.body;

    db.select("*")
        .from("accounts")
        .where("id", "=", id)
        .update(accountInfo)
        .then(numUpdated => res.status(200).json({ updated: numUpdated }))
        .catch(err =>
            res
                .status(500)
                .json({ message: "error updating account", error: err })
        );
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.select("*")
        .from("accounts")
        .where("id", "=", id)
        .del()
        .then(numDeleted => res.status(204).json({ deleted: numDeleted }))
        .catch(err => res.status(500).json({ message: "error deleting account", error: err }))
})

module.exports = router;
