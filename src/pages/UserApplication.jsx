import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJobAction,
  getAllJobAppliByuserId,
} from "../redux/actions/jobActions";

export default function UserApplication() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    dispatch(getAllJobAppliByuserId(id));
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const { myJob } = useSelector((state) => state.getJobAppliByUserIdReducer);
  const { jobs } = useSelector((state) => state.getAllJobReducer);

  return <div>UserApplication</div>;
}
