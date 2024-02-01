import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import {
  userProfileAction,
  userEducations,
  addEducation,
  userProjects,
  userSkills,
} from "../redux/actions/userAction";
// import {userEducations,addEducation} from "../actions/user_action"

const Education = ({ match }) => {
  const [cour_name, setCourName] = useState("");
  const [inst_name, setInstName] = useState("");
  const [cour_type, setCourType] = useState("");
  const [study_from, setStudyFom] = useState("");
  const [study_to, setStudyTo] = useState("");
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    if (id) {
      dispatch(userEducations(id));
    }
  }, [dispatch]);

  const { userEduc } = useSelector((state) => state.userEduReducer);
  const handleEditForm = () => setShowEditForm(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      cour_name,
      inst_name,
      cour_type,
      study_from,
      study_to,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    dispatch(addEducation(data));
    setShowEditForm(false);
    alert("Education Added ✅");
  };

  return (
    <div>
      <div>
        <Modal
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          show={showEditForm}
          onHide={handleEditForm}
          animation={true}
          dialogClassName="modalclass"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-xl font-bold text-center">
              Add Education
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 items-center"
            >
              <div>
                <label htmlFor="">School* </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Unity university"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={inst_name}
                  onChange={(e) => setInstName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="">Degree </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Bachelor"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={cour_name}
                  onChange={(e) => setCourName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="">Field of study </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. CS"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={cour_type}
                  onChange={(e) => setCourType(e.target.value)}
                />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="">Start Date</label>
                <input
                  required
                  type="text"
                  placeholder="Start Date"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={study_from}
                  onChange={(e) => setStudyFom(e.target.value)}
                />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="">End Date </label>
                <input
                  required
                  type="text"
                  placeholder="End Date"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  value={study_to}
                  onChange={(e) => setStudyTo(e.target.value)}
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
        {userEduc &&
          userEduc.map((item) => {
            return (
              <div
                key={item._id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>
                  <span className="font-semibold">Institution Name:</span>{" "}
                  {item.inst_name}
                </p>
                <h4>
                  <span className="font-semibold">Course Name:</span>{" "}
                  {item.cour_type && item.cour_type}
                </h4>
                <p>
                  <span className="font-semibold">Level:</span> {item.cour_name}
                </p>

                <p>
                  <span className="font-semibold">Study From: </span>{" "}
                  {item.study_from && item.study_from}
                  <span className="font-semibold">Study To: </span>{" "}
                  {item.study_to && item.study_to}
                </p>
              </div>
            );
          })}
      </div>

      <div>
        <button
          className="mt-3 bg-orange-400 p-2 text-white"
          onClick={() => setShowEditForm(true)}
        >
          + Add Education
        </button>
      </div>
    </div>
  );
};

export default Education;
