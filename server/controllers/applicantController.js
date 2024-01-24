import Applicant from "../models/applicant/applicantModel.js";
import Education from "../models/applicant/educationModel.js";
import Project from "../models/applicant/projectModel.js";
import AppliSkill from "../models/applicant/appliSkillModel.js";
import Portfolio from "../models/applicant/portfolioModel.js";

//Add applicant
export const register = async (req, res) => {
  const { name, email, password, applitype } = req.body;

  const newUser = new Applicant({ name, email, password, applitype });

  try {
    await newUser.save();
    res.send("new user create successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Applicant.find({ email, password });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        applitype: user[0].applitype,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went weong" });
  }
};

//Education
export const addEducation = (req, res) => {
  const { cour_name, inst_name, cour_type, study_from, study_to, userId } =
    req.body;
  const newSave = new Education({
    cour_name,
    inst_name,
    cour_type,
    study_from,
    study_to,
    userId,
  });
  newSave
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const allUserEducation = async (req, res) => {
  Education.find({ userId: req.body.id })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Project
export const addProject = (req, res) => {
  const { userId, p_title, p_desc, start_time, end_time, p_link } = req.body;
  const newSave = new Project({
    userId,
    p_title,
    p_desc,
    start_time,
    end_time,
    p_link,
  });
  newSave
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const allUserProject = (req, res) => {
  Project.find({ userId: req.body.id })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};
