// src/redux/action.js
export const submitBlog = (blog) => {
    // Your existing submitBlog action logic here
    return { type: 'SUBMIT_BLOG', payload: blog };
  };
  
  // Add the loadBlogs action
  export const loadBlogs = (blogs) => {
    return { type: 'LOAD_BLOGS', payload: blogs };
  };
  