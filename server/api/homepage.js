import express from "express";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

const router = express.Router();
/** @route GET /api */
router.get("/api/homepage/", (req, res) => {
  res.send({ name: "John Doe", age: 30 });
});

app.use("/", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
