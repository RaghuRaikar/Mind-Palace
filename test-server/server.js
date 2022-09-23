require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const emailRequestRoutes = require("./routes/emailRequests");

const accountSid = "ACdf937d2f0fbdad693d20308401ab3e3e";
const authToken = "96ade111f320ad2f32c289f1a706c9ad";

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: "Hello from Node",
//     to: "+19174887501",
//     from: "+15739203702",
//   })
//   .then((message) => console.log(message.sid));

const app = express();

app.use(cors("*"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/emails", emailRequestRoutes);

app.get("/", (req, res) => {
  res.send("express server");
});

app.get("/send-text", (req, res) => {
  // GET variables, passed via querystring
  const { userNumber, messageBody } = req.body;
  //need to forward the message and number to a customer support number
  // send text
  client.messages
    .create({
      body: textmessage,
      to: recipient,
      from: "+15739203702",
    })
    .then((message) => console.log(message.body));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`now listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
