import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from "../Layouts/ProfileNav";
import getDetails from "../firebase/getDetails.js";
import { useEffect, useState } from 'react';

function MyInformation() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getDetails().then((res) => {
            const access = res._document.data.value.mapValue.fields;
            setEmail(access.email.stringValue);
            setName(access.name.stringValue.split(' ')[0]);
            setSurname(access.name.stringValue.split(' ')[1]);
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <div>
            <Nav />
            <ProfileNav current={'MyInformation'} />
            <div className="d-flex flex-column align-items-start" id='myInformationContainer'>
                <h4>ACCOUNT</h4>
                <div className="d-flex flex-row" id='namesContainer'>
                    <div className="d-flex flex-row">
                        <h5>NAME:</h5>
                        <h5 id='name'>{name}</h5>
                    </div>
                    <div id='surnameContainer' className="d-flex flex-row">
                        <h5>SURNAME:</h5>
                        <h5 id='name'>{surname}</h5>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-start'>
                    <div className='d-flex flex-row'>
                        <h5>EMAIL:</h5>
                        <h5 id='name'>{email}</h5>
                    </div>
                    <h5>PHONE:</h5>
                    <h5>ADDRESS:</h5>
                    <h5>PREFERRED PAYMENT METHOD:</h5>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyInformation;