import mongoose from "mongoose";

const JobOthersSchema = mongoose.Schema(
  {
    jobId: { type: String, required: true },
    aboutcom: { type: String },
    numOfposi: { type: Number, required: true },
    benefits: { type: String },
    addiInfo: { type: String },
  },
  {
    timestamps: true,
  }
);

const JobOther = mongoose.model("JobOther", JobOthersSchema);
export default JobOther;
