const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pcbuilder:TlANXAY8sMSd19zP@cluster0.vqk54.mongodb.net/products?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const products = await client.db("pcbuilder").collection("products");

    if (req.method === "GET") {
      const data = await products.find({}).toArray();
      res.send({ message: "success", status: 200, data: data });
    }
  } finally {
  }
}

export default run;
