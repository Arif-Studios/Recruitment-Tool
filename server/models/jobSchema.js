import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    job_title: { type: String, require },
    comp_Name: { type: String, require },
    job_duration: { type: Number, require },
    salary: { type: Number, require },
    job_Type: { type: String, require },
    Work_From: { type: String, require },
    location: { type: String, require },
    userId: { type: String, require },
    jobCount: [],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
