import React, { Component } from "react";
import DrumPads from "./components/DrumPads";
import AudioControls from "./components/AudioControls";
import "./styles/main.css";
const keyCodes = [
  { code: 81, id: "Heater-1" },
  { code: 87, id: "Heater-2" },
  { code: 69, id: "Heater-3" },
  { code: 65, id: "Heater-4" },
  { code: 83, id: "Clap" },
  { code: 68, id: "Open-HH" },
  { code: 90, id: "Kick-n-Hat" },
  { code: 88, id: "Kick" },
  { code: 67, id: "Closed-HH" },
];
class App extends Component {
  state = {
    display: "",
    muted: false,
    volume: 0.5,
  };
  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      keyCodes.forEach((key) => {
        if (key.code === e.keyCode) {
          document.getElementById(`${key.id}`).click();
        }
      });
    });
    document.querySelectorAll(".clip").forEach((clip) => {
      clip.volume = this.state.volume;
    });
  }
  handleClick = (e) => {
    let display = document.querySelector(".display");
    e.target.firstElementChild.currentTime = 0;
    e.target.firstElementChild.play();
    e.target.classList.add("clicked");
    display.classList.add("changed");
    setTimeout(() => {
      e.target.classList.remove("clicked");
      display.classList.remove("changed");
    }, 100);
    this.setState({
      display: e.target.title,
    });
  };
  handleMute = (e) => {
    if (this.state.muted) {
      this.setState({
        muted: !this.state.muted,
      });
      document.querySelectorAll(".clip").forEach((clip) => {
        clip.muted = false;
      });
    } else {
      this.setState({
        muted: !this.state.muted,
      });
      document.querySelectorAll(".clip").forEach((clip) => {
        clip.muted = true;
      });
    }
  };
  audioVolume = (e) => {
    this.setState({
      volume: e.target.value / 100,
    });
  };
  handleVolume = () => {
    setTimeout(() => {
      document.querySelectorAll(".clip").forEach((clip) => {
        clip.volume = this.state.volume;
      });
    }, 100);
  };
  render() {
    return (
      <div id="drum-machine" className="container">
        <h1>Drum Machine</h1>
        <DrumPads handleClick={this.handleClick} />
        <div id="display">
          <span className="display">{this.state.display}</span>
        </div>
        <AudioControls
          muted={this.state.muted}
          handleMute={this.handleMute}
          volume={this.state.volume}
          audioVolume={this.audioVolume}
          handleVolume={this.handleVolume}
        />
      </div>
    );
  }
}

export default App;
