import '../Assets/css/shopPage.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp';
import img2 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp.webp';
import img3 from '../Assets/Images/product-featured/PERSONALITY TEST PRODUCT PAGE - Peter Do (Faux Leather Midi Dress) 2115€.webp(1).webp';
function ShopProducts({ keys, img, name, type, price }) {
    const navigate = useNavigate();

    function route() {
        navigate('/ProductPage/*', {
            state:
            {
                imgs: {img,img1,img2,img3},
                name: 'PETER DO', description: 'Faux leather with a high-shine finish, it has an A-line silhouette with zipped side pockets',
                details: "Peter Do articulates a youthful approach to design that is founded on razor sharp tailoring, architectural construction and honest textiles. Through a process of reduction, every detail is tested and refined to adapt to the complexities of women's lives.",
                price: '€2115', type: 'Faux Leather Midi Dress',
                manufacturingDetails: ['Mid-rise', 'Concealed zip fastening at outseam', 'Fully lined', '100% polyester, 55% polyurethane, 45% viscose, fully lined (62% viscose, 38% acetate)', ' Made in USA'],
                colour: 'Black'
            }
        })
    }

    return (
        <div key={keys} className='col py-3' id='singleProduct'>
            <>
                {type === 'Faux Leather Midi Dress' ? (
                    <img id='shopPic' src={img} alt="" onClick={route} />
                ) : (
                    <img id='shopPic' src={img} alt="" />
                )}
            </>
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