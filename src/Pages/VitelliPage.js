import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import BlogShop from '../Layouts/BlogShop.js';
import duck from '../Assets/Images/duck.jpg'
import topLeft from '../Assets/Images/blog-images/1st ARTICLE - BE A MAGICIAN JUST LIKE VITELLI.jpg'
import topRight1 from '../Assets/Images/blog-images/1st ARTICLE - BE A MAGICIAN JUST LIKE VITELLI(1).jpg'
import topRight2 from '../Assets/Images/blog-images/1st ARTICLE - BE A MAGICIAN JUST LIKE VITELLI(2).jpg'
import middle from '../Assets/Images/blog-images/1st ARTICLE - BE A MAGICIAN JUST LIKE VITELLI(3).jpg'
import vitelli1 from '../Assets/Images/blog-images/1st ARTICLE - Vitelli (Exclusive Brown Netted Explode Sweater) 600€.jpeg';
import vitelli2 from '../Assets/Images/blog-images/1st ARTICLE - Vitelli (Grey _ Red Doomboh Hoodie) 511€.jpeg';
import vitelli3 from '../Assets/Images/blog-images/1st ARTICLE - Vitelli (Multicolor Cropped Jacket) 330€.webp';
import vitelli4 from '../Assets/Images/blog-images/1st ARTICLE - Vitelli (Off-White _ Beige Siberian Cat Dress) 1165€.webp';
import '../Assets/css/blogscss.css';
function VitelliPage() {
    return (
        <div>
            <ResponsiveNav />
            <div id='vitelli-container'>
                <h1>BE A MAGICIAN JUST LIKE VITELLI - SUMMER TRENDS</h1>
                <div className='d-flex flex-column'>
                    <p>
                        BY ANGELA DI PEDE
                    </p>
                    <p>
                        APRIL 26, 2022
                    </p>
                </div>
                <div className='d-flex flex-row'>
                    <img src={topLeft} alt="" id='main-img-top' />
                    <div>
                        <div className='d-flex flex-row'>
                            <img src={topRight1} alt="" className='side-img-top' />
                            <img src={topRight2} alt="" className='side-img-top' />
                        </div>
                        <p>
                            As we are feeling the breeze of the summertime, we are being inspired by the unique world of the brand Vitelli and its visionary aesthetic that creates the perfect balance between the classic silhouettes and the expression of power personalization during this season.
                        </p>
                    </div>
                </div>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-column '>
                        <p>
                            We expect plenty of exciting reasons and occasions to get dressed up. For a little bit of summer outfit inspiration, between our favorite looks and trends that we have seen in the runway shows, there are definitely the 70s delicate crocheting and bright patterns, handcrafted designs, striped tees, cut outs and midi-dress paired with sandals. These are typical summer outfit ideas that are incredibly simple but do not lack personality. There are casual, everyday Vitelli’s staples that can take you from breakfast to the beach. Think lightweight fabrics and relaxed silhouettes, with a beautiful pair of sunglasses on, you would automatically dream of your August holiday. We can say with confidence that summer crochet knitted dresses, trousers, tops and even swimwear can be adapted for every day and are a must-have for this summer.
                        </p>
                        <p>
                        Check the latest arrivals from Vitelli, the fashion brand that focuses on made in Italy knitwear through the use of regenerated yarn, with a young, dynamic sought-after style. 
                        </p>
                    </div>
                    <img src={middle} alt="" />
                </div>
                <BlogShop obj={[[vitelli1, vitelli2, vitelli3, vitelli4], ['Vitelli'], ['Exclusive Brown Netted Explode Sweater', 'Grey Red Doomboh Hoodie', 'Multicolor Cropped Jacket', 'Off-White Beige Siberian Cat Dress'], ['600€', '511€', '330€', '1165€']]} />
            </div>
            <Footer />
        </div>
    );
}
export default VitelliPage;