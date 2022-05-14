function OrderDescription({ status }) {
    const completed = {
        color: '#f6c240'
    }
    const shipping = {
        color:'#3f285c'
    }
    return (
        <div>
            <div id='orderDescriptionContainer'>
                <div className="d-flex inline-flex" id='orderOne'>
                    <p>Order:578451</p>
                    {status == "SHIPPED" ? (
                        <h5 style={completed}>{status}</h5>
                    ) : (
                        <h5 style={shipping}>{status}</h5>
                    )}
                </div>
                <div className="d-flex inline-flex" id='orderTwo'>
                    <p>Tracking Number: 578451</p>
                </div>
            </div>
        </div>
    );
}
export default OrderDescription;