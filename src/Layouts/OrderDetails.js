function OrderDetails({img,brand,colour,type,size,price}) {
    return (
        <div className="d-flex inline-flex" id='OrderContainer'>
            <img src={img} alt="" id='orderImg' />
            <div id='OrderTxt'>
                <p>{brand}</p>
                <p>{colour}</p>
                <p>{type}</p>
                <p>Size:{size}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
export default OrderDetails;