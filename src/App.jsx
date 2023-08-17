import "./App.css";
import DrumPads from "./DrumPads";

function App() {
  return (
    <div
      id="drum-machine"
      className="md:h-screen md:block items-center justify-center"
    >
      <DrumPads />
    </div>
  );
}

export default App;
