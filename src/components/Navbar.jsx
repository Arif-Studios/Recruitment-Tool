import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const id = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))._id
    : null;
  const name = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser")).name
    : null;
  const typeUser = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser")).applitype
    : null;

  const modalRef = useRef();

  useEffect(() => {
    // Add event listener to close modal when clicking outside of it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="px-10 py-4 flex justify-between items-center bg-orange-400 w-full text-white">
        <h1 className="text-xl font-semibold">Job-Portal</h1>

        <div ref={modalRef} className="cursor-pointer">
          <h3 onClick={() => setToggle(!toggle)}> {name != null && name}</h3>
        </div>

        {id == null ? (
          <>
            <Link to="/login">Login</Link>
          </>
        ) : null}
      </div>

      <div
        ref={modalRef}
        className={`bg-primary flex flex-col gap-2 shadow-[black]/5 shadow-xl ${
          !toggle ? "hidden" : "flex"
        } p-6 bg-orange-400  absolute top-16 right-0 mx-4 my-2 min-w-[250px] rounded-xl dropDown`}
      >
        <div className="flex flex-col gap-6   text-md md:text-xl">
          <div className="flex text-white justify-between flex-col gap-3">
            <Link
              className="hover:border-b hover:border-b-2"
              to={`/profile/${id}`}
            >
              Profile
            </Link>
            <p className="flex flex-col gap-3">
              {typeUser != "recuiter" ? (
                <>
                  <Link
                    className="hover:border-b hover:border-b-2"
                    to="/myapplication"
                  >
                    My Application
                  </Link>
                </>
              ) : null}
              {typeUser == "recuiter" ? (
                <>
                  <Link
                    className="hover:border-b hover:border-b-2"
                    to="/createJobApp"
                  >
                    Create Job
                  </Link>
                  <Link
                    className="hover:border-b hover:border-b-2"
                    to="/jobView"
                  >
                    Job View
                  </Link>
                </>
              ) : null}
            </p>

            <button
              className="font-semibold"
              onClick={() => dispatch(logoutUser())}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
