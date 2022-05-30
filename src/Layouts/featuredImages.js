
function FeaturedImages({ image, brand, description, price}) {
    return (
        <div className="featured-component-div">
            <img id='featuredImg' src={image} alt="" />
            <div id='featured-text'>
                <h4>{brand}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default FeaturedImages;