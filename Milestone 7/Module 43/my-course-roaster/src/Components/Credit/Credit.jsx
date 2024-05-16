import PropTypes from 'prop-types';

const Credit = ({selectCourse, creditRemaining, totalCredit, totalPrice}) => {
    return (
        <div className="md:w-1/4 p-2 bg-white rounded-lg">
            <div className="py-4 border-b-2 border-gray-400">
                <h2 className="font-bold text-lg text-[#2F80ED]">Credit Hour Remaining {creditRemaining} hr</h2>
            </div>
            <div className="py-4 border-b-2 border-slate-800 min-h-40">
                <h2 className="text-xl font-bold text-[#1C1B1B]">Course Name</h2>
                <ol className='list-decimal'>
                    {
                        selectCourse.map(course => <li className='ml-8' key={course.id}>{course.title}</li>)
                    }
                </ol>
            </div>
            <div className="py-4 border-b-2 border-slate-800">
                <h2 className="text-xl font-bold text-[#1C1B1Bcc]">Total Credit Hour: {totalCredit}</h2>
            </div>
            <div className="py-4">
                <h2 className="text-xl font-bold text-[#1c1b1bcc]">Total Price : {totalPrice} USD</h2>
            </div>
        </div>
    );
};

Credit.propTypes = {
    selectCourse: PropTypes.array.isRequired,
    creditRemaining: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default Credit;