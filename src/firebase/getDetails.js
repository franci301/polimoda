import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase/firebase-config.js';

async function getDetails() {
    const obj = localStorage.getItem('userLogin');
    const id = JSON.parse(obj).auth.currentUser.uid;
    const docRef = doc(db, "user", id);
    return await getDoc(docRef)
}
export default getDetails;