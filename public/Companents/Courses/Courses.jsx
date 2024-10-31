import PropTypes from 'prop-types';
import Course from '../Course/Course';
function Courses({courses , removeCourse}) {
    return ( 
    <div>
        <div>
            <h2>Kurslarım</h2>
        </div>
        <div className=''>
            {
                courses.map((course , index) => {
                      return(
                        <Course key={index} {...course} removeOneCourse={removeCourse}/>
                      )
                })
            }
        </div>
    </div> 
);
}
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
}
export default Courses;