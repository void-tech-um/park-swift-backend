const express = require("express");

const app = express();
const cors = require('cors'); // Import the cors middleware

const PORT = process.env.PORT || 3001;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});