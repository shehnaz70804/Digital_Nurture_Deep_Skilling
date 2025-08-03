import React from 'react';

const blogs = [
  { title: 'React vs Angular', author: 'Alice' },
  { title: 'Getting Started with GraphQL', author: 'Bob' },
  { title: 'Mastering JavaScript', author: 'Charlie' },
];

const BlogDetails = () => (
  <div>
    <h2>📝 Blog Details</h2>
    {blogs.map((blog, index) => (
      <div key={index}>
        <p><strong>{blog.title}</strong> - {blog.author}</p>
      </div>
    ))}
  </div>
);

export default BlogDetails;
