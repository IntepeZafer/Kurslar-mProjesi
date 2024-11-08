import PropTypes from 'prop-types';
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'
import { useState } from 'react';
function Courses({courses}) {
    const [index, setIndex] = useState(0)
    const {title , content , price} = courses[index];
    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if(newIndex < 0){
                newIndex = courses.length - 1
            }
            return newIndex
        })
    }
    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if(newIndex > courses.length - 1){
                newIndex = 0
            }
            return newIndex
        })
    }
    const getRandomCourse = () => {
        let randomIndex = Math.floor(Math.random()*courses.length);
        if(randomIndex === index){
            randomIndex = index + 1
        }
        setIndex(randomIndex);
    }
    return ( 
    <div className='courseList'>
        <div>
            <h2 style={{textAlign:"center"}}>Kurslarım</h2>
            <button onClick={getRandomCourse}>Kurs Ekle</button>
        </div>
        <div className='cardContainer'>
        <button onClick={prevCourse}>
            <FaChevronLeft/>
        </button>
        <div className="card">
            <div className="cardTitlePrice">
                <h2 className="cardTitle">{title}</h2>
                <p>{content}</p>
                <h4 className="cardPrice">{price}₺</h4>
            </div>
        </div>
        <button onClick={nextCourse}>
            <FaChevronRight/>
        </button>
        </div>
    </div> 
);
}
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired
}
export default Courses;