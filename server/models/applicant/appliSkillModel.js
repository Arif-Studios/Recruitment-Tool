import mongoose from "mongoose";

const AppSkillSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    skill_name: {
      type: String,
      required: true,
    },
    skill_status: {
      type: String,
      default: "Beginner",
    },
  },
  { timestamps: true }
);

const AppliSkill = mongoose.model("AppliSkill", AppSkillSchema);
export default AppliSkill;
