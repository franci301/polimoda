import '../Assets/css/shopPage.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp';
import img2 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp.webp';
import img3 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp(1).webp';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

function ShopProducts({ keys, img, name, type, price, trigger }) {
    const [picX, setX] = useState();
    const [winWidth, setWidth] = useState(window.innerWidth); // check width size of the window
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    const ref = useRef(null)
    const [productStyle, setStyle] = useState({
        width: "80%",
        minHeight: "100%",
        marginBottom: 0,
    });
    
    function style() {
        console.log(ref.current.clientHeight)
        if (!(ref.current.clientHeight <= (ref.current.clientWidth * 1.5) && productStyle.paddingBottom > 0)) {
            setStyle({ width: "80%", minHeight: "100%", paddingBottom: 0, marginTop: (((ref.current.clientWidth * 1.5) - ref.current.clientHeight).toString() + "px") })
        }
    }

    function longResolve() {
        return new Promise(r => setTimeout(r, 0));
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
    useEffect(() => {
        longResolve().then(() => {
            style();
        });
    }, [trigger]);
    useLayoutEffect(() => {
        setX(ref.current.clientWidth);
        style();
    }, [winWidth]);
    useLayoutEffect(() => {
        style();
    }, [picX]);

    function style() {
        if (ref.current.clientHeight <= (ref.current.clientWidth * 1.5) && productStyle.paddingBottom > 0) {
            setStyle({ width: "80%", minHeight: "100%", marginBottom: 0, paddingBottom: (((ref.current.clientWidth * 1.5) - ref.current.clientHeight).toString() + "px") })
        } else {
            setStyle({ width: "80%", minHeight: "100%", paddingBottom: 0, marginTop: (((ref.current.clientWidth * 1.5) - ref.current.clientHeight).toString() + "px") })
        }
    }

    const navigate = useNavigate();

    function route() {
        navigate('/ProductPage/*', {
            state:
            {
                imgs: { img, img1, img2, img3 },
                name: 'PETER DO', description: 'Faux leather with a high-shine finish, it has an A-line silhouette with zipped side pockets',
                details: "Peter Do articulates a youthful approach to design that is founded on razor sharp tailoring, architectural construction and honest textiles. Through a process of reduction, every detail is tested and refined to adapt to the complexities of women's lives.",
                price: '€2115', type: 'Faux Leather Midi Dress',
                manufacturingDetails: ['Mid-rise', 'Concealed zip fastening at outseam', 'Fully lined', '100% polyester, 55% polyurethane, 45% viscose, fully lined (62% viscose, 38% acetate)', ' Made in USA'],
                colour: 'Black'
            }
        })
    }

    return (
        <div key={keys} className='col h-100 py-3' id='singleProduct'>
            <>
                {type === 'Faux Leather Midi Dress' ? (
                    <img ref={ref} id='shopPic' src={img} alt="" onClick={route} style={productStyle} onLoad={style}/>
                ) : (
                    <img ref={ref} id='shopPic' src={img} alt="" style={productStyle} onLoad={style}/>
                )}
            </>
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {type}
                </div>
                <div>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default ShopProducts;