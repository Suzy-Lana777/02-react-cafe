import React from 'react';
import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/Votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
export default function VoteOptions() {
  return (
    <div className={css.container}>
      <button className={css.button}>Good:{clicks}</button>
      <button className={css.button}>Neutral:{clicks}</button>
      <button className={css.button}>Bad:{clicks}</button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
}
