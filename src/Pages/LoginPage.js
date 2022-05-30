import HomeNav from '../Layouts/HomeNav';
import Footer from '../Layouts/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase/firebase-config';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { getDetails } from '../firebase/getDetails.js';
import '../Assets/css/login.css';

function LoginPage() {
    const linkStyle = {
        // textDecoration: "none",
        color: '#453127'
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    async function resetPassword() {
        if (email !== '') {
            await sendPasswordResetEmail(auth, email).then((res) => {
                setText('Password reset email has been sent')
            }).catch((err) => {
                alert(err.message)
            })
        }
    }
    async function login() {
        if (email != '' && password != '') {
            signInWithEmailAndPassword(auth, email, password).then((user) => {
                setText('Login Successful');
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
        } else {
            setText('Please fill in all fields')
        }
    }
    return (
        <div>
            <HomeNav />
            <div>
                <div className='d-flex flex-col justify-content-center' id='loginContainerParent'>
                    <div id='loginContainer'>
                        <h3>LOGIN</h3>
                        <div id='input1'>
                            <input type="text" placeholder='Email          ' onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div id='input2'>
                            <input type="password" placeholder='Password       ' onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div id='buttonDiv'>
                            <button onClick={login}>LOG IN</button>
                        </div>
                        <div id='forgottenPassword'>
                            <p onClick={resetPassword}>Forgotten Password?</p>
                        </div>
                        <div id='register'>
                            <Link style={linkStyle} to='/RegisterPage/*'>REGISTER</Link>
                        </div>
                        <div id='errorDiv'>
                            {text != '' ? (
                                <div className='text-danger'>
                                    <h5>{text}</h5>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default LoginPage;