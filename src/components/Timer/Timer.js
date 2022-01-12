import React, { useState, useEffect } from "react";
// @material-ui/core components

// core components
import "assets/jss/material-kit-react/components/timer.css";

export default function Timer(Props) {
  const { title, subtitle } = Props;
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
    <div className="coming-soon">
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="countdown">
          <div className="container-day">
            <h3 className="day">{day}</h3>
          </div>
          <div className="container-day">
            <h3 className="hour">{hour}</h3>
          </div>
          <div className="container-day">
            <h3 className="minute">{minute}</h3>
          </div>
          <div className="container-day">
            <h3 className="second">{second}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
