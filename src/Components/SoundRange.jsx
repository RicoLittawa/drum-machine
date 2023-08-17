import PropTypes from "prop-types"; // Import PropTypes

export const SoundRange = ({ volume, setVolume }) => {
  return (
    <div className="p-4 mobile-one:mx-1 mobile-two:mx-3 mobile-three:mx-5 mobile-four:mx-0 mobile-five:mx-2 mx-2 my-8">
      <input
        type="range"
        className="md:w-full md:mx-6 mobile-one:w-80 mobile-two:w-80  mobile-three:w-80 mobile-four:w-96  
        h-1 glow-blue rounded-full"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
      />
    </div>
  );
};

SoundRange.propTypes = {
  volume: PropTypes.number.isRequired, // Specify the expected type and mark as required
  setVolume: PropTypes.func.isRequired, // Specify the expected type and mark as required
};
