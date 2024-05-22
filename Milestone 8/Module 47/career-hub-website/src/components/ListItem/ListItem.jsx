import PropTypes from 'prop-types';

function ListItem({ image, title, jobs }) {
  return (
    <div className="p-10 bg-gradient-to-r from-[#7E90FE]/5 to-[#9873FF]/5 rounded-lg">
        <img className='p-2 bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10 rounded-lg' src={image} alt={title} />
        <h2 className="text-xl font-extrabold mt-8 mb-2 text-[#474747]">{title}</h2>
        <p className="font-medium text-[#A3A3A3]">{jobs} Jobs Available</p>
    </div>
  )
}

ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    jobs: PropTypes.number,
}

export default ListItem;