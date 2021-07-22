import React, { useState, useEffect, useCallback } from "react";

import { intervals, intervalsType, intervalsNumberType } from "../../keysAndIntervals/index";

export default function Interval() {
  const [intervalInfo, setIntervalInfo] = useState({});

  const setrRandonInterval = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * intervals.length);
    const interval = intervals[randomIndex];

    const subtitle = `${intervalsNumberType[interval[0]]} ${intervalsType[interval[1]]}`

    setIntervalInfo({name: interval, sub: subtitle});
  }, []);

  useEffect(() => {
    setrRandonInterval();
  }, [setrRandonInterval]);
  
  return (
    <div className="content">
      <h2>Intervalo</h2>
      <button className="box" onClick={setrRandonInterval}>
        <p>{intervalInfo.name}</p>
        <span>{intervalInfo.sub}</span>
      </button>
    </div>
  );
}
