import React from "react";
import "./styles.css";
import DrumsData from "./DrumKitView";

export default function DrumKitSound() {
  const [drums] = React.useState([...DrumsData]);

  function removeSound(e) {
    const key = e.keyCode;
    const div = document.querySelector(`div[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    console.log(":: Remove Sound ::", { div, audio });
    if (div && audio) {
      div.classList.remove("playing");
      audio.pause();
      audio.currentTime = 0;
    }
  }

  function playSound(e) {
    const key = e.keyCode;
    const div = document.querySelector(`div[data-key="${key}"]`);
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    console.log(":: Play Sound ::", { div, audio, key });
    if (!!div && !!audio) {
      div.classList.add("playing");
      audio.play();
      // setTimeout(() => {
      //   div.classList.remove("playing");
      //   audio.stop();
      // }, 4000);

      setTimeout(() => {
        removeSound(e);
      }, 3000);

      // setTimeout(function(){})
      setTimeout(removeSound);
    }
  }

  React.useEffect(() => {
    console.log(".... EXECUTE Effects ...");
    document.addEventListener("keypress", playSound);
    document.addEventListener("EVENT", function (event) {});
  }, []);

  return (
    <div className="keys">
      {drums.map((data, index) => {
        return (
          <div data-key={data.key} className="key" key={index}>
            <kbd>{data.char}</kbd>
            <span className="sound">{data.sound}</span>
            <audio data-key={data.key} src={data.audio}></audio>
          </div>
        );
      })}
    </div>
  );
}
