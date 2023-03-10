import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { StyledDiv } from './App.styled';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  sendData = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ) ||
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      Notify.failure(`${name} or number ${number} is already in contacts`);
      return;
    }

    const newCustomer = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newCustomer],
    }));
  };

  filterValueHandler = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <StyledDiv>
        <Section title="Phonebook">
          <Form send={this.sendData} />
        </Section>
        <Section title="Contacts">
          <Search filter={filter} onChange={this.filterValueHandler} />

          <Contacts
            filterContacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </StyledDiv>
    );
  }
}
