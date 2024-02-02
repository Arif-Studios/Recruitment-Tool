import Job from "../models/jobSchema.js";
import JobOther from "../models/jobOtherSchema.js";
import JobSkill from "../models/jobSkillSchema.js";
import Application from "../models/applicationModel.js";

export const getAllJob = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.send(jobs);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ job });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in getting job: ", error.message);
  }
};

export const getMyJobPost = (req, res) => {
  Job.find({ userId: req.body.id })

    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserByJobId = (req, res) => {
  Application.find({ jobId: req.body.id })

    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getJobAppliById = async (req, res) => {
  try {
    const JobApp = await Application.find({ userId: req.body._id });
    if (!JobApp) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.status(200).json({ JobApp });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in getting job application: ", error.message);
  }
};

export const applyJob = async (req, res) => {
  try {
    const {
      userId,
      jobId,
      Appli_name,
      cover_letter,
      availability,
      Assessment,
      status,
    } = req.body;

    const job = new Application({
      userId,
      jobId,
      Appli_name,
      cover_letter,
      availability,
      Assessment,
      status,
    });
    await job.save();
    const obj = await Job.findById(jobId);

    obj.jobCount.push(userId);
    await obj.save();

    res.send("New job is Added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const addJob = async (req, res) => {
  try {
    const {
      location,
      job_title,
      comp_Name,
      job_duration,
      salary,
      job_Type,
      Work_From,
      userId,
    } = req.body;

    const job = new Job({
      location,
      job_title,
      comp_Name,
      job_duration,
      salary,
      job_Type,
      Work_From,
      userId,
    });
    await job.save();
    res.send("New job is Added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const addSkill = async (req, res) => {
  try {
    const { jobId, uskill } = req.body;

    const job = new JobSkill({
      jobId,
      uskill,
    });
    await job.save();
    res.send("New jobskill is Added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const addJobInfo = async (req, res) => {
  try {
    const { numOfposi, benefits, addiInfo, jobId, aboutcom } = req.body;

    const job = new JobOther({
      numOfposi,
      benefits,
      addiInfo,
      jobId,
      aboutcom,
    });
    await job.save();
    res.send("New JobOther is Added");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const jobAnotherId = (req, res) => {
  JobOther.find({ jobId: req.params.id })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const jobSkillById = (req, res) => {
  JobSkill.find({ jobId: req.params.id })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const applicationById = (req, res) => {
  Application.find({ _id: req.params.id })

    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const applicationRequest = async (req, res) => {
  const app = await Application.find({ _id: req.body.id });
  app[0].status = req.body.staType;
  await app[0].save();
};
