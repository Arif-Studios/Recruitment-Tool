import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    inst_name: {
      type: String,
      required: true,
    },
    cour_name: {
      type: String,
    },
    cour_type: {
      type: String,
    },
    study_from: {
      type: String,
    },
    study_to: {
      type: String,
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", EducationSchema);
export default Education;
