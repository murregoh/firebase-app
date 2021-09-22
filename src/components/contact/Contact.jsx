import { useState } from "react";
import styled from "styled-components";

// Service
import { updateContact } from '../../services/contact.service';

const Contact = ({ contact, handleDelete }) => {

    const [isUpdating, setIsUpdating] = useState(false);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsUpdating(false);
        updateContact(contact.contactId, name, email);
    }

    return (
        <ContactContainer>
            {isUpdating ?
                <>
                    <form onSubmit={handleOnSubmit}>
                        <Input
                            type='text'
                            name='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type='text'
                            name='Name'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <Button type='submit'>Update</Button>
                    </form>

                </>
                :
                <>
                    <Name>{contact.name}</Name>
                    <Email>{contact.email}</Email>
                    <Button onClick={() => setIsUpdating(true)}>Edit</Button>
                    <Button onClick={() => handleDelete(contact.contactId)}>Delete</Button>
                </>
            }
        </ContactContainer >
    );
}

const ContactContainer = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Name = styled.p`
    font-weight: bold;
`;

const Email = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;

const Button = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;

export default Contact;