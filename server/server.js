import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db.js";

dotenv.config({ path: "./server/.env" });

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.static("dist"));

app.route("/host/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.query(`SELECT * FROM host WHERE host_id = ${id}`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/property/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.query(
      `SELECT * FROM property WHERE property_id = ${id}`
    );
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app
  .route("/reservations/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const data = await db.query(
        `SELECT * FROM reservations WHERE property_id = ${id}`
      );
      res.status(200).json(data.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post(async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const guests = JSON.stringify(body.guests);
    try {
      await db.query(
        `INSERT INTO reservations (property_id, from_date, to_date, guests) VALUES (${id}, '${body.from_date}', '${body.to_date}', '${guests}')`
      );
      const data = await db.query(
        `SELECT * FROM reservations WHERE property_id = ${id}`
      );
      res.status(201).json(data.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.route("/languages").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM languages`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/currencies").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM currencies`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/reviews").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM reviews`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/ratings").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT AVG(cleanliness) as avg_cleanliness,
    AVG(accuracy) as avg_accuracy,
    AVG(communication) as avg_communication,
    AVG(location) as avg_location,
    AVG(check_in) as avg_check_in,
    AVG(value) as avg_value
    FROM ratings;`);

    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/ratings/avg").get(async (req, res) => {
  try {
    const data =
      await db.query(`SELECT AVG((cleanliness + accuracy + communication + location + check_in + value) / 6) AS overall_avg FROM ratings;
    `);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.route("/images").get(async (req, res) => {
  try {
    const data = await db.query(`SELECT * FROM images`);
    res.status(200).json(data.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
