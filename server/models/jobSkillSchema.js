import mongoose from "mongoose";

const JobSkillSchema = mongoose.Schema(
  {
    jobId: { type: String, require },
    uskill: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const JobSkill = mongoose.model("Job", JobSkillSchema);
export default JobSkill;
