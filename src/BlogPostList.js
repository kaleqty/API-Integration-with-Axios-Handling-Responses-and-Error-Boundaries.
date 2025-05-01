import React from 'react';
import './BlogPostList.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div className="empty-message">No posts available.</div>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;