import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import duck from '../Assets/Images/duck.jpg';
import { Link } from 'react-router-dom'
import '../Assets/css/shopPage.css';

function ShopPage() {

    var itemsArr = ['1', '2', '3', '4', '5', '6', '7', '8']

    function changeCols() {
        var doc = document.getElementById('cols');
        doc.className = 'row row-cols-3 align-items-start'
    }
    return (
        <div>
            <Nav />
            <h2>SHOP YOUR PERSONALIZED SELECTION</h2>
            <br />
            <div className='d-flex flex-row px-5 justify-content-end'>
                <div className='end'>
                    <h4>FILTERS</h4>
                    <button onClick={changeCols}></button>
                </div>
                <div className='container sticky-right'>
                    <div id='cols' className='row row-cols-4 align-items-start'>

                        {itemsArr === null ? (
                            <div>
                                list empty
                            </div>
                        ) : (
                            itemsArr.map((dict) => (
                                <div key={dict} className='col py-3'>
                                    <Link to='/ProductPage/*'><img id='shopPic' src={duck} alt="" /></Link>
                                    <div>
                                        <div>
                                            Product Name
                                        </div>
                                        <div>
                                            Type
                                        </div>
                                        <div>
                                            Price
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div id='footerShop'>
                <Footer />
            </div>
        </div>
    );
}
export default ShopPage;