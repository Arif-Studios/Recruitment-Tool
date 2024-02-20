import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlljobPostofUser,
  userProfileAction,
} from "../redux/actions/userAction";
import SingleJob from "../components/SingleJob";
import Loading from "../components/Loading";

export default function JobView() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;

    if (id) {
      dispatch(userProfileAction(id));
      dispatch(getAlljobPostofUser(id));
    }
  }, []);

  const { jobsPost, loading } = useSelector(
    (state) => state.getUserAllJobPostReducer
  );

  return (
    <div className="my-16">
      <div>
        <h3 className="text-center text-2xl font-bold my-6">
          All My Job Post is Here
        </h3>

        <div style={{ marginLeft: "400px" }}>{loading && <Loading />}</div>

        {jobsPost.map((ele) => {
          return <SingleJob key={ele._id} item={ele} />;
        })}
      </div>
    </div>
  );
}
