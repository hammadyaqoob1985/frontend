import React, { useState, useEffect } from 'react';
import Game from "./Games";

// v1 STAR MATCH - Starting Template

// custom hook function

const StarMatch = (props) => {
  const [gameId, setGameId] = useState(1);
  return <Game key= {gameId} startNewGame= {() => setGameId(gameId + 1)} ></Game>;
}

export function App() {
   return (
    <StarMatch />
  );
}
