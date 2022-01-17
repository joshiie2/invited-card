import React, { useState, useEffect } from "react";
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
    <div className="container">
      <div className="row">
        <div className="col-10 text-center">
          <div className="col-10 text-center">
            <div className="countdown circle-countdown  is-countdown">
              <span className="countdown-row countdown-show4">
                <span className="countdown-section">
                  <span className="countdown-amount">{day}</span>
                  <span className="countdown-period">Dias</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">{hour}</span>
                  <span className="countdown-period">Horas</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">{minute}</span>
                  <span className="countdown-period">Minutos</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">{second}</span>
                  <span className="countdown-period">Segundos</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
