import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from "../Layouts/ProfileNav";
import ShopProducts from '../Layouts/ShopProducts.js';
import { useState, useEffect,useLayoutEffect } from 'react';

var itemsArr = []
function Wishlist() {
    const [size,setSize] = useState(0);


    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div>
            <ResponsiveNav />
            {size > 768 ? <ProfileNav /> : null}
            <div className='container' id='wishlistContainer'>
                <div id='wishlistItems' className='row row-cols-4 align-items-start'>
                    {itemsArr.length == 0 ? (
                        <div>
                            not displaying bc i need to pass the correct props to the component
                        </div>
                    ) : (
                        itemsArr.map((dict) => (
                            <ShopProducts key={dict} />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Wishlist;