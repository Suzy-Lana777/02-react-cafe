import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { VoteType } from '../../types/Votes';
// import type { Votes } from '../../types/Votes';
import { VoteOptions } from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';

export default function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція обробки голосу
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // Функція для скидання голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
        {/* <VoteStats votes={votes} /> */}
      </div>
    </>
  );
}
