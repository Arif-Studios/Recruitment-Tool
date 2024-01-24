import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    applitype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Applicant = mongoose.model("Applicant", ApplicantSchema);
export default Applicant;
