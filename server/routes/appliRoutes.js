import express from "express";
import {
  addEducation,
  addProject,
  allUserEducation,
  allUserProject,
  login,
  register,
} from "../controllers/applicantController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/allUserEdu", allUserEducation);
router.post("/addEdu", addEducation);

router.post("/allUserProject", allUserProject);
router.post("/addProject", addProject);

router.post("/addPortfolio");
router.post("/allUserPort");

router.post("/allUserSkill");
router.post("/addSkills");

router.post("/updateSkills");
router.post("/deleteSkills");
router.post("/profile/me");

export default router;
