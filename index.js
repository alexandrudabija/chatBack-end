const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");


require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
const routes = require('./routes/routes');

app.use("/api/", routes); 



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Express server is running on port", PORT);
});
 