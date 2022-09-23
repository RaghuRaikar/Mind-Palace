const Email = require("../models/emailModel");
const mongoose = require("mongoose");

const addEmail = async (req, res) => {
  const { name, emailAddress, subject, body } = req.body;

  try {
    const email = await Email.create({ name, emailAddress, subject, body });
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEmails = async (req, res) => {
  const emails = await Email.find({}).sort({ createdAt: -1 });
  res.status(200).json(emails);
};

module.exports = { addEmail, getEmails };
