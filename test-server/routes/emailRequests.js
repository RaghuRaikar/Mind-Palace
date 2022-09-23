const express = require("express");
const { getEmails, addEmail } = require("../controllers/emailController");

const router = express.Router();

router.get("/", getEmails);

router.post("/", addEmail);

module.exports = router;
