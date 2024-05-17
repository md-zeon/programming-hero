import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='flex flex-col  bg-blue-500 rounded-lg p-4 text-white space-y-8'>
            <h2 className="text-center">
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <div className='pl-2 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature} /> )
            }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;