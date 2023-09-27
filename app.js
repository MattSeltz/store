import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const { category } = req.query;

  const dataJSON = await readFile("products.json", "utf-8");

  const data = JSON.parse(dataJSON);

  if (category) {
    const filteredProduct = data.filter(
      (product) => product.category == category
    );

    return res.send(filteredProduct);
  }

  res.send(data);
});

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
