import express from "express";

const router = express.Router();
/** @route GET /api */
router.get("/api/homepage/", (req, res) => {
  res.send({
    message: "Hello from the server!",
  });
});
export default router;