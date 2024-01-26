import express from "express";
import {
  addJob,
  addJobInfo,
  addSkill,
  applicationById,
  applicationRequest,
  applyJob,
  getAllJob,
  getJobAppliById,
  getMyJobPost,
  getSingleJob,
  getUserByJobId,
  jobAnotherId,
  jobSkillById,
} from "../controllers/jobControllers.js";

const router = express.Router();

router.get("/getAllJob", getAllJob);
router.get("/job/:id", getSingleJob);

router.post("/getMyjobPost", getMyJobPost);
router.post("/getUserByjobId", getUserByJobId);

router.post("/getJobAppliByuserId", getJobAppliById);
router.post("/applyjob", applyJob);

router.post("/addjob", addJob);
router.post("/addskill", addSkill);

router.post("/addjobinfo", addJobInfo);
router.get("/jobanother/:id", jobAnotherId);
router.get("/jobskill/:id", jobSkillById);
router.get("/application/:id", applicationById);
router.post("/appReqRe", applicationRequest);

export default router;
