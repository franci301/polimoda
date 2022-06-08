import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ShopProducts from '../Layouts/ShopProducts.js';
import UploadImages from '../Assets/uploadImages.js';
import { useState, useEffect } from 'react';
import getImages from '../firebase/getAllItems.js';
import getDetails from '../firebase/getDetails.js';
import TestAd from '../Layouts/testAd.js';
import '../Assets/css/shopPage.css';

function ShopPage() {
    const [trigger, setTrigger] = useState(true);
    const [on, toggle] = useState(false);
    const [category, toggleCat] = useState(false);
    const [gender, toggleGender] = useState(false);
    const [itemArr, setItemArr] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    // const [archetypeOrder, setArchOrder] = useState([]);
    const [bool, setBool] = useState(true);
    const numCatFilters = 10;
    const numGenderFilters = 3;
    const totNumFilters = numCatFilters + numGenderFilters;
    let archetypeOrder = [];
    let tempFilters = [];

    useEffect(() => {
        get();
    }, []);


    async function get() {
        await getDetails().then((res) => {
            const access = res._document.data.value.mapValue.fields;
            if (access.archetypeOrder.arrayValue !== null) {
                for (let index = 0; index < access.archetypeOrder.arrayValue.values.length; index++) {
                    archetypeOrder.push(access.archetypeOrder.arrayValue.values[index].stringValue);
                }
                getImagesHere();
            } else {
                setBool(false);
            }
        }).catch((err) => {
            setBool(false);
        });
    }

    async function getImagesHere() {
        let tempArr = [];
        await getImages().then((res) => {
            for (const item in res) {
                tempArr.push(res[item]);
                tempArr.sort((a, b) => a.groupName.localeCompare(b.groupName));
            }
            setItemArr(tempArr.sort(function (a, b) {
                return archetypeOrder.indexOf(a.groupName) - archetypeOrder.indexOf(b.groupName);
            }))
        });
    }

    function upload() {
        UploadImages();
    }

    function updateFilters() {
        setFilteredItems([]);
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
                } else if (!currentInput.checked && filters.includes(currentInput.className)) {
                    // remove the className of the unselected checkbox from the filters array
                    filters.splice(filters.indexOf(currentInput.className), 1);
                    console.log(currentInput.className, ' is no longer checked');
                }
            }
            console.log(filters, genderFilters);
            filterItems(filters, genderFilters);
        } else {
            setFilteredItems([]);
        }
    }

    function filterItems(filters, genderFilters) {
        tempFilters = [];
        // sort by filter and gender
        // one issue is when i click menswear and then save and then add a filter nothing changes
        for (let index = 0; index < itemArr.length; index++) {
            if (filters.includes(itemArr[index].productFilter) && !tempFilters.includes(itemArr[index]) && genderFilters.includes(itemArr[index].gender)) {
                // both filters selected
                tempFilters.push(itemArr[index])
            } else if (filters.includes(itemArr[index].productFilter) && !tempFilters.includes(itemArr[index]) && genderFilters.length === 0) {
                // no gender filters and only filters selected
                tempFilters.push(itemArr[index])
            } else if (filters.length === 0 && genderFilters.includes(itemArr[index].gender) && !tempFilters.includes(itemArr[index])) {
                // no filters and only gender filters selected
                tempFilters.push(itemArr[index])
            }
        }
        // compare 2 arrays and remove elements that do not match
        genderFilters.length !== 0 ? (
            tempFilters.filter(item => genderFilters.includes(item.gender))
        ) : (
            tempFilters.filter(item => filters.includes(item.productFilter))
        )
        console.log(tempFilters)
        setTrigger(!trigger)
        tempFilters.sort((a, b) => a.groupName.localeCompare(b.groupName));
        setFilteredItems(tempFilters);
    }

    function clearFilters() {
        for (let index = 0; index < totNumFilters + 1; index++) {
            document.getElementById(`filter${index}`).checked = false;
        }
        setFilteredItems([]);
        setTrigger(!trigger)
        console.log("filters cleared")
    }

    function toggleFilter() {
        if (!on) {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-lg-5 row-cols-md-2 row-cols-sm-1 row-cols-1 align-items-start';
            let filters = document.getElementById('innerUl');
            filters.style.height = '200px';
            filters.style.opacity = 1;
            filters.style.display = 'block';
            filters.style.zIndex = 100;
            filters.style.transform = 'translateY(0)';
        } else {
            var doc = document.getElementById('cols');
            doc.className = 'row row-cols-lg-5 row-cols-md-2 row-cols-sm-1 row-cols-1 align-items-start';
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
        if (id === 'categoryUl') {
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

    return (
        <div id='shopContainer'>
            <ResponsiveNav />
            <h2>SHOP YOUR PERSONALIZED SELECTION</h2>
            {/* <button onClick={upload}>upload</button> */}
            <br />
            <div className='d-flex flex-row px-lg-5 justify-content-end' id='shopPageContainer'>
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
                                    <h5>
                                        CATEGORY
                                    </h5>
                                </div>
                                <ul id='categoryUl'>
                                    <li><label><input type="checkbox" className='All' id='filter0' />All<span></span></label></li>
                                    <li><label><input type="checkbox" className='Coat' id='filter1' />Coats<span></span></label></li>
                                    <li><label><input type="checkbox" className='Jacket' id='filter2' />Jackets<span></span></label></li>
                                    <li><label><input type="checkbox" className='Sweater' id='filter3' />Sweaters<span></span></label></li>
                                    {/* <li><label><input type="checkbox" className='T-shirt' id='filter4' />T-shirts<span></span></label></li> */}
                                    <li><label><input type="checkbox" className='Shirt & Blouse' id='filter4' />Shirts & Blouses<span></span></label></li>
                                    <li><label><input type="checkbox" className='Pants' id='filter5' />Pants<span></span></label></li>
                                    <li><label><input type="checkbox" className='Skirt' id='filter6' />Skirts<span></span></label></li>
                                    <li><label><input type="checkbox" className='Dress' id='filter7' />Dresses<span></span></label></li>
                                    <li><label><input type="checkbox" className='Shoes' id='filter8' />Shoes<span></span></label></li>
                                    <li><label><input type="checkbox" className='Bag' id='filter9' />Bags<span></span></label></li>
                                    <li><label><input type="checkbox" className='Jewelry' id='filter10' />Jewelry<span></span></label></li>
                                </ul>
                            </li>
                            <li id='genderLi'>
                                <div onClick={() => toggleInnerFilters('genderUl')}>
                                    <h5>
                                        GENDER
                                    </h5>
                                </div>
                                <ul id='genderUl'>
                                    <li><label><input type="checkbox" className='Womenswear' id='filter11' />Womenswear<span></span></label></li>
                                    <li><label><input type="checkbox" className='Menswear' id='filter12' />Menswear<span></span></label></li>
                                    <li><label><input type="checkbox" className='Gender-neutral' id='filter13' />Gender-Neutral<span></span></label></li>
                                </ul>
                            </li>
                            <div className='d-flex flex-row justify-content-start' id='filters-div'>
                                <li><h5 onClick={updateFilters}>SAVE</h5></li>
                                <li><h5 onClick={clearFilters}>CLEAR</h5></li>
                            </div>
                        </ul>
                    </li>
                </ul>
                <div className='container sticky-right'>
                    <div id='cols' className='row row-cols-lg-5 row-cols-md-2 row-cols-sm-1 row-cols-1 align-items-start'>
                        {bool === false ? (
                            <div id='testContainerShop'>
                                <TestAd />
                            </div>
                        ) : (
                            <>
                                {filteredItems.length === 0 ?
                                    itemArr.map((dict, index) => (
                                        <ShopProducts key={index} img={dict.stringLoc} name={dict.designerName} type={dict.productType} price={dict.price} trigger={trigger} />
                                    ))
                                    :
                                    filteredItems.map((dict, index) => (
                                        <ShopProducts key={index} img={dict.stringLoc} name={dict.designerName} type={dict.productType} price={dict.price} trigger={trigger} />
                                    ))
                                }
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default ShopPage;