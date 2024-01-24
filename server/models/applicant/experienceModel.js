import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    company_name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
    },
    join_from: {
      type: String,
    },
    to_to: {
      type: String,
    },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;
