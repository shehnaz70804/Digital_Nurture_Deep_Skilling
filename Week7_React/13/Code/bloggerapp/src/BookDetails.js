import React from 'react';

const books = [
  { title: 'Atomic Habits', author: 'James Clear' },
  { title: 'Clean Code', author: 'Robert C. Martin' },
  { title: 'The Alchemist', author: 'Paulo Coelho' },
];

const BookDetails = () => (
  <div>
    <h2>📚 Book Details</h2>
    {books.map((book, index) => (
      <div key={index}>
        <p><strong>{book.title}</strong> by {book.author}</p>
      </div>
    ))}
  </div>
);

export default BookDetails;
