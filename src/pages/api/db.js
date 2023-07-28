import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vqk54.mongodb.net/products?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function db() {
  try {
    await client.connect();

    const products = client.db("pcbuilder").collection("products");


    return products;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default db;
