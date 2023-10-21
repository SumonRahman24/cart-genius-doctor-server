const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// connect mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@genius-cart-doctor.7jvv8bk.mongodb.net/?retryWrites=true&w=majority`;
// const uri =
//   "mongodb+srv://mustafizurrahmansumon24:RuKtRBkcmetVGELw@genius-cart-doctor.7jvv8bk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    app.get("/", (req, res) => {
      res.send("server is running");
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// listen
app.listen(port, () => {
  console.log(`server is running successfully at http://${port}`);
});
