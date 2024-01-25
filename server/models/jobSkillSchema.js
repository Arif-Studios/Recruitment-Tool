import mongoose from "mongoose";

const JobSkillSchema = mongoose.Schema(
  {
    jobId: { type: String, required: true },
    uskill: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const JobSkill = mongoose.model("JobSkill", JobSkillSchema);
export default JobSkill;
