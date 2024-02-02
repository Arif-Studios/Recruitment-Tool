import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getApplicaByIdAction,
  getJobByIdAction,
} from "../redux/actions/jobActions";

export default function AppJobDetail() {
  const { jobid, appId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobByIdAction(jobid));
    dispatch(getApplicaByIdAction(appId));
  }, [appId, dispatch, jobid]);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const { applica } = useSelector((state) => state.getApplicationByIdReducer);
  const item = job.job;

  return (
    <div className="flex flex-col my-24">
      <div>
        <br />
        {applica && (
          <>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Cover Letter</h3>
              <p>{applica[0].cover_letter}</p>
              <h3 className="text-2xl font-bold">Availability</h3>
              <p>{applica[0].availability}</p>
              <h3 className="text-2xl font-bold">Assessment</h3>
              <p>{applica[0].Assessment}</p>
            </div>
          </>
        )}
      </div>

      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold">
            {item && item.job_title} Work from home job/internship at{" "}
            {item && item.comp_Name}
          </h2>
        </div>
      </div>
      <br />
      <div className="col-8 m-auto">
        <p>
          {" "}
          <b>Number Of Application: </b> {item && item.jobCount.length}
        </p>
      </div>

      <div className="max-w-xl rounded overflow-hidden mt-2 shadow-lg p-4">
        <div>
          {item && (
            <div key={item._id}>
              <h3>Job Title: {item.job_title}</h3>
              <p>{item.comName}</p>
              <p>Work From :{item.Work_From}</p>

              <p>location: {item.location}</p>

              <div>
                <div className="flex items-center gap-2">
                  <p>Duration: </p>
                  <p>{item.job_duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Salary: </p>
                  <p>{item.salary}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
