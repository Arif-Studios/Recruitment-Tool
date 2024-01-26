import axios from "axios";

export const createNewJobAction = (user) => async (dispatch) => {
  dispatch({
    type: "USER_APPLY_JOB_REGISTER_REQUEST",
  });

  try {
    const res = await axios.post("http://localhost:5000/api/jobs/addjob", user);
    console.log(res);
    dispatch({
      type: "USER_APPLY_JOB_REGISTER_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "USER_APPLY_JOB_REGISTER_FAILED",
      payload: error,
    });
  }
};

export const getAllJobAction =
  (type, data = null) =>
  async (dispatch) => {
    dispatch({
      type: "GET_JOBS_REQUEST",
    });
    try {
      var response;

      if (type === "All") {
        const newData = await axios.get(
          "http://localhost:5000/api/jobs/getAllJob"
        );
        response = newData.data;
      }
      if (type === "Salary") {
        const newData = await axios.get(
          "http://localhost:5000/api/jobs/getAllJob"
        );
        const RdATA = newData.data.filter((item) => item.salary > data);
        response = RdATA;
      }
      if (type === "Location") {
        const newData = await axios.get(
          "http://localhost:5000/api/jobs/getAllJob"
        );
        const RdATA = newData.data.filter(
          (item) => item.location.toLowerCase() === data.toLowerCase()
        );
        response = RdATA;
      }

      dispatch({
        type: "GET_JOBS_SUCCESS",
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: "GET_JOBS_FAILED",
        payload: error,
      });
    }
  };
