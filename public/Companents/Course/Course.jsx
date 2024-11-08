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

export default Course;