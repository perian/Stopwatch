import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './components/clock';
import Controls from './components/controls';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  const onMainBtnClick = () => {
    setIsActive(!isActive);

    if (isActive) {
      setTime(0);
    } 
  };

  const onWaitBtnClick = () => {
    if (isActive) {
      setIsActive(false);
    };
  };

  const onResetBtnClick = () => {
    if (time > 0) {
      setTime(0);
      setIsActive(true);
    };
  };

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }
  }, [isActive]);

  return (
    <section className="stopwatch">
      <Controls 
        isActive={isActive}
        onMainBtnClick={onMainBtnClick}
        onWaitBtnClick={onWaitBtnClick}
        onResetBtnClick={onResetBtnClick}
      />
      <Clock time={time}/>
    </section>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;