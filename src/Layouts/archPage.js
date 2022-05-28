import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import getArchetypes from '../firebase/getArchetypes.js';
import '../Assets/css/archPage.css';

function ArchPage() {

    const location = useLocation();
    const title = location.state.data.title;
    const img = location.state.data.img;
    const showTitle = title.toUpperCase();
    const databaseTitle = (title.split(' ')[1]);
    const [description, setDescription] = useState('');
    const [goals, setGoals] = useState('');
    const [traits, setTraits] = useState('');
    const [seeks, setSeeks] = useState('');

    useEffect(() => {
        getArchetypes(databaseTitle).then(data => {
            setDescription(data.specificDescription);
            setGoals(data.goal);
            setTraits(data.traits);
            setSeeks(data.seeks);
        })
    }, []);

    return (
        <div>
            <Nav />
            <div id='arch-page-container'>
                <br />
                <div id='title-container'>
                    <h2>{showTitle}</h2>
                </div>
                <br />
                <div className='d-flex flex-lg-row flex-column justify-content-start' id='main-div'>
                    <h4>Seeks: {seeks}</h4>
                    <h4>Traits: {traits}</h4>
                    <h4>Goal: {goals}</h4>
                </div>
                <br />
                <div className='d-flex flex-lg-row flex-column'>
                    <img src={img} alt={title + ' Image'} />
                    <p>
                        <h5 id='description-h5'>
                            {description}
                        </h5>
                    </p>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default ArchPage;