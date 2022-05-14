import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js'
import ProfileNav from '../Layouts/ProfileNav.js';
import OrderDetails from '../Layouts/OrderDetails.js';
import OrderDescription from '../Layouts/OrderDescription.js';
function MyOrders() {
    return (
        <div>
            <Nav />
            <ProfileNav current={'MyOrders'} />
            <div className="d-flex flex-column align-items-start" id='ordersContainer'>
                <h4>ACTIVE ORDERS</h4>
                <OrderDescription status={'SHIPPED'}/>
                <div className="d-flex flex-row">
                    <OrderDetails />
                    <OrderDetails />
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