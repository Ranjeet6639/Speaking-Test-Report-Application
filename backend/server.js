const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/report", (req, res) => {
  const filePath = path.join(__dirname, "data", "report.json");
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
