import React from 'react';

const players = [
  { name: "Rohit", score: 95 },
  { name: "Kohli", score: 100 },
  { name: "Dhoni", score: 85 },
  { name: "Pant", score: 60 },
  { name: "Gill", score: 72 },
  { name: "Hardik", score: 68 },
  { name: "Ashwin", score: 77 },
  { name: "Bumrah", score: 30 },
  { name: "Rahul", score: 50 },
  { name: "Shami", score: 40 },
  { name: "Siraj", score: 55 },
];

const ListofPlayers = () => {
  const filtered = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}

      <h2>Players with Score &lt; 70</h2>
      {filtered.map((p, i) => (
        <p key={i}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
