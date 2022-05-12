import HomeNav from "../Layouts/HomeNav";
import Footer from "../Layouts/footer";
import { db, auth } from "../firebase/firebase-config";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateDoc, setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/bottomFooter.css';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    async function updateFirebase(answers) {
        let user = JSON.parse(localStorage.getItem('userLogin'))
        const userCollectionRef = doc(db, "users", user.user.uid);
        await updateDoc(userCollectionRef, {
            archetypesValue: answers[0],
            archetypesImage: answers[1]
        });
    }
    async function register() {
        setText('');
        if (name != '' && email != '' && password != '' && confirmPassword != '') {
            if (password === confirmPassword) {
                try {
                    const user = await createUserWithEmailAndPassword(auth, email, password);
                    const userCollectionRef = doc(db, 'users', user.user.uid);
                    await setDoc(userCollectionRef, {
                        name: name, email: email
                    });
                    let storedAnswers = JSON.parse(localStorage.getItem('testResults'))
                    console.log(storedAnswers[0]);
                    if (storedAnswers) {
                        // push answers to firebase
                        updateFirebase(storedAnswers);
                        localStorage.removeItem('testResults');
                    }
                    setText('Account created successfully!');
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
                            setText(`Internal server error. Contant system administrator`);
                        default:
                            setText(`${error.code}`);
                            console.log(error.message);
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
                    {text != '' ? (
                        <div className="text-danger">
                            <p>{text}</p>
                        </div>
                    ) :
                        null
                    }
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