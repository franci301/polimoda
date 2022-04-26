import HomeNav from "../Layouts/HomeNav";
import Footer from "../Layouts/footer";
import { db, auth } from "../firebase/firebase-config";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import '../Assets/css/bottomFooter.css';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    async function register() {
        if (name != '' && email != '' && password != '' && confirmPassword != '') {
            if (password === confirmPassword) {
                try{
                    const user = await createUserWithEmailAndPassword(auth, email, password);
                    const userCollectionRef = doc(db, 'users', user.user.uid);
                    console.log('userCollectionRef', userCollectionRef);
                    await setDoc(userCollectionRef, {
                        name: name, email: email
                    });
                    navigate('/LoginPage/*')
                }catch(error){
                    switch(error.code){
                        case 'auth/email-already-in-use':
                            alert(`${email} is already in use`);
                            break;
                        case 'auth/invalid-email':
                            alert(`${email} is not a valid email`);
                            break;
                        case 'auth/weak-password':
                            alert(`Password is too weak`);
                            break;
                            case 'auth/operation-not-allowed':
                            alert(`Operation not allowed`);
                            break;
                        default:
                            alert(`${error.code}`);
                            console.log(error.message);
                            break;
                    }
                }
            } else {
                alert('Password not match');
            }
        } else {
            alert('Please fill all the fields');
        }
    }
    return (
        <div>
            <HomeNav />
            Register Page
            <br />
            <div>
                <div className="d-flex flex-column justify-content-center">
                    <div>
                        Full Name<input type="text" onChange={(event) => {
                            setName(event.target.value)
                        }} />
                    </div>
                    <div>
                        Email <input type="text" onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    </div>
                    <div>
                        Password <input type="password" onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <div>
                        Confirm Password <input type="password" onChange={(event) => {
                            setConfirmPassword(event.target.value)
                        }} />
                    </div>
                    <div>
                        <button className="btn btn-dark" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
            <div id='footerTest'>
                <Footer />
            </div>
        </div>
    );
}
export default RegisterPage;