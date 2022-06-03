import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config.js';

async function getArchImgs() {
    const querySnapshot = await getDocs(collection(db, "arch-images"));
    return querySnapshot.docs.map(doc => doc.data());
}
export default getArchImgs;