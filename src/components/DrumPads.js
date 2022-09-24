import React from "react";
import Heater1 from "../audio-files/Heater-1.mp3";
import Heater2 from "../audio-files/Heater-2.mp3";
import Heater3 from "../audio-files/Heater-3.mp3";
import Heater4 from "../audio-files/Heater-4.mp3";
import Clap from "../audio-files/Clap.mp3";
import Open from "../audio-files/Open-HH.mp3";
import KicknHat from "../audio-files/Kick_n_Hat.mp3";
import Kick from "../audio-files/Kick.mp3";
import Closed from "../audio-files/Closed-HH.mp3";

function DrumPads(props) {
  return (
    <div className="drum-pads">
      <button
        className="drum-pad"
        id="Heater-1"
        title="Heater 1"
        onClick={props.handleClick}
      >
        <audio className="clip" id="Q" src={Heater1}>
          {/* <source src={Heater1}></source> */}
        </audio>
        Q
      </button>
      <button
        className="drum-pad"
        id="Heater-2"
        title="Heater 2"
        onClick={props.handleClick}
      >
        <audio className="clip" id="W" src={Heater2}>
          {/* <source src={Heater2}></source> */}
        </audio>
        W
      </button>
      <button
        className="drum-pad"
        id="Heater-3"
        title="Heater 3"
        onClick={props.handleClick}
      >
        <audio className="clip" id="E" src={Heater3}>
          {/* <source src={Heater3}></source> */}
        </audio>
        E
      </button>
      <button
        className="drum-pad"
        id="Heater-4"
        title="Heater 4"
        onClick={props.handleClick}
      >
        <audio className="clip" id="A" src={Heater4}>
          {/* <source src={Heater4}></source> */}
        </audio>
        A
      </button>
      <button
        className="drum-pad"
        id="Clap"
        title="Clap"
        onClick={props.handleClick}
      >
        <audio className="clip" id="S" src={Clap}>
          {/* <source src={Clap}></source> */}
        </audio>
        S
      </button>
      <button
        className="drum-pad"
        id="Open-HH"
        title="Open HH"
        onClick={props.handleClick}
      >
        <audio className="clip" id="D" src={Open}>
          {/* <source src={Open}></source> */}
        </audio>
        D
      </button>
      <button
        className="drum-pad"
        id="Kick-n-Hat"
        title="Kick n' Hat"
        onClick={props.handleClick}
      >
        <audio className="clip" id="Z" src={KicknHat}>
          {/* <source src={KicknHat}></source> */}
        </audio>
        Z
      </button>
      <button
        className="drum-pad"
        id="Kick"
        title="Kick"
        onClick={props.handleClick}
      >
        <audio className="clip" id="X" src={Kick}>
          {/* <source src={Kick}></source> */}
        </audio>
        X
      </button>
      <button
        className="drum-pad"
        id="Closed-HH"
        title="Closed HH"
        onClick={props.handleClick}
      >
        <audio className="clip" id="C" src={Closed}>
          {/* <source src={Closed}></source> */}
        </audio>
        C
      </button>
    </div>
  );
}

export default DrumPads;
