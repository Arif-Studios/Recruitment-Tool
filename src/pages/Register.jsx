import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/userAction";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [itemSelect, setItemSelect] = useState("");

  const registerState = useSelector((state) => state.userReducer);
  const { error, loading, success } = registerState;
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("password does not matched");
    } else {
      const user = { name, email, password, applitype: itemSelect };

      dispatch(registerUser(user));
      alert("User registerd ✅✅✅");
      window.location.replace("/login");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center my-20">
        <h1 className="text-2xl">Register to Job-Portal</h1>

        <form
          onSubmit={register}
          className="flex flex-col justify-center items-center  my-10 gap-2"
        >
          <input
            required
            type="text"
            placeholder="Name"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            required
            type="password"
            placeholder="Confirm Password"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
          />

          <select
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent cursor-pointer"
            value={itemSelect}
            onChange={(e) => setItemSelect(e.target.value)}
          >
            {" "}
            <option>Select</option>
            <option value="recuiter">Recuiter</option>
            <option value="candidate">Candidate</option>
          </select>

          <button
            type="submit"
            className="transition-all duration-[300ms] ease-out border-2 border-orange-200 w-[150px] h-[40px] rounded-lg hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:btn-disabled "
          >
            Register
          </button>
          <br />
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Go to login page
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}
