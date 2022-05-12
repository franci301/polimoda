import HomeNav from '../Layouts/HomeNav';
import Footer from '../Layouts/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, db } from '../firebase/firebase-config';
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import '../Assets/css/login.css';

function LoginPage() {
    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    
    async function login() {
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            setText('Login Successful');
            const localAuth = auth;
            localStorage.setItem('userLogin', JSON.stringify(user));
            
            navigate('/HomePage/*')
        }).catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    setText(`That is not a valid email`);
                    break;
                case 'auth/user-not-found':
                    setText(`${email} is not registered`);
                    break;
                case 'auth/wrong-password':
                    setText(`Incorrect password`);
                    break;
                case 'resource-exhausted':
                    setText(`Internal server error. Contant system administrator`);
                default:
                    setText(`${error.code}`);
                    console.log(error.message);
            }
        })
    }
    return (
        <div>
            <HomeNav />
            <div>
                <div className='d-flex flex-col justify-content-center'>
                    <div>
                        <div>
                            Email<input type="text" onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div>
                            Password<input type="password" onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        {text != '' ? (<div className='text-danger'>{text}</div>) : <div></div>}
                        <div>
                            <button className='btn btn-dark' onClick={login}>Login</button>
                        </div>
                    </div>
                    <Link style={linkStyle} to='/RegisterPage/*'>Register</Link>
                </div>
            </div>
            <div id='bottomFooter'>
                <Footer />
            </div>
        </div>
    );
}
export default LoginPage;