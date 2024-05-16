import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    } ,[]);


    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course => <Course key={course.id} course={course} handleSelectCourse={handleSelectCourse} />)
            }
        </div>
    );
};

Courses.propTypes= {
    handleSelectCourse: PropTypes.func.isRequired
}

export default Courses;