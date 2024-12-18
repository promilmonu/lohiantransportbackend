require("dotenv").config();
const mongoose = require('mongoose');
const userRouter=require("./routers/userRoute");
const express = require("express");
const cors = require("cors");
app = express();
//access data as json
app.use(express.json());
app.use(cors({ origin: "http://localhost:8100" }));
//create port
const PORT = process.env.PORT || 4000;
//mongodb connection
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database!"));


app.use("/api", userRouter);

app.listen(`${PORT}`, ()=>{
    console.log(`Server is running on port ${PORT}`);
})





