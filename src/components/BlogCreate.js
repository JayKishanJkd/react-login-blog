import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitBlog, loadBlogs } from '../redux/actions';
import '../styles/BlogCreate.css';

const BlogCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const submittedBlog = useSelector((state) => state.submittedBlog);
  const userBlogs = useSelector((state) => state.userBlogs);

  useEffect(() => {
    // Load user blogs from localStorage when the component mounts
    const storedBlogs = localStorage.getItem('userBlogs');
    if (storedBlogs) {
      dispatch(loadBlogs(JSON.parse(storedBlogs)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save user blogs to localStorage whenever the userBlogs state changes
    localStorage.setItem('userBlogs', JSON.stringify(userBlogs));
  }, [userBlogs]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content };

    // Dispatch the action to submit the blog to Redux
    dispatch(submitBlog(blog));

    // Reset the form or perform any other actions here
    setTitle('');
    setContent('');
  };

  return (
    <div className="blog-create-container">
      <h2>Welcome,</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Write your blog content"
            required
          />
        </div>
        <button type="submit">Submit Blog</button>
      </form>

      {submittedBlog && (
        <div className="submitted-blog">
          <h3>Submitted Blog:</h3>
          <p> {submittedBlog.title}</p>
          <p>Content: {submittedBlog.content}</p>
        </div>
      )}

      {userBlogs.length > 0 && (
        <div className="user-blogs">
          <h3>Your Blogs:</h3>
          <ul>
            {userBlogs.map((blog) => (
              <li key={blog.id}>
                <p>Title: {blog.title}</p>
                <p>Content: {blog.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogCreate;
