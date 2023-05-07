const initialState = {
  resumeInfo: null
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESUME_INFO":
      return {
        ...state,
        resumeInfo: action.payload,
      };
    default:
      return state;
  }
};

export default resumeReducer;
