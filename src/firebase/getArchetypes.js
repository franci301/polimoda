import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase-config.js';

async function getArchetypes(archetype) {
    const docRef = doc(db, "Archetype Defi", archetype);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}
export default getArchetypes;