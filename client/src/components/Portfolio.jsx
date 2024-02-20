import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  addUserPortfolioAction,
  getAllUserPortfolio,
} from "../redux/actions/userAction";
// import {addUserPortfolioAction,getAllUserPortfolio} from "../actions/user_action"

const Portfolio = ({ match }) => {
  const [location, setLocation] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [blog, setBlog] = useState("");
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    if (id) {
      dispatch(getAllUserPortfolio(id));
    }
  }, []);

  const { userPort } = useSelector((state) => state.userPortfolioReducer);
  //  console.log(userPort)
  const handleEditForm = () => setShowEditForm(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      location,
      mobile_no,
      github,
      linkedin,
      blog,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    console.log(data);
    dispatch(addUserPortfolioAction(data));
  };

  return (
    <div>
      <div>
        <Modal
          show={showEditForm}
          onHide={handleEditForm}
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          dialogClassName="modalclass"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-xl font-bold text-center">
              Add Your Portfolio Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div>
                <label htmlFor="">Mobile Number: </label>
                <input
                  required
                  type="text"
                  placeholder="9581515753"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={mobile_no}
                  onChange={(e) => setMobile_no(e.target.value)}
                />
              </div>

              <div className="edu_form">
                <label htmlFor="">Location </label>
                <input
                  type="text"
                  placeholder="Ex. Delhi"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="edu_form">
                <label htmlFor="">Github Link </label>
                <input
                  type="text"
                  placeholder="https://github.com/username"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
              <div className="edu_form">
                <label htmlFor="">Linkedin Account</label>
                <input
                  type="text"
                  placeholder="Linkedin Account Link"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
              <div className="edu_form">
                <label htmlFor="">Blog </label>
                <input
                  type="text"
                  placeholder="Your Webside Link"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={blog}
                  onChange={(e) => setBlog(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
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

      <div className="row">
        {/* <div className="col-md-1">
              <h1 style={{color:"#0a66c2"}}>{projects && projects.length}</h1>
          </div> */}
        <div className="col-md-11">
          {userPort &&
            userPort.map((item) => {
              return (
                <div
                  key={item._id}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p style={{ fontWeight: "bold" }}>GitHub profile</p>
                  <p>
                    {" "}
                    <a
                      href={item.github && item.github}
                      style={{ textDecoration: "none" }}
                    >
                      {item.github && item.github}
                    </a>{" "}
                  </p>
                  <p style={{ fontWeight: "bold" }}>Linkedin profile</p>
                  <p>
                    <a
                      href={item.linkedin && item.linkedin}
                      style={{ textDecoration: "none" }}
                    >
                      {item.linkedin && item.linkedin}
                    </a>{" "}
                  </p>
                  <p style={{ fontWeight: "bold" }}>Blog link</p>
                  <p>
                    {" "}
                    <a
                      href={item.blog && item.blog}
                      style={{ textDecoration: "none" }}
                    >
                      {item.blog && item.blog}
                    </a>{" "}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <button
          className="mt-3 bg-orange-400 p-2 text-white"
          onClick={() => setShowEditForm(true)}
        >
          + Add Portfolio
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
