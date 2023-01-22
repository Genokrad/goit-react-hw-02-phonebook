import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Search } from './Search/Search';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  sendData = data => {
    const newCustomer = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    console.log(newCustomer);

    this.setState({ contacts: [...this.state.contacts, newCustomer] });
    console.log(this.state);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form send={this.sendData} />
        </Section>
        <Section title="Contacts">
          <Search />
          <ul>
            {contacts.map(contact => {
              return (
                <Contacts
                  key={nanoid()}
                  name={contact.name}
                  number={contact.number}
                />
              );
            })}
          </ul>
        </Section>
      </>
    );
  }
}
