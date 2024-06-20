import React from 'react';

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>By {author} on {date}</p>
    </div>
  );
};

export default BlogPost;
