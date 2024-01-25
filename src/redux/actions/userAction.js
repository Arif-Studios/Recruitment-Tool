import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({
    type: "USER_REGISTER_REQUEST",
  });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/applicant/register",
      user
    );

    dispatch({
      type: "USER_REGISTER_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAILED",
      payload: error,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/applicant/login",
      user
    );

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: res.data,
    });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: error,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.replace("/login");
};
