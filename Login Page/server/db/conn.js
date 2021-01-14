const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// DB connection
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB")
);
