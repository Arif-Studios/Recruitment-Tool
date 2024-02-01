/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import {
  getJobByIdAction,
  getAllUserByJobIdAction,
  getJobAnotherByIdAction,
  getJobSkillByIdAction,
  addSkillForJob,
  addOtherInfoForJob,
} from "../redux/actions/jobActions";

const DetailJob = ({ match }) => {
  const { id } = useParams();

  const [showEditForm, setShowEditForm] = useState(false);
  const [showComAddForm, setshowComAddForm] = useState(false);
  const [skill_name, setSkillName] = useState("");
  const [aboutcom, setaboutcom] = useState("");
  const [numOfposi, setnumOfposi] = useState("");
  const [benefits, setbenefits] = useState("");
  const [addiInfo, setaddiInfo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobByIdAction(id));
    dispatch(getJobSkillByIdAction(id));
    dispatch(getJobAnotherByIdAction(id));
    dispatch(getAllUserByJobIdAction(id));
  }, []);
  const userId = JSON.parse(localStorage.getItem("currentUser"))._id;
  const handleEditForm = () => setShowEditForm(false);
  const handleComAddForm = () => setshowComAddForm(false);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const { jobanother } = useSelector((state) => state.getJobOtherByIdReducer);
  const { jobskill } = useSelector((state) => state.getJobSkillByIdReducer);
  const { appliList } = useSelector((state) => state.getUserbyjobIdReducer);

  const item = job.job;

  //  const ApplyBool = appliList && appliList.forEach(item =>{
  //   if(item.userId == userId && item.postId == match.params.id){
  //     return true
  //   }
  //   return false
  //  })

  //  console.log(ApplyBool)

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      jobId: id,
      uskill: skill_name,
    };

    dispatch(addSkillForJob(data));
    setShowEditForm(false);
    setSkillName("");
  };

  const onComInfoSubmit = (e) => {
    e.preventDefault();
    let data = {
      aboutcom,
      numOfposi,
      benefits,
      addiInfo,
      jobId: id,
    };
    dispatch(addOtherInfoForJob(data));
    setshowComAddForm(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center">
            Detail about the Job
          </h2>
        </div>
      </div>
      <br />
      <div className="col-8 m-auto">
        <p>
          {" "}
          <b>Number Of Application: </b> {item?.jobCount?.length}
        </p>
      </div>

      <table className="w-full mt-6">
        <thead>
          <tr className="bg-orange-400 text-center text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">Job Title</th>
            <th className="px-5 py-3">Company Name</th>
            <th className="px-5 py-3">Work From</th>
            <th className="px-5 py-3">Location</th>
            <th className="px-5 py-3">Duration</th>
            <th className="px-5 py-3">Salary</th>
          </tr>
        </thead>

        <tbody className="text-gray-500 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer">
          <tr className="text-center">
            <td className="border-b border-gray-200 px-5 py-5 text-sm">
              <p className="whitespace-no-wrap text-center">
                {item?.job_title}
              </p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="whitespace-no-wrap text-center">
                    {item?.comp_Name}
                  </p>
                </div>
              </div>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.Work_From}</p>
            </td>

            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.location}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.job_duration}</p>
            </td>
            <td className="border-b border-gray-200  px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item?.salary}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-5">
        <div className="col-8 m-auto">
          <h4 className="text-xl font-bold">{item && item.comp_Name}</h4>
          <p>{jobanother && jobanother[0] && jobanother[0].aboutcom}</p>
        </div>
      </div>

      <div className="row">
        <div className="flex flex-col gap-1">
          <h3>Skill(s) required</h3>

          <div className="flex gap-2">
            {" "}
            {jobskill.map((item) => (
              <div className="w-fit" key={item._id}>
                <p className="bg-gray-200 p-2">{item.uskill}</p>
              </div>
            ))}
          </div>

          {item?.userId === userId && (
            <button
              className="bg-orange-500 p-2 text-white my-2 w-fit"
              onClick={() => setShowEditForm(true)}
            >
              + Add Skill
            </button>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div>
          <h3 className="text-xl font-bold">Who Can Apply</h3>
          <p>1. are available for the work from home job/internship</p>
          <p>2. have relevant skills and interests</p>
          <p>
            3. are available for duration of {item && item.job_duration} months
          </p>
        </div>
      </div>
      <br />
      <div>
        <div className="flex gap-2 items-center">
          <h3 className="text-xl font-bold">Number of openings: </h3>

          <span>
            {" "}
            {jobanother && jobanother[0] && jobanother[0].numOfposi}{" "}
          </span>
        </div>
      </div>

      <div>
        {item && item.userId !== userId && (
          <div>
            {item && item.jobCount?.includes(userId) ? (
              <button
                disabled
                className="bg-orange-500 disabled:cursor-not-allowed p-2 text-white my-2 w-fit"
              >
                Already Applied
              </button>
            ) : (
              <Link to={`/apply/${id}`}>
                <button className="bg-orange-500 p-2 text-white my-2 w-fit">
                  Apply Now
                </button>
              </Link>
            )}
          </div>
        )}
        {item && item.userId == userId && (
          <div className="col-2 m-auto">
            <button
              className="bg-orange-500 p-2 text-white my-2 w-fit"
              onClick={() => setshowComAddForm(true)}
            >
              {" "}
              Add More Information
            </button>
          </div>
        )}
      </div>

      <div>
        <Modal
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          show={showEditForm}
          onHide={handleEditForm}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-xl font-bold text-center">
              Add A Skill For Job
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-3 justify-center items-center"
              onSubmit={onSubmit}
            >
              <div>
                <input
                  required
                  type="text"
                  placeholder="Ex. javascript"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={skill_name}
                  onChange={(e) => setSkillName(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-orange-400 text-white font-semibold rounded-md  px-2"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </Modal.Body>
          <br />
          <br />
        </Modal>
      </div>

      <div>
        <Modal
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          show={showComAddForm}
          onHide={handleComAddForm}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-xl font-bold text-center">
              Add Info About Company
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col gap-3 justify-center items-center"
              onSubmit={onComInfoSubmit}
            >
              <div>
                <input
                  type="text"
                  placeholder="About Company"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={aboutcom}
                  onChange={(e) => setaboutcom(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="Number"
                  placeholder="Number of Position"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={numOfposi}
                  onChange={(e) => setnumOfposi(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Benefits from Company"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={benefits}
                  onChange={(e) => setbenefits(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Additional Info"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={addiInfo}
                  onChange={(e) => setaddiInfo(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-orange-400 text-white font-semibold rounded-md  px-2"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    height: "50px",
                    width: "90px",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </Modal.Body>
          <br />
          <br />
        </Modal>
      </div>
    </div>
  );
};

export default DetailJob;
