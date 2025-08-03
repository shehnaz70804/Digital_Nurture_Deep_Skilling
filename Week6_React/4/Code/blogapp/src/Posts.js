// src/Posts.js
import React, { Component } from 'react';
import { Post } from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const postsList = data.map(
        (item) => new Post(item.userId, item.id, item.title, item.body)
      );
      this.setState({ posts: postsList });
    } catch (error) {
      console.error('Failed to load posts', error);
      alert('Error loading posts!');
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
  }

  // ✅ Step 8: render method
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
