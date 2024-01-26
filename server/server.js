import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import applicantRoutes from "./routes/appliRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

//Connect to database
connectDB();

//Routes
app.use("/api/jobs/", jobRoutes);
app.use("/api/applicant/", applicantRoutes);

const port = 5000;
app.listen(port, () => console.log("Server is worked"));
