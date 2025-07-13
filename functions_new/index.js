

const functions = require("firebase-functions"); // fixed typo 'requre'
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("");

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello, World!"));

// app.post("/payments/create",async(req,res )=>{
//     const total=req.query.total
//     console.log("payment request received",total)
// })
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(" Payment request received:", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // amount in cents
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("❌ Stripe error:", error.message);
    res.status(500).send({ error: error.message });
  }
});

// EXPORT FUNCTION
exports.api = functions.https.onRequest(app);
