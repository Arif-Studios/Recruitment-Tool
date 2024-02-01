import express from "express";
import {
  addEducation,
  addPortfolio,
  addProject,
  addSkills,
  allUserEducation,
  allUserPortfolio,
  allUserProject,
  allUserSkill,
  deleteSkills,
  login,
  profileMe,
  register,
  updateSkills,
} from "../controllers/applicantController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/allUserEdu", allUserEducation);
router.post("/addEdu", addEducation);

router.post("/allUserProject", allUserProject);
router.post("/addProject", addProject);

router.post("/addPortfolio", addPortfolio);
router.post("/allUserPort", allUserPortfolio);

router.get("/allUserSkill", allUserSkill);
router.post("/addSkills", addSkills);
router.post("/updateSkills", updateSkills);
router.post("/deleteSkills", deleteSkills);
router.post("/profile/me", profileMe);

export default router;
