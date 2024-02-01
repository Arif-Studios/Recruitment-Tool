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
  console.log(id);

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
    dispatch(getJobSkillByIdAction(match?.params.id));
    dispatch(getJobAnotherByIdAction(match?.params.id));
    dispatch(getAllUserByJobIdAction(match?.params.id));
  }, []);
  const userId = JSON.parse(localStorage.getItem("currentUser"))._id;
  const handleEditForm = () => setShowEditForm(false);
  const handleComAddForm = () => setshowComAddForm(false);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const { jobanother } = useSelector((state) => state.getJobOtherByIdReducer);
  const { jobskill } = useSelector((state) => state.getJobSkillByIdReducer);
  const { appliList } = useSelector((state) => state.getUserbyjobIdReducer);

  const item = job.job;
  console.log(jobanother);

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
      jobId: match.params.id,
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
      jobId: match.params.id,
    };
    dispatch(addOtherInfoForJob(data));
    setshowComAddForm(false);
    console.log(data);
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

      <div className="mt-5">
        <div className="col-8 m-auto">
          <h4 className="text-xl font-bold">{item && item.comp_Name}</h4>
          <p>{jobanother && jobanother[0] && jobanother[0].aboutcom}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-8 m-auto">
          <h3>Skill(s) required</h3>
          {item && item.userId !== userId && (
            <button
              className="bg-black p-5"
              onClick={() => setShowEditForm(true)}
            >
              + Add Skill
            </button>
          )}

          {jobskill &&
            jobskill.map((item) => (
              <div key={item._id}>
                <p
                  style={{
                    fontSize: "18px",
                    marginRight: "15px",
                    float: "left",
                  }}
                >
                  {item.uskill}
                </p>
              </div>
            ))}
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-8 m-auto">
          <h3>Who Can Apply</h3>
          <p>1. are available for the work from home job/internship</p>
          <p>2. have relevant skills and interests</p>
          <p>
            3. are available for duration of {item && item.job_duration} months
          </p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-8 m-auto">
          <h3>Number of openings</h3>

          <p> {jobanother && jobanother[0] && jobanother[0].numOfposi} </p>
        </div>
      </div>
      <div className="row">
        {item && item.userId !== userId && (
          <div className="col-2 m-auto">
            {item && item.jobCount?.includes(userId) ? (
              <button className="btn btn-block">Already Applied</button>
            ) : (
              <Link to={`/apply/${match?.params.id}`}>
                <button className="btn btn-success m-auto">Apply Now</button>
              </Link>
            )}
          </div>
        )}
        {item && item.userId == userId && (
          <div className="col-2 m-auto">
            <button
              className="btn btn-success m-auto"
              onClick={() => setshowComAddForm(true)}
            >
              {" "}
              Add More Infor
            </button>
          </div>
        )}
      </div>

      <div>
        <Modal show={showEditForm} onHide={handleEditForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Skill For Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  required
                  type="text"
                  placeholder="Ex. javascript"
                  className="form-control"
                  value={skill_name}
                  onChange={(e) => setSkillName(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <button className="btn btn-primary" type="submit">
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
          show={showComAddForm}
          onHide={handleComAddForm}
          animation={false}
          size="lg"
          centered
          dialogClassName="modalclass"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Info About Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={onComInfoSubmit}>
              <div className="edu_form">
                <input
                  type="text"
                  placeholder="About Company"
                  className="form-control edr_class"
                  value={aboutcom}
                  onChange={(e) => setaboutcom(e.target.value)}
                />
              </div>

              <div className="edu_form">
                <input
                  type="Number"
                  placeholder="Number of Position"
                  className="form-control edr_class"
                  value={numOfposi}
                  onChange={(e) => setnumOfposi(e.target.value)}
                />
              </div>

              <div className="edu_form">
                <input
                  type="text"
                  placeholder="Benefits from Company"
                  className="form-control edr_class"
                  value={benefits}
                  onChange={(e) => setbenefits(e.target.value)}
                />
              </div>
              <div className="edu_form">
                <input
                  type="text"
                  placeholder="Additional Info"
                  className="form-control edr_class"
                  value={addiInfo}
                  onChange={(e) => setaddiInfo(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <button
                  className="btn btn-primary"
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
