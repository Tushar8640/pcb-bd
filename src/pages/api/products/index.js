import db from "../db";

export default async function handler(req, res) {
  try {
    const products = await db();
    const { category } = req.body;

    console.log(req.body);
    if (req.method === "GET" && !category) {
      const data = await products.find({}).toArray();
      res.send({ message: "success", status: 200, data: data });
    }
    if (req.method === "GET" && category) {
      const data = await products.find({ category }).toArray();
      res.send({ message: "success", status: 200, data: data });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
