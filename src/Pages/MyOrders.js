import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js'
import ProfileNav from '../Layouts/ProfileNav.js';
import OrderDetails from '../Layouts/OrderDetails.js';
import OrderDescription from '../Layouts/OrderDescription.js';
import { useState,useLayoutEffect } from 'react';
import img1 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg';
import '../Assets/css/orders.css'
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
                    <OrderDetails img={img1} brand={'Vitelli'} colour={'Pluto'} type={'Multicolor Doomboh Trousers'} size={'S'} price={'420€'}/>
                </div>
                <h4>PREVIOUS ORDERS</h4>
                <h3>April 2022</h3>
                <OrderDescription status={'COMPLETED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails />
                    <OrderDetails />
                </div>
                <h3>December 2021</h3>
                <OrderDescription status={'COMPLETED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails />
                    <OrderDetails />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default MyOrders;