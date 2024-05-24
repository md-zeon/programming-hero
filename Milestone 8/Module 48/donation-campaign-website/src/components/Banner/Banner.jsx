import bg from '../../assets/images/bg.png';
import PropTypes from 'prop-types';

function Banner({handleSearch}) {

  return (
    <div style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${bg})`,
    }} className="bg-no-repeat bg-cover w-full py-48 -z-10 -mt-24 flex flex-col gap-10 items-center justify-center text-center">
        <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
        <div className="join">
          <div className="flex-1 md:w-96">
            <input
              id='searchField'
              className="input input-bordered join-item bg-white md:w-full"
              placeholder="Search Here by Category"
            />
          </div>
          <button onClick={handleSearch} className="btn bg-[#FF444A] text-white hover:bg-[#FF444A] join-item">
            Search
          </button>
        </div>
    </div>
  );
}

Banner.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Banner;
