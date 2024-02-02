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

export const getJobByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "GET_JOB_BY_ID",
  });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/jobs/job/${id}`
    );
    dispatch({
      type: "GET_JOB_BY_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_JOB_BY_ID_FAILED",
      payload: error,
    });
  }
};

export const getJobSkillByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "GET_JOB_SKILL_BY_ID",
  });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/jobs/jobskill/${id}`
    );
    dispatch({
      type: "GET_JOB_SKILL_BY_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_JOB_SKILL_BY_ID_FAILED",
      payload: error,
    });
  }
};

export const getJobAnotherByIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "GET_JOB_OTHER_BY_ID",
  });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/jobs/jobanother/${id}`
    );
    dispatch({
      type: "GET_JOB_OTHER_BY_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_JOB_OTHER_BY_ID_FAILED",
      payload: error,
    });
  }
};

export const getAllUserByJobIdAction = (id) => async (dispatch) => {
  dispatch({
    type: "USER_USER_BY_JOB_ID_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/jobs/getUserByjobId",
      { id }
    );

    dispatch({
      type: "USER_USER_BY_JOB_ID_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_USER_BY_JOB_ID_FAILED",
      payload: error,
    });
  }
};

export const addOtherInfoForJob = (post) => async (dispatch) => {
  dispatch({
    type: "ADD_JOB_INFO_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/jobs/addjobinfo",
      post
    );

    dispatch({
      type: "ADD_JOBS_INFO_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_JOB_INFO_FAILED",
      payload: error,
    });
  }
};

export const addSkillForJob = (post) => async (dispatch) => {
  dispatch({
    type: "ADD_JOB_SKILL_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/jobs/addskill",
      post
    );

    dispatch({
      type: "ADD_JOB_SKILL_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_JOB_SKILL_FAILED",
      payload: error,
    });
  }
};

export const applyForJobAction = (user) => async (dispatch) => {
  dispatch({
    type: "USER_APPLY_JOB_REGISTER_REQUEST",
  });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/jobs/applyjob",
      user
    );
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

export const getAllJobAppliByuserId = (id) => async (dispatch) => {
  dispatch({
    type: "USER_JOB_BY_USER_ID_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/jobs/getJobAppliByuserId",
      { id }
    );

    dispatch({
      type: "USER_JOB_BY_USER_ID_SUCCESS",
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {
    dispatch({
      type: "USER_JOB_BY_USER_ID_FAILED",
      payload: error,
    });
  }
};
