import React, { useCallback, useEffect, useState } from "react";

import { keys } from "../../keysAndIntervals/index";

const keysList = Object.entries(keys);

export default function Key() {
  const [keyInfo, setKeyInfo] = useState({});

  const setRandomKey = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * keysList.length);
    const key = keysList[randomIndex];

    setKeyInfo({abbreviation: key[0], name: key[1]});
    
  }, []);

  useEffect(() => {
    setRandomKey();
  }, [setRandomKey]);

  return (
    <div className="content">
      <h2>Tom</h2>
      <button className="box" onClick={setRandomKey}>
        <p>{keyInfo.abbreviation}</p>
        <span>{keyInfo.name}</span>
      </button>
    </div>
  );
}
