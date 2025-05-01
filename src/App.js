import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostList from './BlogPostList';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-box">
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-box">
          <div className="error-text">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="page-title">Blog Posts</h1>
      <ErrorBoundary>
        <BlogPostList posts={posts} />
      </ErrorBoundary>
    </div>
  );
};

export default App;