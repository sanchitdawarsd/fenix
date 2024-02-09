import Countdown from 'react-countdown';
import '../Styles/countdown.css';

const CountdownTimer = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <div className="timer_box">{days}</div>
              <p className="timer_label">Days</p>
            </div>
            <div className="text-center">
              <div className="timer_box">{hours}</div>
              <p className="timer_label">Hours</p>
            </div>
            <div className="text-center">
              <div className="timer_box">{minutes}</div>
              <p className="timer_label">Minutes</p>
            </div>
            <div className="text-center">
              <div className="timer_box">{seconds}</div>
              <p className="timer_label">Seconds</p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 12 * 24 * 60 * 60 * 1000}
      daysInHours={true}
      autoStart={true}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
