import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { userProjects, addProject } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

const Project = ({ match }) => {
  const [p_title, setP_Title] = useState("");
  const [p_desc, setP_Desc] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [p_link, setPLink] = useState("");
  const [lan_type, setLanType] = useState("");
  const [item, setItem] = useState(" ");

  const dispatch = useDispatch();

  const [showEditForm, setShowEditForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    if (id) {
      dispatch(userProjects(id));
    }
  }, []);

  const { projects } = useSelector((state) => state.userProjectReducer);

  const handleEditForm = () => setShowEditForm(false);
  const handleProjectForm = () => setShowProjectForm(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      p_title,
      p_desc,
      start_time,
      end_time,
      p_link,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    dispatch(addProject(data));
  };

  const onSubmitLanguage = (e) => {
    e.preventDefault();
    const data = {
      lan_skill: item,
      lan_name: lan_type,
      userId: match.params.id,
    };
    //   dispatch(addSLanguage(data))
  };
  return (
    <div>
      <div>
        <Modal
          show={showEditForm}
          onHide={handleEditForm}
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          dialogClassName="modalclass"
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Accomplishments</Modal.Title> */}
          </Modal.Header>

          <Modal.Body>
            <h3 className="text-xl font-bold text-center  pb-4">Add Project</h3>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div>
                <input
                  required
                  type="text"
                  placeholder="Project Title"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={p_title}
                  onChange={(e) => setP_Title(e.target.value)}
                />
              </div>

              <div>
                <input
                  required
                  type="text"
                  placeholder="Project discription"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={p_desc}
                  onChange={(e) => setP_Desc(e.target.value)}
                />
              </div>

              <div>
                <input
                  required
                  type="text"
                  placeholder="project start date"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={start_time}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>

              <div>
                <input
                  required
                  type="text"
                  placeholder="project end Date"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={end_time}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>

              <div>
                <input
                  required
                  type="text"
                  placeholder="Project Link"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={p_link}
                  onChange={(e) => setPLink(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-orange-400 text-white font-semibold rounded-md  px-2"
                  type="submit"
                  style={{
                    height: "50px",
                    width: "90px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
          <br />
          <br />
        </Modal>
      </div>

      {/* <button type="button" class="btn btn-primary"  onClick={() => setShowEditForm(true)}>+</button> */}

      <div className="row">
        {/* <div className="col-md-1">
                    <h1 style={{color:"#0a66c2"}}>{projects && projects.length}</h1>
                </div> */}
        <div className="col-md-11">
          {projects &&
            projects.map((item) => {
              return (
                <div
                  key={item._id}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h4 style={{ alignSelf: "flex-start" }}>
                    <span className="font-semibold">Project Title: </span>
                    {item.p_title}
                  </h4>
                  <p>
                    {" "}
                    <span className="font-semibold">Project Desc: </span>
                    {item.p_desc}
                  </p>

                  <p>
                    <span className="font-semibold">Study From: </span>{" "}
                    {item.start_time}
                    <span className="font-semibold">Study To: </span>{" "}
                    {item.end_time}
                  </p>

                  <p style={{ textAlign: "start", fontSize: 18 }}>
                    <Link to={item.p_link} className="text-orange-500 italic">
                      See Project
                    </Link>
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div style={{}}>
        {/* <h3 style={{display:"flex",marginLeft:"20px"}}>Skills and endorsements</h3> */}
        <button
          className="mt-3 bg-orange-400 p-2 text-white"
          onClick={() => setShowEditForm(true)}
        >
          + Add Project
        </button>
      </div>
    </div>
  );
};

export default Project;
