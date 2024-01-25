import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    job_title: { type: String, required: true },
    comp_Name: { type: String, required: true },
    job_duration: { type: Number, required: true },
    salary: { type: Number, required: true },
    job_Type: { type: String, required: true },
    Work_From: { type: String, required: true },
    location: { type: String, required: true },
    userId: { type: String, required: true },
    jobCount: [],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
