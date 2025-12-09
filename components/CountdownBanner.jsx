import React, { useState, useEffect } from "react";
import styles from "./CountdownBanner.module.css";

const LAUNCH_DATE = new Date("December 15, 2025 00:00:00").getTime();
const SESSION_KEY = "countdown_closed_this_session";

const CountdownBanner = () => {
  const [isClosed, setIsClosed] = useState(true); // default hidden until we check session
  const [timeLeft, setTimeLeft] = useState({});

  // Check session only on client
  useEffect(() => {
    const closed = sessionStorage.getItem(SESSION_KEY) === "true";
    setIsClosed(closed);
  }, []);

  // Start timer
  useEffect(() => {
    if (isClosed) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = LAUNCH_DATE - now;

      if (distance <= 0) {
        setTimeLeft({ expired: true });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isClosed]);

  const closeBanner = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsClosed(true);
  };

  if (isClosed) return null;

  return (
    <div className={styles.banner}>
      {!timeLeft.expired ? (
        <p className={styles.countdownText}>
          New Design Launch in:  
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      ) : (
        <p className={styles.countdownText}>We just launched the new design! 🎉</p>
      )}

      <button onClick={closeBanner} className={styles.closeButton}>×</button>
    </div>
  );
};

export default CountdownBanner;
