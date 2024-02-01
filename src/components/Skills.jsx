import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  userSkills,
  addASkill,
  updateASkill,
  deleteASkill,
} from "../redux/actions/userAction";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Skillscompoent = ({ match }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [skill_name, setSkillName] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [eleId, setEleId] = useState(null);
  const [addItem, setEAddItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.userSkillReducer);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    if (id) {
      dispatch(userSkills(id));
    }
  }, [deleteItem, dispatch]);

  const handleEditForm = () => setShowEditForm(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      skill_status: itemSelect,
      skill_name,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    let updateData = {
      skill_status: itemSelect,
      skill_name,
      id: eleId,
      uId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    //
    if (addItem) {
      dispatch(addASkill(data));
    } else {
      dispatch(updateASkill(updateData));
    }
    setShowEditForm(false);
  };
  const handleEditFunction = (element, status) => {
    setEditItem(element);

    setShowEditForm(true);
    setEAddItem(null);
    setSkillName(element.skill_name);
    setItemSelect(element.skill_status);
    setEleId(element._id);
  };

  const AddSkillHandler = () => {
    setShowEditForm(true);
    setEditItem(null);
    setEAddItem(true);
  };

  const deleteSkillHandler = (element) => {
    let updateData = {
      id: element._id,
      uId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    console.log(updateData);
    dispatch(deleteASkill(updateData));
    setDeleteItem(true);
  };

  return (
    <div>
      <div>
        <Modal
          className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
          show={showEditForm}
          onHide={handleEditForm}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-xl font-bold text-center">
              {editItem == null ? "Add New Skill" : "Update Skill"}{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 justify-center items-center"
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
                <select
                  value={itemSelect}
                  onChange={(e) => setItemSelect(e.target.value)}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
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
        {skills &&
          skills.map((item, index) => {
            return (
              <div key={item._id}>
                {index % 2 == 0 ? (
                  <div>
                    <div>
                      <div>
                        <p style={{ fontSize: "20px", fontWeight: "800" }}>
                          {item.skill_name}
                        </p>

                        <p style={{ fontWeight: "300" }}>
                          {item.skill_status && item.skill_status}{" "}
                        </p>
                      </div>
                      <div>
                        <p onClick={() => handleEditFunction(item, true)}>
                          <AiFillEdit />
                        </p>

                        <p onClick={() => deleteSkillHandler(item)}>
                          <AiFillDelete />
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="col-md-6"
                    style={{ marginLeft: "500px", marginTop: "-84px" }}
                  >
                    <div className="row">
                      <div className="col-md-8">
                        <p style={{ fontSize: "20px", fontWeight: "800" }}>
                          {item.skill_name}
                        </p>

                        <p style={{ fontWeight: "300" }}>
                          {" "}
                          {item.skill_status && item.skill_status}{" "}
                        </p>
                      </div>
                      <div className="col-md-4 mt-2">
                        <i
                          className="fas fa-2x fa-pencil-alt"
                          onClick={() => handleEditFunction(item, true)}
                        >
                          {" "}
                        </i>{" "}
                        {"    "}
                        <i
                          className="fas fa-2x fa-trash-alt"
                          onClick={() => deleteSkillHandler(item)}
                        ></i>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div>
        {/* <h3 style={{display:"flex",marginLeft:"20px"}}>Skills and endorsements</h3> */}
        <i className="fas  fa-plus" onClick={() => AddSkillHandler()}>
          {" "}
          Add Skill
        </i>
      </div>
    </div>
  );
};

export default Skillscompoent;
