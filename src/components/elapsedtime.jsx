import React, { useState, useEffect } from 'react';

function ElapsedTime({ date }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - date.getTime();
      setElapsedTime(difference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  const formatElapsedTime = (elapsedTime) => {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const formattedDays = days > 0 ? `${days}d ` : '';
    const formattedHours = hours > 0 ? `${hours % 24}h ` : '';
    const formattedMinutes = minutes > 0 ? `${minutes % 60}m ` : '';
    const formattedSeconds = `${seconds % 60}s`;

    return `${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };

  return <label>Elapsed time: {formatElapsedTime(elapsedTime)}</label>;
}

export default ElapsedTime;
