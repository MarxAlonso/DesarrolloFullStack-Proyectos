const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const apiRoutes = require("./routes/api.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () =>{
    console.log("Servidor en http://localhost:${process.env.PORT}");
})