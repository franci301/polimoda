import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import { useLocation } from 'react-router-dom';
import '../Assets/css/Product.css';

function ProductPage() {
    const location = useLocation();
    let ignore = true

    if(location.state != null){
        ignore = false
    }
    
   
    return (
        <div>
            <Nav />
            <br />
            <div className='d-flex flex-row justify-content-center'>
                <div className="outer container" id='bigContainer'>
                    <div className="container flex-child" id='bigContainer'>
                        <div className="div">
                            <img src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                        </div>
                        <div className="div">
                            <img src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                        </div>
                        <div className="div">
                            <img src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                        </div>
                    </div>
                    <div className="container div flex-child" id='div-r'>
                        {ignore ?
                            (
                                <img id='main'src='https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                            ) : (
                                <img id='main' src={location.state.img} />
                            )}

                    </div>
                </div>
                <div > { /* sold out? */}
                    <div id='ProductAvailability' >
                        SOLD OUT
                    </div>
                    <div >
                        <div id='productTitle' >
                            < h5 > MS MIN </h5>
                            <div className='d-flex flex-column' >
                                <h6 > Product Name </h6>
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
                    <br />
                    <button className='btn btn-dark'>ADD TO CART</button>
                </div>
            </div>
            <div id='productAd'>
                <TestAd />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default ProductPage;