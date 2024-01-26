import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobAction } from "../redux/actions/jobActions";

const Filter = () => {
  const checkValue = [5000, 10000, 15000, 25000, 50000];
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(getAllJobAction("Salary", e.target.value));
    }
  };

  return (
    <div className="bg-white shadow-lg p-5">
      <div className="">
        <p className="text-lg font-bold">Filter By Salary</p>
        {checkValue.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <input
              type="checkbox"
              value={item}
              id={item.value}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flexCheckDefault" style={{ marginTop: "7px" }}>
              {item} br
            </label>
          </div>
        ))}
      </div>

      <div className="mt-3 p-1">
        <p className="font-bold text-lg">Filter By Location</p>
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="location"
          className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mr-2"
        />

        <button
          type="button"
          className="bg-orange-400 p-2 rounded-md items-end justify-end text-white"
          onClick={() => dispatch(getAllJobAction("Location", searchKey))}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
