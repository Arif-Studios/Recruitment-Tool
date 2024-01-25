import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.replace("/");
    }
  }, []);

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user));
    alert("User logged in ✅✅✅");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="text-2xl">Login to Job-Portal</h1>

        <form
          onSubmit={login}
          className="flex flex-col justify-center items-center  my-10 gap-2"
        >
          <input
            required
            type="email"
            placeholder="Email"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="transition-all duration-[300ms] ease-out border-2 border-orange-200 w-[150px] h-[40px] rounded-lg hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:btn-disabled "
          >
            Login
          </button>
          <br />
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Go to Register page
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
