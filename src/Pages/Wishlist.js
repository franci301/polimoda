import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from "../Layouts/ProfileNav";
import ShopProducts from '../Layouts/ShopProducts.js';
var itemsArr = []
function Wishlist() {
    return (
        <div>
            <ResponsiveNav />
            <ProfileNav current={'Wishlist'} />
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