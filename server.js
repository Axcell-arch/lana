const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.use(cors());
app.use(express.json());

app.post("/api/order", async (req, res) => {
  const { nama, produk, whatsapp, alamat } = req.body;
  try {
    await pool.query(
      "INSERT INTO orders (nama, produk, whatsapp, alamat, tanggal) VALUES ($1, $2, $3, $4, NOW())",
      [nama, produk, whatsapp, alamat]
    );
    res.json({ message: "Pesanan berhasil dikirim!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menyimpan data" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
