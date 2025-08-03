import React from 'react';

const courses = [
  { name: 'React Fundamentals', duration: '4 weeks' },
  { name: 'Advanced Node.js', duration: '6 weeks' },
  { name: 'Python for Data Science', duration: '5 weeks' },
];

const CourseDetails = () => (
  <div>
    <h2>🎓 Course Details</h2>
    {courses.map((course, index) => (
      <div key={index}>
        <p>{course.name} - Duration: {course.duration}</p>
      </div>
    ))}
  </div>
);

export default CourseDetails;
