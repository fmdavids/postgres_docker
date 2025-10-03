const express = require("express");
const { database } = require("pg/lib/defaults");
const pool = require("./db");
const port = 13000;

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { name, location } = req.body;
    await pool.query(
      `INSERT INTO schools(name, address) VALUES ($1, $2)`,
      [name, location]
    );
    res
      .status(200)
      .send({ message: `Successfully added ${name} and ${location}` });
  } catch (error) {
    console.error;
    res.sendStatus(500);
  }
});

app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools");
    res.status(200).send(data.row);
  } catch (error) {
    console.error("error fetching data", error);
    res.status(500).send("Error: " + error.message);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS schools (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          address VARCHAR(100)
        );
      `);
    res.status(200).send({ message: "Successfully created table" });
  } catch (error) {
    console.error("Error creating table:", error);
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`server is listneing on porrt ${port}`);
});
