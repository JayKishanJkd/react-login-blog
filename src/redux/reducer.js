// src/redux/reducer.js
const initialState = {
  submittedBlog: null,
  userBlogs: [],
  // ... other initial state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_BLOG':
      return {
        ...state,
        submittedBlog: action.payload,
        userBlogs: [...state.userBlogs, action.payload],
      };
    case 'LOAD_BLOGS':
      return {
        ...state,
        userBlogs: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default reducer;
