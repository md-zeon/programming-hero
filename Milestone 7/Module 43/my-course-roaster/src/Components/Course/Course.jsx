import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa6";
import { GoBook } from 'react-icons/go';

const Course = ({course, handleSelectCourse}) => {
    const {course_pic, title, course_details, price, credit_hour} = course;
    return (
        <div className='p-4 bg-white rounded-lg space-y-3'>
            <img className='rounded-lg h-36 w-full' src={course_pic} alt={title} />
            <h2 className='text-lg font-semibold text-[#1C1B1B]'>{title}</h2>
            <p className='text-[#1c1b1b99] text-sm'>{course_details}</p>
            <div className="flex gap-3 items-center justify-around font-medium text-[#1c1b1b99] text-base">
                <span className='text-2xl'><FaDollarSign /></span>
                <p>Price: {price}</p>
                <span className='text-2xl'><GoBook /></span>
                <p>Credit: {credit_hour}hr</p>
            </div>
            <button onClick={() => handleSelectCourse(course)} className='rounded-lg w-full mt-3 py-2 bg-[#2F80ED] text-white font-semibold text-lg'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired
}

export default Course;