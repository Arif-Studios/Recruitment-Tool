import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getAllUserByJobIdAction,
  getAppReqStatusByIdAction,
} from "../redux/actions/jobActions";
import { Modal } from "react-bootstrap";

export default function JobApplicant() {
  const { id } = useParams();
  const [showEditForm, setShowEditForm] = useState(false);
  const [modelData, setModelData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserByJobIdAction(id));
  }, []);

  const { appliList } = useSelector((state) => state.getUserbyjobIdReducer);
  const filterList =
    appliList && appliList.filter((item) => item.status == "Under Process");

  const handleClick = (item) => {
    setShowEditForm(true);
    setModelData(item);
  };

  const handleAcceptReq = (id, staType) => {
    const obj = {
      id,
      staType,
    };
    dispatch(getAppReqStatusByIdAction(obj));
    alert(staType);
  };

  return (
    <div>
      <div className="my-20 text-xl font-semibold">
        <h3 style={{ textAlign: "center" }}>
          Number Of Applicant {filterList && filterList.length}
        </h3>
        <table className="md:w-[1000px] w-[500px] mx-auto mt-6">
          <thead>
            <tr className="bg-orange-400 text-center text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3 text-[10px]">Serial No</th>
              <th className="px-5 py-3 text-[10px]">Applicant Name</th>
              <th className="px-5 py-3 text-[10px]">Apply Date</th>
              <th className="px-5 py-3 text-[10px]">Profile</th>
              <th className="px-5 py-3 text-[10px]">Response</th>
              <th className="px-5 py-3 text-[10px]">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-500 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer">
            {filterList.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {index + 1}
                    </p>
                  </td>
                  <td className="border-b border-gray-200  px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-center">
                          {item.Appli_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200  px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">
                      {item.createdAt.substring(0, 10)}
                    </p>
                  </td>
                  <td className="border-b border-gray-200  px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">
                      <Link
                        to={`/profile/${item.userId}`}
                        className="font-bold"
                      >
                        See Here
                      </Link>{" "}
                    </p>
                  </td>
                  <td className="border-b border-gray-200  px-5 py-5 text-sm">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleClick(item)}
                    >
                      See Res
                    </button>{" "}
                  </td>
                  <td className="border-b border-gray-200   px-5 py-5 text-sm">
                    <button
                      className="bg-orange-500 p-2 text-white my-2 w-fit mx-2"
                      onClick={() => handleAcceptReq(item._id, "Selected")}
                    >
                      Select
                    </button>
                    <button
                      className="bg-red-500 p-2 text-white my-2 w-fit"
                      onClick={() => handleAcceptReq(item._id, "Rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <Modal
            className="bg-white shadow-lg w-[500px] flex justify-center items-center mx-auto absolute top-[30%] left-[30%] p-6"
            show={showEditForm}
            onHide={setShowEditForm}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-xl font-bold text-center">
                Applicant Response
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h4>Cover Letter</h4>
                <p>{modelData && modelData.cover_letter}</p>
              </div>
              <br />
              <div>
                <h4>Availability</h4>
                <p>{modelData && modelData.availability}</p>
              </div>
              <br />
              <div>
                <h4>Assessment</h4>
                <p>{modelData && modelData.Assessment}</p>
              </div>
            </Modal.Body>
            <br />
          </Modal>
        </div>
      </div>
    </div>
  );
}
