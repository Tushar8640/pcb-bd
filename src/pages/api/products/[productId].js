import db from "../db";
import { ObjectId } from "mongodb";

export default  async function handler(req, res) {
  try {
    const products = await db();

    const { productId } = req.query;
    const id = new ObjectId(productId);

    if (req.method === "GET") {
      const data = await products.findOne({ _id: id });
      res.send({ message: "success", status: 200, data: data });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}


