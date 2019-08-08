const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const accounts = await db("accounts");

        res.status(200).json(accounts);
    } catch (err) {
        res.status(500).json({ message: "error getting accounts", error: err });
    }
});

// router.get("/", (req, res) => {
//     db.select("*")
//         .from("accounts")
//         .then(accounts => res.status(200).json(accounts))
//         .catch(err =>
//             res
//                 .status(500)
//                 .json({ message: "error getting accounts", error: err })
//         );
// });

router.get("/id", (req, res) => {

})

module.exports = router;
