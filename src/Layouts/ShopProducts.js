import '../Assets/css/shopPage.css';
function ShopProducts({keys,img,name,type,price}) {
    return (
        <div key={keys} className='col py-3' id='singleProduct'>
            <img id='shopPic' src={img} alt="" />
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {type}
                </div>
                <div>
                    {price}
                </div>
            </div>
        </div>
    )
}

export default ShopProducts;