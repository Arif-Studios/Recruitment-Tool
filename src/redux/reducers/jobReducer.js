export const getAllJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "GET_JOBS_REQUEST":
      return { ...state, loading: true };
    case "GET_JOBS_SUCCESS":
      return {
        jobs: action.payload,
        loading: false,
      };
    case "GET_JOBS_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserAllJobPostReducer = (state = { jobsPost: [] }, action) => {
  switch (action.type) {
    case "USER_USER_JOB_POST_REQUEST":
      return { ...state, loading: true };
    case "USER_USER_JOB_POST_SUCCESS":
      return {
        jobsPost: action.payload,
        loading: false,
      };
    case "USER_USER_JOB_POST_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getUserbyjobIdReducer = (state = { appliList: [] }, action) => {
  switch (action.type) {
    case "USER_USER_BY_JOB_ID_REQUEST":
      return { ...state, loading: true };
    case "USER_USER_BY_JOB_ID_SUCCESS":
      return {
        appliList: action.payload,
        loading: false,
      };
    case "USER_USER_BY_JOB_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const geJobAppliByuserIdReducer = (state = { myJob: [] }, action) => {
  switch (action.type) {
    case "USER_JOB_BY_USER_ID_REQUEST":
      return { ...state, loading: true };
    case "USER_JOB_BY_USER_ID_SUCCESS":
      return {
        myJob: action.payload,
        loading: false,
      };
    case "USER_JOB_BY_USER_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_JOB_BY_ID":
      return { ...state, loading: true };
    case "GET_JOB_BY_ID_SUCCESS":
      return {
        job: action.payload,
        loading: false,
      };
    case "GET_JOB_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getApplicationByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_APPLICATION_BY_ID":
      return { ...state, loading: true };
    case "GET_APPLICATION_BY_ID_SUCCESS":
      return {
        applica: action.payload,
        loading: false,
      };
    case "GET_APPLICATION_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobOtherByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_JOB_OTHER_BY_ID":
      return { ...state, loading: true };
    case "GET_JOB_OTHER_BY_ID_SUCCESS":
      return {
        jobanother: action.payload,
        loading: false,
      };
    case "GET_JOB_OTHER_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getJobSkillByIdReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_JOB_SKILL_BY_ID":
      return { ...state, loading: true };
    case "GET_JOB_SKILL_BY_ID_SUCCESS":
      return {
        jobskill: action.payload,
        loading: false,
      };
    case "GET_JOB_SKILL_BY_ID_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
