import React from "react";
import { Link } from "react-router-dom";

export default function Jobs({ jobs }) {
  return (
    <div>
      {jobs &&
        jobs.map((item) => (
          <div key={item._id} className="flex flex-col">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.job_title}</div>
                <p className="text-gray-700 text-base">{item.comp_Name}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.Work_From}
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.job_Type}
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.location}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.job_duration} Months
                </span>

                <div className="flex gap-2 items-center my-4">
                  <p className="font-semibold">Salary: </p>
                  <p>{item.salary} br</p>
                </div>

                <p className="text-gray-700 text-base mt-4 font-semibold">
                  Number of Application :{item.jobCount.length}
                </p>
              </div>
              <button
                className="bg-orange-400 p-2 rounded-md items-end justify-end"
                style={{ width: "120px" }}
              >
                <Link
                  to={`/job/${item._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Detail
                </Link>{" "}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
