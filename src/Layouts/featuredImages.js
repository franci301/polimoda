import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom"
import img from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) Original 420€.jpeg'
import img1 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(1).jpeg'
import img2 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(2).jpeg'
import img3 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg.jpeg'


function FeaturedImages({ image, brand, description, price, ids, clickable }) {

    const navigate = useNavigate();
    const [winWidth, setWidth] = useState(window.innerWidth); // check width size of the window
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    const [picX, setX] = useState();
    const ref = useRef(null)
    const [productStyle, setStyle] = useState({
        width: "60%",
        minHeight: "60%",
        objectFit: "cover",
        marginBottom: 0,
    });
    function longResolve() {
        return new Promise(r => setTimeout(r, 0));
    }
    function style() {
        if (!(ref.current.clientHeight <= (ref.current.clientWidth * 1.5) && productStyle.paddingBottom > 0)) {
            setStyle({ width: "60%", maxHeight: "60%", paddingBottom: 0, objectFit: "cover", marginTop: (((ref.current.clientWidth * 1.5) - ref.current.clientHeight).toString() + "px") })
        }
    }
    function route() {
        navigate('/ProductPage/*', {
            state: {
                imgs: { img, img1, img2, img3 }, name: 'Vitelli', description: 'Flared felted woven mohair, wool, and silk-blend trousers in multicolor', details: "Through revolutionary fabrics, a cosmic aesthetic, Italian youth culture inspiration and challenging co-labs, Vitelli’s 100% Italian knitwear brand aims to refresh vintage imagery, foster eco-friendly fashion and investigate authentic moments of stile italiano through the filter of the present.", price: '€420', type: 'Multicolor Doomboh Trousers', manufacturingDetails: ['Mid-rise', 'Concealed zip fastening at outseam','Fully lined','20% wool, 20% mohair, 20% polyamide, 20% polyester, 20% silk', ' Made in Italy'], colour:'Pluto'} });
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        longResolve().then(() => {
            setX(ref.current.clientWidth);
            style();
        });
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    useLayoutEffect(() => {
        setX(ref.current.clientWidth);
        style();
    }, [winWidth]);
    useLayoutEffect(() => {
        style();
    }, [picX]);

    return (
        <div className="featured-component-div">
            <div className="featured-img-container">
                {clickable?(
                    <img ref={ref} id='featuredImg' src={image} alt="" className={ids} style={productStyle} onLoad={style} onClick={route}/>
                ):(
                    <img ref={ref} id='featuredImg' src={image} alt="" className={ids} style={productStyle} onLoad={style}/>
                )}
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