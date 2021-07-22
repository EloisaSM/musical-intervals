import "./styles/App.css";

import Key from "./componentes/key/index";
import Interval from "./componentes/interval/index";

import NoteIcon from "./assets/music.svg";

function App() {
  return (
    <div className="container">
      <div className="title-icon">
        <h1>Pratique intervalos! </h1>
        <img src={NoteIcon} alt="" />
      </div>
      <div className="container-content">
        <Key />
        <Interval />
      </div>
    </div>
  );
}

export default App;
