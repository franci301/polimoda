import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase-config.js';

async function getDetails() {
    const obj = localStorage.getItem('userLogin');
    const id = JSON.parse(obj).user.uid;
    const docRef = doc(db, "users", id);
    return await getDoc(docRef)
}
export default getDetails;