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
            console.log(res);
            for(const item in res){
                setItemArr(itemArr => [...itemArr, res[item]]);
            }
        })
        console.log(itemArr)
    }

    function toggleFilter() {
        if (!on) {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-3 align-items-start';
        } else {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-4 align-items-start';
        }
        toggle(!on);
    }

    return (
        <div>
            <Nav />
            <h2>SHOP YOUR PERSONALIZED SELECTION</h2>
            <br />
            <div className='d-flex flex-row px-5 justify-content-end' id='shopPageContainer'>
                <div className='end'>
                    <h4>FILTERS</h4>
                    <button onClick={toggleFilter}>Filters</button>
                </div>
                <div className='container sticky-right'>
                    <div id='cols' className='row row-cols-4 align-items-start'>
                        {itemArr === null ? 
                            <div>
                                list empty
                            </div>
                         :
                            itemArr.map((dict) => (
                                <ShopProducts key={dict.designerName} img={dict.stringLoc} />
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