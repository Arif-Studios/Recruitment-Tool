import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobAction,
  getAllJobAppliByuserId,
} from "../redux/actions/jobActions";
import { Link } from "react-router-dom";

export default function UserApplication() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    dispatch(getAllJobAppliByuserId(id));
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const { jobs } = useSelector((state) => state.getAllJobReducer);
  const { myJob } = useSelector((state) => state.getJobAppliByUserIdReducer);

  var arr = [];
  const modifyFyb = () => {
    var list =
      myJob &&
      jobs &&
      myJob?.JobApp?.forEach((element) => {
        jobs.forEach((item) => {
          if (element.jobId == item._id) {
            element.job_title = item.job_title;
            element.comp_Name = item.comp_Name;
            arr.push(element);
          }
        });
      });
  };
  modifyFyb();

  return (
    <div>
      <table className="w-full mt-6">
        <thead>
          <tr className="bg-orange-400 text-center text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">Serial No.</th>
            <th className="px-5 py-3">Company</th>
            <th className="px-5 py-3">Profile</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3">Application Status</th>
            <th className="px-5 py-3">Application Review</th>
          </tr>
        </thead>

        <tbody className="text-gray-500 ">
          {arr &&
            arr.map((apply, index) => {
              return (
                <tr
                  key={index}
                  className="text-center hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer"
                >
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {index + 1}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.comp_Name}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.job_title}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.createdAt.substring(0, 10)}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-center">
                      {apply?.status}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 px-5 py-5 text-sm">
                    <button className="mt-3 bg-orange-400 p-3 rounded-sm text-white">
                      <Link
                        to={`/myapplication/${apply._id}/job/${apply.jobId}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Detail
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
