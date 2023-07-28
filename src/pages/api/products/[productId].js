const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const { productId } = req.query;
    var id = new ObjectId(productId);
    console.log(productId);
    const products = await client.db("pcbuilder").collection("products");

    if (req.method === "GET") {
      const data = await products.findOne({ _id: id });
      res.send({ message: "success", status: 200, data: data });
    }
  } finally {
  }
}

export default run;
