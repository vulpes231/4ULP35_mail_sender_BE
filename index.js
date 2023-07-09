const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 3600;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Replace with your allowed origin
  })
);

app.use("/", require("./routers/root"));
app.use("/mail", require("./routers/mail"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
