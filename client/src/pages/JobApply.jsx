import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userProfileAction,
  userEducations,
  userProjects,
  userSkills,
} from "../redux/actions/userAction";
import {
  applyForJobAction,
  getJobByIdAction,
} from "../redux/actions/jobActions";
import { useParams } from "react-router-dom";

export default function JobApply() {
  const { id } = useParams();
  const [letter, setLetter] = useState("");
  const [availability, setAvailability] = useState("");
  const [Assessment, setAssessment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("currentUser"))._id;

    if (userId) {
      dispatch(getJobByIdAction(id));
      dispatch(userProfileAction(userId));
      dispatch(userEducations(userId));
      dispatch(userProjects(userId));
      dispatch(userSkills(userId));
    }
  }, [dispatch, id]);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const item = job.job;

  const handleSubmit = () => {
    const obj = {
      cover_letter: letter,
      availability: availability,
      Assessment: Assessment,
      Appli_name: JSON.parse(localStorage.getItem("currentUser")).name,
      jobId: id,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    dispatch(applyForJobAction(obj));
    setLetter("");
    setAvailability("");
    setAssessment("");
  };

  return (
    <div className="flex flex-col justify-center my-20">
      <div className="mx-20">
        <h3 className="text-2xl font-bold text-center mb-10">
          {item.job_title} job/internship at {item && item.comp_Name}
        </h3>

        <div>
          <h3 className="text-xl font-semibold">Cover letter</h3>
          <p>Why should you be hired for this role?</p>
          <textarea
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-[600px]"
            value={letter}
            rows="5"
            onChange={(e) => setLetter(e.target.value)}
          />
        </div>
        <br />
        <div>
          <h3 className="text-xl font-semibold">Your availability</h3>
          <textarea
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-[600px]"
            rows="2"
            onChange={(e) => setAvailability(e.target.value)}
            value={availability}
            placeholder="ex. I am available for 3 months starting immediately for a full-time internship"
          />
        </div>
        <br />
        <div>
          <h3 className="text-xl font-semibold">Assessment</h3>
          <p>
            Q1. If you have any experience in {item && item.jobtitle}, please
            share. If you want to share any documents or files, please upload it
            on Google Drive or Dropbox and paste the public link in the answer.
          </p>
          <textarea
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-[600px]"
            rows="3"
            onChange={(e) => setAssessment(e.target.value)}
            value={Assessment}
          />
        </div>
        <br />
        <button
          className="bg-orange-400 text-white font-semibold rounded-md  p-3 "
          style={{ textalign: "center" }}
          onClick={() => handleSubmit()}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}
