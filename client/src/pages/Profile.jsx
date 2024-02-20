import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userProfileAction,
  userEducations,
  userProjects,
  userSkills,
} from "../redux/actions/userAction";
import Education from "../components/Education";
import Skillscompoent from "../components/Skills";
import Project from "../components/Project";
import Portfolio from "../components/Portfolio";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(userProfileAction(id));
      dispatch(userEducations(id));
      dispatch(userProjects(id));
      dispatch(userSkills(id));
    }
  }, []);
  const { cUser } = useSelector((state) => state.userProfileReducer);
  const { userPort } = useSelector((state) => state.userPortfolioReducer);

  return (
    <div>
      <h1 className="mt-10 text-center text-4xl">Profile</h1>
      <div className="bg-white shadow-lg my-14 p-10 flex flex-col gap-4">
        <div>
          <div>
            {cUser && cUser[0] && (
              <>
                <h2>{cUser[0].name.toUpperCase()}</h2>
                <p>{cUser[0].email}</p>
                <p> +91 {userPort && userPort[0] && userPort[0].mobile_no}</p>
                <p>{userPort && userPort[0] && userPort[0].location}</p>
              </>
            )}
          </div>
        </div>
        <hr />

        <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">Education Details</h4>
          </div>

          <div>
            <Education />
          </div>
        </div>

        <hr />

        <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">Skills Details</h4>
          </div>

          <div>
            <Skillscompoent />
          </div>
        </div>

        <hr />

        <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">PERSONAL PROJECTS</h4>
          </div>

          <div>
            <Project />
          </div>
        </div>
        <hr />

        <div className="cursor-pointer hover:bg-orange-300 p-4 hover:text-white hover:font-semibold flex flex-col gap-3">
          <div>
            <h4 className="text-2xl font-bold">PORTFOLIO</h4>
          </div>

          <div>
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
