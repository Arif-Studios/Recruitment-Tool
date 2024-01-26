import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../redux/actions/jobActions";
import Jobs from "../components/Jobs";
import Filter from "../components/Filter";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobAction("All"));
  }, [dispatch]);

  const { jobs } = useSelector((state) => state.getAllJobReducer);

  return (
    <div className="my-20">
      <h1 className="text-2xl text-center">Job Lists</h1>
      <div className="flex justify-between my-">
        <div className="w-1/4">
          <div style={{ position: "fixed" }}>
            <Filter />
          </div>
        </div>
        <div className="w-2/4">
          <Jobs jobs={jobs} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
