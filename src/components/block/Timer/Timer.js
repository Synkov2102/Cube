import styles from './Timer.module.scss';

const Timer = ({ timeStamp }) => {
  timeStamp = timeStamp / 1000;
  const days = timeStamp % 86400 ? Math.floor(timeStamp / 86400) : 0;
  const hours = Math.floor((timeStamp - days * 86400) / 3600);
  const minutes = Math.floor((timeStamp - days * 86400 - hours * 3600) / 60);
  const seconds = Math.floor(
    timeStamp - days * 86400 - hours * 3600 - minutes * 60
  );

  return (
    <div className={styles.timer}>
      <p className={styles.timer_title}>До окончания акции осталось:</p>
      <div className={styles.timer_block}>
        <Timer.Counter
          remainingPathColor={'#b73c58'}
          time={days || 0}
          type={'Дней'}
          timeLimit={5}
        />
        <Timer.Counter
          remainingPathColor={'#b73c58'}
          time={hours || 0}
          type={'Часов'}
          timeLimit={24}
        />
        <Timer.Counter
          remainingPathColor={'#b73c58'}
          time={minutes || 0}
          type={'Минут'}
          timeLimit={60}
        />
        <Timer.Counter
          remainingPathColor={'#b73c58'}
          time={seconds || 0}
          type={'Секунд'}
          timeLimit={60}
        />
      </div>
    </div>
  );
};

Timer.Counter = ({ time, timeLimit, type, remainingPathColor = '#333333' }) => {
  // Credit: Mateusz Rybczonec
  const FULL_DASH_ARRAY = 283;

  function calculateTimeFraction() {
    if (time === 0) {
      return 0;
    }
    const rawTimeFraction = time / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
  }

  return (
    <div className={styles.timer}>
      <div className={styles.base_timer}>
        <svg
          className={styles.base_timer__svg}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g className={styles.base_timer__circle}>
            <circle
              style={{ stroke: remainingPathColor }}
              className={styles.base_timer__path_elapsed}
              cx='50'
              cy='50'
              r='43'
            ></circle>
            <path
              id='base-timer-path-remaining'
              strokeDasharray={`${(
                calculateTimeFraction() * FULL_DASH_ARRAY
              ).toFixed(0)} 283`}
              className={`${styles.base_timer__path_remaining}`}
              style={{ stroke: remainingPathColor }}
              d='
							  M 50, 50
							  m -45, 0
							  a 45,45 0 1,0 90,0
							  a 45,45 0 1,0 -90,0
							'
            ></path>
          </g>
        </svg>
        <span id='base-timer-label' className={styles.base_timer__label}>
          <span className={styles.base_timer__label_time}>{time}</span>
          <span className={styles.base_timer__label_text}>{type}</span>
        </span>
      </div>
    </div>
  );
};
export default Timer;
