// type to signify if card is under the category Coding or Art
function Card({title, type, image, alt, description}) {
    return(
        <>
            <div className="card">
                <img src={image} alt={alt} className="card-img"/>
                <h2 className="card-title">{title}</h2>
                <h3 className="card-type">{type}</h3>
                <p className="card-desc">{description}</p>
            </div>
        </>
    )
}

export default Card