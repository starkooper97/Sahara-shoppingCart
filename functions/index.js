const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LoBJlSJEqESsttLHZXcDbZ3NLfTZdqXirP9MLObCMQY3FZO0SqCM4PkdsVBK2lDOCCJlwYSyTfkbAtPuFspQBAD00V4REPpDV"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/kj", (request, response) =>
//   response.status(200).send("hello kartik")
// );

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log(request.query);

  console.log("Payment request recieved >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(total),
    currency: "usd",
  });

  //   ok- means created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret || "NOT_FOUND",
  });
});

exports.api = functions.https.onRequest(app);
