import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config.js';

async function getAllImages() {
    const querySnapshot = await getDocs(collection(db, "images"));
    return querySnapshot.docs.map(doc => doc.data());
}

export default getAllImages;