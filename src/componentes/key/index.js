import React from "react";

export default function Key() {
  return (
    <div className="key-container">
      <div className="box">C</div>
      <button onClick={() => console.log("teste")}>Generate</button>
    </div>
  );
}
