import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from "../Layouts/ProfileNav";
import ShopProducts from '../Layouts/ShopProducts.js';
import { useState, useEffect,useLayoutEffect } from 'react';
// import product featured images from '../Assets/Images/product-featured'
import img1 from '../Assets/Images/product-featured/PRODUCT FEATURED - BODE New York (Hand-stitched Fleurette Long Sleeves Shirt) 685€.webp';
import img2 from '../Assets/Images/product-featured/PRODUCT FEATURED - Charlie Constantinou (Expandable Quilted Duffel Bag) 800€.png';
import img3 from '../Assets/Images/product-featured/PRODUCT FEATURED - Kusikoch (Nylon Trouser Red) 490€.webp';
import img4 from '../Assets/Images/product-featured/PRODUCT FEATURED - Uma Wang (Floral Single Breasted Blazer) 1720€.webp';
var itemsArr = [
    {
        key:1,
        img: img1,
        name: 'Andrej Gronau',
        price: '1080€'
    },
    {
        key:2,
        img:img2,
        name:'Charlie Constantinou',
        price:'800€'
    },
    {
        key:3,
        img:img3,
        name:'Kusikoch',
        price:'490€'
    },
    {
        key:4,
        img:img4,
        name:'Uma Wang',
        price:'1720€'
    }
]
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
            {size > 768 ? <ProfileNav /> : 
            <h2 style={{color:'var(--purple)'}} className='d-flex flex-row justify-content-center'>WISHLIST</h2>
            }
            <div className='container' id='wishlistContainer'>
                <div id='wishlistItems' className='row row-cols-lg-4 row-cols-2 align-items-start'>
                    {itemsArr.length == 0 ? (
                        <div>
                            You havent added anything to your wishlist yet
                        </div>
                    ):(
                        itemsArr.map((obj) => (
                            <ShopProducts key={obj.key} img={obj.img} name={obj.name} price={obj.price}/>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Wishlist;