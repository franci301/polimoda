import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import duck from '../Assets/images/duck.jpg';
import '../Assets/css/Product.css';

function ProductPage() {
    return (
        <div>
            <Nav />
            <br />
            <div className='d-flex flex-row' >
                <div className='d-flex flex-row'> 
                    <div className='d-flex flex-column'>
                        <div id='sideDiv'>
                            <img id='sidePic' src={duck} alt="" />
                        </div>
                        <div id='sideDiv'>
                            <img id='sidePic' src={duck} alt="" />
                        </div>
                        <div id='sideDiv'>
                            <img id='sidePic' src={duck} alt="" />
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <img src={duck} alt="" /> 
                    </div>
                </div>
                {/* <div className='' id='sideContainer'>
                    <div className='d-flex flex-column' >
                        <img id='productPicSide'
                            src={duck}
                            alt="" />
                        <img id='productPicSide'
                            src={duck}
                            alt="" />
                        <img id='productPicSide'
                            src={duck}
                            alt="" />
                    </div>
                </div>
                <div>
                    <img id='ProductPicMain'
                        src={duck}
                        alt="" />
                </div> */}
                <div > { /* sold out? */}
                    <div id='ProductAvailability' >
                        SOLD OUT
                    </div>
                    <div >
                        <div id='productTitle' >
                            < h5 > MS MIN </h5>
                            <div className='d-flex' >
                                <h6 > Bomber </h6>
                                <p > Price </p>
                            </div>
                            <p > Product description </p>
                        </div>
                    </div>
                    <div id='productDetails'>
                        <p>Product Details</p>
                    </div>
                    <div>
                        <h6>Size</h6>
                        <select name="" id="">
                            <option value="A">XS</option>
                            <option value="A">S</option>
                            <option value="A">M</option>
                            <option value="A">L</option>
                            <option value="A">XL</option>
                        </select>
                    </div>
                    <button className='btn btn-dark'>ADD TO CART</button>
                </div>
            </div>
            <TestAd />
            <br />
            <Footer />
        </div>
    );
}

export default ProductPage;