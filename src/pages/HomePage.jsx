import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../redux/actions/jobActions";
import Jobs from "../components/Jobs";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const jobs = useSelector((state) => state.getAllJobReducer);

  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <div style={{ position: "fixed" }}>{/* <Filter /> */}</div>
        </div>
        <div className="col-6">
          <Jobs jobs={jobs} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
