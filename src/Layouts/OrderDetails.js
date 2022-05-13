import duck from '../Assets/Images/duck.jpg'
function OrderDetails() {
    return (
        <div className="d-flex inline-flex" id='OrderContainer'>
            <img src={duck} alt="" id='orderImg' />
            <div id='OrderTxt'>
                <p>Brand</p>
                <p>Colour</p>
                <p>Type</p>
                <p>Size:S</p>
                <p>Price</p>
            </div>
        </div>
    );
}
export default OrderDetails;