import db from "../db";

export default async function handler(req, res) {
  try {
    const products = await db();

    if (req.method === "GET") {
      const data = await products.find({}).toArray();
      res.send({ message: "success", status: 200, data: data });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
