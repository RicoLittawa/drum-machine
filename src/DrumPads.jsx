import { SoundRange } from "./Components/SoundRange";
import { DisplayText } from "./Components/DisplayText";
import { useState, useEffect, useMemo, useCallback } from "react";
export default function DrumPads() {
  const [display, setDisplay] = useState("");
  const [activeColor, setActiveColor] = useState("blue");
  const [volume, setVolume] = useState(50); // New state to track volume

  const handleClick = useCallback(
    (value, color, url) => {
      setDisplay(value);
      setActiveColor(color);
      const audio = new Audio(url);
      audio.volume = volume / 100; // Set the volume based on the state
      audio.play();
    },
    [volume]
  );

  const buttons = useMemo(
    () => [
      {
        innerText: "Q",
        value: "heater-1",
        color: "blue",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        innerText: "W",
        value: "heater-2",
        color: "pink",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        innerText: "E",
        value: "heater-3",
        color: "violet",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        innerText: "A",
        value: "heater-4",
        color: "blue",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        innerText: "S",
        value: "clap",
        color: "yellow",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        innerText: "D",
        value: "open-HH",
        color: "pink",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        innerText: "Z",
        value: "kick-n-hat",
        color: "green",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        innerText: "X",
        value: "kick",
        color: "green",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        innerText: "C",
        value: "close-HH",
        color: "yellow",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],
    []
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Map keyboard keys to button values
      const keyToButtonMap = {
        q: "heater-1",
        w: "heater-2",
        e: "heater-3",
        a: "heater-4",
        s: "clap",
        d: "open-HH",
        z: "kick-n-hat",
        x: "kick",
        c: "close-HH",
      };

      const keyPressed = event.key.toLowerCase();
      const buttonValue = keyToButtonMap[keyPressed];

      if (buttonValue) {
        const button = buttons.find((btn) => btn.value === buttonValue);
        if (button) {
          handleClick(button.value, button.color, button.url);
        }
      }
    };

    // Add event listener for key press
    window.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [buttons, handleClick]);
  return (
    <div className="relative">
      <div
        id="display"
        className="grid grid-cols-3 gap-3 place-content-center
      pt-7 
      mobile-four:w-96
      mobile-one:w-80
      mobile-four:mx-4
      mobile-one:mx-5
      mobile-two:mx-7
      mobile-five:mx-6
      mobile-three:mx-9
      md:w-full"
      >
        {buttons.map((button, index) => (
          <button
            key={index}
            className={` md:text-white border-none bg-gradient-${button.color} glow-${button.color} rounded-lg h-24 btn-no-outline active:scale-95
          transition-transform duration-200 drum-pad`}
            id={button.innerText}
            onClick={() => handleClick(button.value, button.color, button.url)}
          >
            <span className="invisible md:visible">{button.innerText}</span>
          </button>
        ))}
      </div>
      <SoundRange volume={volume} setVolume={setVolume} />
      <DisplayText text={display} color={activeColor} />
    </div>
  );
}
