const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/connectDB");
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");

dotenv.config();

const app = express();

// connection
connectDb();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/efamp/api/v1/items", itemsRoute);
app.use("/efamp/api/v1/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to e-FAMP Marketplace Server</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
