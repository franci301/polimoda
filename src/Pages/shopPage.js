import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ShopProducts from '../Layouts/ShopProducts.js';
import UploadImages from '../Assets/uploadImages.js';
import { useState, useEffect } from 'react';
import getImages from '../firebase/getAllItems.js';
import '../Assets/css/shopPage.css';

function ShopPage() {
    const [on, toggle] = useState(false);
    const [category, toggleCat] = useState(false);
    const [gender, toggleGender] = useState(false);
    const [itemArr, setItemArr] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const totNumFilters = 14;
    const numCatFilters = 11;
    const numGenderFilters = 3;

    useEffect(() => {
        get();
    }, []);

    async function get() {
        await getImages().then((res) => {
            for (const item in res) {
                setItemArr(itemArr => [...itemArr, res[item]]);
                setItemArr(itemArr => itemArr.sort((a, b) => a.groupName.localeCompare(b.groupName)));
            }
            // sort the item array by group groupName
        });
    }

    function upload() {
        UploadImages();
    }

    function updateFilters() {
        let genderFilters = []
        for (let index = numCatFilters + 1; index < numCatFilters + numGenderFilters + 1; index++) {
            let currentInput = document.getElementById(`filter${index}`);
            if (currentInput.checked && !genderFilters.includes(currentInput.className)) {
                genderFilters.push(currentInput.className);
            }
        }

        if (!document.getElementById(`filter0`).checked) {
            let filters = [];
            for (let index = 1; index < numCatFilters; index++) {
                let currentInput = document.getElementById(`filter${index}`);
                if (currentInput.checked && !filters.includes(currentInput.className)) {
                    // get the className of the selected checkbox
                    filters.push(currentInput.className);
                }
            }
            filterItems(filters, genderFilters);
        } else {
            setFilteredItems([]);
        }
    }

    function filterItems(filters, genderFilters) {
        // sort by filter 
        // one issue is when i click menswear and then save and then add a filter nothing changes
            for (let index = 0; index < itemArr.length; index++) {
                if (filters.includes(itemArr[index].productFilter) && !filteredItems.includes(itemArr[index]) && genderFilters.includes(itemArr[index].gender)) {
                    console.log('ran with gender filters')
                    setFilteredItems(filteredItems => [...filteredItems, itemArr[index]]);
                }else if (filters.includes(itemArr[index].productFilter) && !filteredItems.includes(itemArr[index]) && genderFilters.length === 0) {
                    console.log('ran without gender filters')
                    setFilteredItems(filteredItems => [...filteredItems, itemArr[index]]);
                }else if(filters.length === 0 && genderFilters.includes(itemArr[index].gender)){
                    setFilteredItems(filteredItems => [...filteredItems, itemArr[index]]);
                }
            }
        // compare 2 arrays and remove elements that do not match
        if(genderFilters.length != 0){
            setFilteredItems(filteredItems => filteredItems.filter(item => genderFilters.includes(item.gender)));
        }else{
            setFilteredItems(filteredItems => filteredItems.filter(item => filters.includes(item.productFilter)));
        }
        setFilteredItems(filteredItems => filteredItems.sort((a, b) => a.groupName.localeCompare(b.groupName)));
    }

    function clearFilters() {
        for (let index = 0; index < totNumFilters + 1; index++) {
            document.getElementById(`filter${index}`).checked = false;
        }
        setFilteredItems([]);
    }

    function toggleFilter() {
        if (!on) {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-4 align-items-start';
            let filters = document.getElementById('innerUl');
            filters.style.height = '200px';
            filters.style.opacity = 1;
            filters.style.display = 'block';
            filters.style.zIndex = 100;
            filters.style.transform = 'translateY(0)';
        } else {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-5 align-items-start';
            var filters = document.getElementById('innerUl');
            filters.style.height = 0;
            filters.style.opacity = 0;
            filters.style.display = 'none';
            filters.style.zIndex = -1;
            filters.style.transition = 'all 0.5s ease';
            // this resets the filter drop downs so theyre closed when you open up the filters again
            let catFilters = document.getElementById('categoryUl');
            catFilters.style.height = 0;
            catFilters.style.opacity = 0;
            catFilters.style.zIndex = -1;
            catFilters.style.display = 'none';
            catFilters.style.transition = 'all 0.5s ease';
            let genderFilters = document.getElementById('genderUl');
            genderFilters.style.height = 0;
            genderFilters.style.opacity = 0;
            genderFilters.style.display = 'none';
            genderFilters.style.transition = 'all 0.5s ease';

        }
        toggle(!on);
    }

    function toggleInnerFilters(id) {
        if (id == 'categoryUl') {
            let filters = document.getElementById(id);
            if (!category) {
                filters.style.height = '100%';
                filters.style.opacity = 1;
                filters.style.display = 'block';
                filters.style.zIndex = 1;
                filters.style.transform = 'translateY(0)';
            } else {
                filters.style.height = 0;
                filters.style.opacity = 0;
                filters.style.display = 'none';
                filters.style.zIndex = -1;
                filters.style.transition = 'all 0.5s ease';
            }
            toggleCat(!category);
        } else {
            let filters = document.getElementById(id);
            if (!gender) {
                filters.style.height = '50%';
                filters.style.opacity = 1;
                filters.style.display = 'block';
                filters.style.transform = 'translateY(0)';
            } else {
                filters.style.height = 0;
                filters.style.opacity = 0;
                filters.style.display = 'none';
                filters.style.transition = 'all 0.5s ease';
            }
            toggleGender(!gender);
        }
    }

    function test() {
        console.log('Unbalance Dress - Light Beige'.includes('Dress'))
    }

    return (
        <div>
            <ResponsiveNav />
            <h2>SHOP YOUR PERSONALIZED SELECTION</h2>
            <button>upload</button>
            <br />
            <div className='d-flex flex-row px-5 justify-content-end' id='shopPageContainer'>
                <ul className="menu" id='outerUl'>
                    <li id='firstLi'>
                        <label className='d-flex flex-row'>
                            <div id='filterButton' onClick={toggleFilter}><h4>FILTERS</h4></div>
                            <input type="checkbox" id="menu" />
                            <label htmlFor="menu" className="icon" onClick={toggleFilter}>
                                <div className="menu"></div>
                            </label>
                        </label>
                        <ul id='innerUl'>
                            <li id='categoryLi'>
                                <div onClick={() => toggleInnerFilters('categoryUl')}>
                                    <h4>
                                        CATEGORY
                                    </h4>
                                </div>
                                <ul id='categoryUl'>
                                    <li><label><input type="checkbox" className='All' id='filter0' />All<span></span></label></li>
                                    <li><label><input type="checkbox" className='Coat' id='filter1' />Coats<span></span></label></li>
                                    <li><label><input type="checkbox" className='Jacket' id='filter2' />Jackets<span></span></label></li>
                                    <li><label><input type="checkbox" className='Sweater' id='filter3' />Sweaters<span></span></label></li>
                                    <li><label><input type="checkbox" className='T-shirt' id='filter4' />T-shirts<span></span></label></li>
                                    <li><label><input type="checkbox" className='Shirt & Blouse' id='filter5' />Shirts & Blouses<span></span></label></li>
                                    <li><label><input type="checkbox" className='Pants' id='filter6' />Pants<span></span></label></li>
                                    <li><label><input type="checkbox" className='Skirt' id='filter7' />Skirts<span></span></label></li>
                                    <li><label><input type="checkbox" className='Dress' id='filter8' />Dresses<span></span></label></li>
                                    <li><label><input type="checkbox" className='Shoes' id='filter9' />Shoes<span></span></label></li>
                                    <li><label><input type="checkbox" className='Bag' id='filter10' />Bags<span></span></label></li>
                                    <li><label><input type="checkbox" className='Jewelry' id='filter11' />Jewelry<span></span></label></li>
                                </ul>
                            </li>
                            <li id='genderLi'>
                                <div onClick={() => toggleInnerFilters('genderUl')}>
                                    <h4>
                                        GENDER
                                    </h4>
                                </div>
                                <ul id='genderUl'>
                                    <li><label><input type="checkbox" className='Womenswear' id='filter12' />Womenswear<span></span></label></li>
                                    <li><label><input type="checkbox" className='Menswear' id='filter13' />Menswear<span></span></label></li>
                                    <li><label><input type="checkbox" className='Gender-Neutral' id='filter14' />Gender-Neutral<span></span></label></li>
                                </ul>
                            </li>
                            <li><h4 onClick={updateFilters}>SAVE</h4></li>
                            <li><h4 onClick={clearFilters}>CLEAR</h4></li>
                        </ul>
                    </li>
                </ul>
                <div className='container sticky-right'>
                    <div id='cols' className='row row-cols-5 align-items-start'>
                        {filteredItems.length === 0 ?
                            itemArr.map((dict,index) => (
                                <ShopProducts key={index} img={dict.stringLoc} name={dict.designerName} type={dict.productType} price={dict.price} />
                            )
                            )
                            :
                            filteredItems.map((dict,index) => (
                                <ShopProducts key={index} img={dict.stringLoc} name={dict.designerName} type={dict.productType} price={dict.price} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShopPage;