import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

const Main = () => {
  const [activeTab, setActiveTab] = useState('book');

  let displayComponent;
  // Way 1: if-else
  if (activeTab === 'book') {
    displayComponent = <BookDetails />;
  } else if (activeTab === 'blog') {
    displayComponent = <BlogDetails />;
  } else {
    displayComponent = <CourseDetails />;
  }

  return (
    <div>
      <button onClick={() => setActiveTab('book')}>Show Books</button>
      <button onClick={() => setActiveTab('blog')}>Show Blogs</button>
      <button onClick={() => setActiveTab('course')}>Show Courses</button>

      <hr />

      {/* Way 2: Element Variable Rendering */}
      {displayComponent}

      {/* Way 3: Ternary Rendering */}
      {/* {activeTab === 'book' ? <BookDetails /> : activeTab === 'blog' ? <BlogDetails /> : <CourseDetails />} */}

      {/* Way 4: Short-circuit Rendering */}
      {/* {activeTab === 'book' && <BookDetails />} */}
    </div>
  );
};

export default Main;
