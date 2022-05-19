import {Link} from 'react-router-dom';
import duck from '../Assets/Images/duck.jpg';
import '../Assets/css/shopPage.css';
function ShopProducts({keys,img}) {
    return (
        <div key={keys} className='col py-3' id='singleProduct'>
            <Link to='/ProductPage/*'><img id='shopPic' src={img} alt="" /></Link>
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
    )
}

export default ShopProducts;