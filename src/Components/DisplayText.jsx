import PropTypes from 'prop-types'; // Import PropTypes

export const DisplayText = ({ text,color }) => {
  return (
    <div
      className={`flex justify-center glow-${color} border-none w-80 mx-9 md:w-full md:mx-6 h-15-custom mobile-one:mx-5 
      mobile-two:mx-7 mobile-two:w-80 mobile-three:mx-9 mobile-four:mx-4 mobile-four:w-96 mobile-five:mx-6`}
    >
      <span className="text-white py-2">{text}</span>
    </div>
  );
};

// Add PropTypes validation
DisplayText.propTypes = {
  text: PropTypes.string.isRequired, // Specify the expected type and mark as required
  color: PropTypes.string.isRequired, // Specify the expected type and mark as required

};
