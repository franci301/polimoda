
function FeaturedImages({ image, brand, description, price }) {
    return (
        <div className="featured-component-div">
            <div className="featured-img-container">
                <img id='featuredImg' src={image} alt="" />
            </div>
            <div id='featured-text'>
                <h4>{brand}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default FeaturedImages;