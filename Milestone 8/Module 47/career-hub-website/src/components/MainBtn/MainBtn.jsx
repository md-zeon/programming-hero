import PropTypes from 'prop-types';

function MainBtn({ value = "Button", handleBtn }) {
  return (
    <div>
      <button onClick={handleBtn} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-5 py-2 border font-extrabold rounded text-white border-[#7e90fe]">
        {value}
      </button>
    </div>
  );
}

MainBtn.propTypes = {
  value: PropTypes.string,
  handleBtn: PropTypes.func,
};

export default MainBtn;
