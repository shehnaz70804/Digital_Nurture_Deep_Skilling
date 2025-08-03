import React from 'react';

const T20players = ["Rohit", "Kohli", "Hardik", "Gill", "Pant"];
const RanjiTrophyPlayers = ["Prithvi", "Rahane", "Iyer", "Sarfaraz", "Saini"];

const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

const IndianPlayers = () => {
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Even Team</h2>
      {evenTeam.map((player, i) => (
        <p key={i}>{player}</p>
      ))}

      <h2>Odd Team</h2>
      {oddTeam.map((player, i) => (
        <p key={i}>{player}</p>
      ))}
    </div>
  );
};

export default IndianPlayers;
