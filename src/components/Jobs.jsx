import React from "react";
import { Link } from "react-router-dom";

export default function Jobs({ jobs }) {
  return (
    <div>
      {jobs &&
        jobs.map((item) => (
          <div key={item._id} className="card mb-2 p-3">
            <h3>{item.job_title}</h3>
            <p>{item.comp_Name}</p>
            <p>Work From :{item.Work_From}</p>

            <p>location:{item.location}</p>

            <div className="row">
              <div className="col-1"></div>
              <div className="col-3">
                <p>start Date</p>
                <p>24 jan ,2023</p>
              </div>
              <div className="col-3">
                <p>Duration</p>
                <p>{item.job_duration}</p>
              </div>
              <div className="col-3">
                <p>Salary</p>
                <p>{item.salary}</p>
              </div>
            </div>
            <p>
              <b>Number of Application : </b>
              {item.jobCount.length}
            </p>
            <button
              className="btn btn-success btn_detail"
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
        ))}
    </div>
  );
}
