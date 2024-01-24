import express from "express";
import connectDB from "./db/connectDB.js";
import applicantRoutes from "./routes/appliRoutes.js";

const app = express();

app.use(express.json());

//Connect to database
connectDB();

//Routes
app.use("/api/applicant/", applicantRoutes);

const port = 5000;
app.listen(port, () => console.log("Server is worked"));
