import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import ShopProducts from '../Layouts/ShopProducts.js';
import UploadImages from '../Assets/uploadImages.js';
import { useState, useEffect } from 'react';
import getImages from '../firebase/getAllItems.js';
import '../Assets/css/shopPage.css';

function ShopPage() {
    const [on, toggle] = useState(false);
    const [itemArr, setItemArr] = useState([]);

    useEffect(() => {
        get()

    }, []);

    async function get() {
        await getImages().then((res) => {
            for (const item in res) {
                setItemArr(itemArr => [...itemArr, res[item]]);
            }
        });
    }

    function upload() {
        UploadImages();
    }


    function toggleFilter() {
        if (!on) {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-4 align-items-start';
            let filters = document.getElementById('innerUl');
            filters.style.height = '200px';
            filters.style.opacity = 1;
            filters.style.transform = 'translateY(0)';

        } else {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-5 align-items-start';
            var filters = document.getElementById('innerUl');
            filters.style.height = '0';
            filters.style.opacity = 0;
            filters.style.transition = 'all 0.5s ease';
        }
        toggle(!on);
    }

    return (
        <div>
            <Nav />
            <h2>SHOP YOUR PERSONALIZED SELECTION</h2>
            <button onClick={upload}>upload</button>
            <br />
            <div className='d-flex flex-row px-5 justify-content-end' id='shopPageContainer'>
                <ul className="menu" id='outerUl'>
                    <li id='firstLi'>
                        <label className='d-flex flex-row'>
                            <div id='filterButton' onClick={toggleFilter}><h4>FILTERS</h4></div>
                            <input type="checkbox" id="menu" />
                            <label for="menu" class="icon">
                                <div class="menu"></div>
                            </label>
                        </label>
                        <ul id='innerUl'>
                            <li><a href="#">Child Link</a></li>
                            <li><a href="#">Child Link</a></li>
                            <li><a href="#">Child Link</a></li>
                            <li><a href="#">Child Link</a></li>
                        </ul>
                    </li>
                </ul>
                <div className='container sticky-right'>
                    <div id='cols' className='row row-cols-5 align-items-start'>
                        {itemArr === null ?
                            <div>
                                list empty
                            </div>
                            :
                            itemArr.map((dict) => (
                                <ShopProducts key={dict.productType} img={dict.stringLoc} name={dict.designerName} type={dict.productType} price={dict.price} />
                            )
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