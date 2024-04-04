import express from "express";
const app = express();
const port = 3000;
import router from "./src/router/meminjam.router.js";
import mengembalikan from "./src/router/mengembalikan.router.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(router);
app.use(mengembalikan);
app.get("/", (req, res) => {
  res.send("Halo dari Express!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
