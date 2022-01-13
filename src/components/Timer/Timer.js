import React, { useState, useEffect } from "react";
// @material-ui/core components

// core components
import "assets/jss/material-kit-react/components/timer.css";

export default function Timer() {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const countDate = new Date("Feb 25, 2022 16:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //how the fuck does work time?
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const countdown = () => {
    const textDay = Math.floor(gap / DAY);
    const textHour = Math.floor((gap % DAY) / HOUR);
    const textMinute = Math.floor((gap % HOUR) / MINUTE);
    const textSecond = Math.floor((gap % MINUTE) / SECOND);

    setDay(textDay);
    setHour(textHour);
    setMinute(textMinute);
    setSecond(textSecond);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      countdown();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <section>
            <p>{day}</p>
            <p>
              <small>Dias</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{hour}</p>
            <p>
              <small>Horas</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{minute}</p>
            <p>
              <small>Minutos</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{second}</p>
            <p>
              <small>Segundos</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}
