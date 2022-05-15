import {useNavigate} from 'react-router-dom';

function FeaturedImages({ image }) {
    const navigate = useNavigate();
    function route(image) {
        navigate('/ProductPage/*', { state: { img: image } });
    }
    return (
        <div>
            <img id='featuredImg' src={image} alt="" onClick={() => route(image)} />
            <div>
                <h4>Brand Name</h4>
                <p>Description</p>
                <p>Price</p>
            </div>
        </div>
    );
}

export default FeaturedImages;