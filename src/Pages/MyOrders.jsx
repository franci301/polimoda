import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js'
import ProfileNav from '../Layouts/ProfileNav.js';
import OrderDetails from '../Layouts/OrderDetails.js';
import OrderDescription from '../Layouts/OrderDescription.js';
import { useState,useLayoutEffect } from 'react';
import img1 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg';
import img2 from '../Assets/Images/product-featured/PRODUCT FEATURED - Andrej Gronau (Exclusive Multicolor Check Lurex Dress) 1080€.jpeg';
import img3 from '../Assets/Images/product-featured/PRODUCT FEATURED - 16Arlington (Pendal Feather Top) 1095€.webp';
import img4 from '../Assets/Images/product-featured/PRODUCT FEATURED - Charlie Constantinou (Expandable Quilted Duffel Bag) 800€.png';
function MyOrders() {
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
            <div className="d-flex flex-column align-items-start" id='ordersContainer'>
                <h4>ACTIVE ORDERS</h4>
                <OrderDescription status={'SHIPPED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails img={img1} brand={'Vitelli'} colour={'Pluto'} type={'Multicolor Doomboh Trousers'} size={'S'} price={'420€'}/>
                    <OrderDetails img={img2} brand={'Andrej Gronau'} colour={'Multicolor'} type={'Check Lurex Dress'} size={'L'} price={'1080€'}/>
                </div>
                <h4>PREVIOUS ORDERS</h4>
                <h3 style={{color:'var(--brown)'}}>December 2022</h3>
                <OrderDescription status={'COMPLETED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails img={img4} brand={'Charlie Constantinou'} colour={'Green'} type={'Expandable Quilted Duffel Bag'} size={'XS'} price={'800€'}/>
                </div>
                <h3 style={{color:'var(--brown)'}}>September 2022</h3>
                <OrderDescription status={'COMPLETED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails img={img3} brand={'16Arlington'} colour={'Pendal'} type={'Feather Top'} size={'M'} price={'1095€'}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default MyOrders;