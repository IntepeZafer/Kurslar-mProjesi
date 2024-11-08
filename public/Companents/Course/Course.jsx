import PropTypes from 'prop-types';
function Course({id , title , content , price , removeOneCourse}) {
    return ( 
    <div className="card">
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <p>{content}</p>
            <h4 className="cardPrice">{price}₺</h4>
        </div>
        <button className="cardDelete" onClick={() => removeOneCourse(id)}>Sil</button>
    </div> 
);
}

Course.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    removeOneCourse: PropTypes.func.isRequired
}

export default Course;