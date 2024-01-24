import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    p_title: {
      type: String,
      required: true,
    },
    p_desc: {
      type: String,
    },
    start_time: {
      type: String,
    },

    end_time: {
      type: String,
    },
    p_link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
