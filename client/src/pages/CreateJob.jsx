import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewJobAction } from "../redux/actions/jobActions";

export default function CreateJob() {
  const [job_title, setjobtitle] = useState("");
  const [comp_Name, setcomName] = useState("");
  const [job_duration, setjobduration] = useState("");
  const [salary, setsalary] = useState("");
  const [job_Type, setjobType] = useState("");
  const [Work_From, setWorkFrom] = useState("office");
  const [location, setlocation] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      job_title,
      comp_Name,
      job_duration,
      salary,
      job_Type,
      Work_From,
      location,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    dispatch(createNewJobAction(data));
    alert("Job Created ✅");
    setjobtitle("");
    setcomName("");
    setjobduration("");
    setsalary("");
    setjobType("");
    setWorkFrom("");
    setlocation("");
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center my-10">
        <div>
          <h3 className="text-2xl">Create A New Job Post</h3>
        </div>

        <form
          className="flex flex-col justify-center items-center my-6 gap-3"
          onSubmit={handleClick}
        >
          <input
            type="text"
            placeholder="Job Title"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={job_title}
            onChange={(e) => setjobtitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={comp_Name}
            onChange={(e) => setcomName(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Duration of Job/Intership"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={job_duration}
            onChange={(e) => setjobduration(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />

          <select
            value={job_Type}
            onChange={(e) => setjobType(e.target.value)}
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent cursor-pointer"
          >
            <option>Choose job type</option>
            <option value="job">Full-Time</option>
            <option value="intership">Internship</option>
          </select>
          {/* <input  type="text" placeholder="Job Type ex. job/intership" className="form-control job_form" value={jobType} 
             onChange={(e)=> setjobType(e.target.value)}  /> */}
          <select
            value={Work_From}
            onChange={(e) => setWorkFrom(e.target.value)}
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent cursor-pointer"
          >
            <option>Choose work place</option>
            <option value="onsite">On-Site</option>
            <option value="remote">Remote</option>
            <option value="both">Hybrid/Both</option>
          </select>
          {/* <input  type="text" placeholder="Work from : Office/Home/Both" className="form-control job_form" value={WorkFrom}
      onChange={(e)=> setWorkFrom(e.target.value)}  /> */}

          <br />
          <button
            className="transition-all duration-[300ms] ease-out border-2 border-orange-200 w-[150px] h-[40px] rounded-lg hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:btn-disabled "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
