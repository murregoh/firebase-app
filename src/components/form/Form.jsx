import { useState } from "react";
import styled from "styled-components";

// Service
import { addContact } from '../../services/contact.service';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        addContact({
            name: name,
            email: email
        });

        setName('');
        setEmail('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type='submit'>Add Contact</Button>
        </form>
    )
}

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

const Button = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;

    &:hover {
        background: #3D76E9;
    }
`;

export default Form;