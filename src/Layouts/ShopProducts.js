import '../Assets/css/shopPage.css';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { async } from '@firebase/util';


function ShopProducts({keys,img,name,type,price}) {

    const [picY, setY] = useState()
    const [picX, setX] = useState()
    const [winWidth, setWidth] = useState(window.innerWidth); // check width size of the window
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    const ref = useRef(null)
    const [productStyle, setStyle] = useState({
        width: "80%",
        minHeight: "100%",
        marginBottom: 0,
        paddingBottom: 0, 
    });

    
    function longResolve() {
        return new Promise(r => setTimeout(r, 30));
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        longResolve().then(() => {
            setY(ref.current.clientHeight);
            setX(ref.current.clientWidth);
            style()
        });
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    useLayoutEffect(() => {
        setY(ref.current.clientHeight);
        setX(ref.current.clientWidth);
        style()
    }, [winWidth]);
    useLayoutEffect(() => {
        style()
    }, [picX]);
    function style() {
        if (picY <= (picX*1.5)) {
            setStyle({width: "80%", minHeight: "100%", marginBottom: 0, paddingBottom:(((picX*1.5)-picY).toString()+"px")})
        } else {
            setStyle({width: "80%", minHeight: "100%", paddingBottom: 0, marginTop:(((picX*1.5)-picY).toString()+"px")})
        }
    }
    return (
        <div key={keys} className='col h-100 py-3' id='singleProduct'>
            <img ref={ref} id='shopPic' src={img} alt="" style={productStyle}/>
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {type}
                </div>
                <div>
                    x-value: {picX}<br/>
                    y-value: {picY}<br/>
                    shift: {(picX*1.5)-picY}
                </div>
            </div>
        </div>
    )
}

export default ShopProducts;