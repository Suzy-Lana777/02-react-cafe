import css from './CafeInfo.module.css';
import { IoIosCafe } from 'react-icons/io';

export default function CafeInfo() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <IoIosCafe className={css.icon} />
        <h1 className={css.title}>Sip Happens Café</h1>
      </div>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
