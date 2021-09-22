import { useCallback, useEffect, useState } from "react";

// Service
import { getContacts, deleteContact } from '../../services/contact.service';
import Contact from "../contact/Contact";

const ContactList = () => {

    const [contacts, setContacts] = useState([]);

    const fetchAPI = useCallback(async () => {
        setContacts(await getContacts());
    }, []);

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI]);

    const handleDelete = (contactId) => {
        deleteContact(contactId);
    }

    return (
        <div>
            {contacts.length > 0 ?
                contacts.map((contact, index) => <Contact key={index} contact={contact} handleDelete={handleDelete} />)
                :
                <div>No contacts</div>
            }
        </div>
    );
}

export default ContactList;