import mongoose from "mongoose";

const JobOthersSchema = mongoose.Schema(
  {
    jobId: { type: String, require },
    aboutcom: { type: String },
    numOfposi: { type: Number, require },
    benefits: { type: String },
    addiInfo: { type: String },
  },
  {
    timestamps: true,
  }
);

const JobOther = mongoose.model("Job", JobOthersSchema);
export default JobOther;
