import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from "../Layouts/ProfileNav";
import ShopProducts from '../Layouts/ShopProducts.js';
var itemsArr = ['1', '2', '3', '4', '5', '6']
function Wishlist() {
    return (
        <div>
            <Nav />
            <ProfileNav current={'Wishlist'} />
            <div className='container' id='wishlistContainer'>
                <div id='wishlistItems' className='row row-cols-4 align-items-start'>
                    {itemsArr === null ? (
                        <div>
                            list empty
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