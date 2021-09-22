import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase.config';

const addContact = async (contact) => {
    try {
        await addDoc(collection(db, "contacts"), contact);
    } catch (e) {
        console.error("Error adding contacts: ", e);
    }
}

const getContacts = async () => {
    try {
        const snapShot = await getDocs(collection(db, "contacts"));
        let contacts = [];
        snapShot.forEach(c => contacts.push({ ...c.data(), contactId: c.id }));
        return contacts;
    } catch (e) {
        console.error("Error getting contacts: ", e);
    }
}

const updateContact = async (contactId, name, email) => {
    try {
        const contactDoc = doc(db, "contacts", contactId);
        await updateDoc(contactDoc, { name: name, email: email })
    } catch (e) {
        console.error("Error updating contacts: ", e);
    }
}

const deleteContact = async (contactId) => {
    try {
        const contactDoc = doc(db, "contacts", contactId);
        await deleteDoc(contactDoc);
    } catch (e) {
        console.error("Error deleting contacts: ", e);
    }

}

export { addContact, getContacts, updateContact, deleteContact };