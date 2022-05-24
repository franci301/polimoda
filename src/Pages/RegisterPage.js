import HomeNav from "../Layouts/HomeNav";
import Footer from "../Layouts/footer";
import { db, auth } from "../firebase/firebase-config";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateDoc, setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/registerPage.css';
import '../Assets/css/bottomFooter.css';
import { setUserId } from "firebase/analytics";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    async function updateFirebase(answers) {
        console.log(answers[0]);
        let user = JSON.parse(localStorage.getItem('userLoginTemp'))
        const userCollectionRef = doc(db, "users", user.user.uid);
        await updateDoc(userCollectionRef, {
            archetypesValue: answers[0],
            archetypeDescription: answers[1],
            archetypesImage: answers[2],
            archetypeOrder:answers[3]
        });
        // clear local storage
        localStorage.removeItem('userLoginTemp');
    }
    async function register() {
        setText('');
        if (name != '' && email != '' && password != '' && confirmPassword != '') {
            if (password === confirmPassword) {
                try {
                    const user = await createUserWithEmailAndPassword(auth, email, password);
                    // add user to local storage
                    localStorage.setItem('userLoginTemp', JSON.stringify(user));
                    const userCollectionRef = doc(db, 'users', user.user.uid);
                    console.log(userCollectionRef);
                    console.log(userCollectionRef);
                    await setDoc(userCollectionRef, {
                        name: name, email: email
                    });
                    let storedAnswers = JSON.parse(localStorage.getItem('testResults'))
                    if (storedAnswers) {
                        // push answers to firebase
                        updateFirebase(storedAnswers);
                        localStorage.removeItem('testResults');
                    }
                    navigate('/LoginPage/*')
                } catch (error) {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            setText(`${email} is already in use`);
                            break;
                        case 'auth/invalid-email':
                            setText(`${email} is not a valid email`);
                            break;
                        case 'auth/weak-password':
                            setText(`Password is too weak`);
                            break;
                        case 'auth/operation-not-allowed':
                            setText(`Operation not allowed`);
                            break;
                        case 'resource-exhausted':
                            setText(`Internal server error. Contact system administrator`);
                        default:
                            setText(`${error.message}`);
                            console.log(error)
                            console.log(error.message,error.code);
                            console.log(name,email,password,confirmPassword);
                            break;
                    }
                }
            } else {
                setText('Password not match');
            }
        } else {
            setText('Please fill all the fields');
        }
    }
    return (
        <div>
            <HomeNav />
            <br />
            <div>
                <div className="d-flex flex-col justify-content-center align-items-end">
                    <div id='registerContainer'>
                        <h3>REGISTER</h3>
                        <div id='input1'>
                            <input type="text" onChange={(event) => {
                                setName(event.target.value)
                            }} placeholder='Full Name' />
                        </div>
                        <div id='input2'>
                            <input type="text" onChange={(event) => {
                                setEmail(event.target.value)
                            }} placeholder='Email' />
                        </div>
                        <div id='input3'>
                            <input type="password" onChange={(event) => {
                                setPassword(event.target.value)
                            }} placeholder='Password' />
                        </div>
                        <div id='input4'>
                            <input type="password" onChange={(event) => {
                                setConfirmPassword(event.target.value)
                            }} placeholder='Confirm Password' />
                        </div>
                        <div id='buttonDiv'>
                            <button onClick={register}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='errorDiv'>
                {text != '' ? (
                    <div className="text-danger">
                        <h5>{text}</h5>
                    </div>
                ) :
                    null
                }
            </div>
            <div id='footerTest'>
                <Footer />
            </div>
        </div>
    );
}
export default RegisterPage;