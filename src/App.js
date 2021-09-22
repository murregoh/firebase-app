import './App.css';
import styled from "styled-components";
import Form from './components/form/Form';
import ContactList from './components/contactList/ContactList';

const App = () => {
  return (
    <Container>
      <Title>Contacts</Title>
      <Form />
      <ContactList />
    </Container>
  );
}

const Container = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 10px;
`;

export default App;
