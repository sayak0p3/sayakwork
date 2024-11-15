const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.get("/books", booksRoutes);
app.get("/users", usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
