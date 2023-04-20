import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    console.log('del')
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
          items={this.state.contacts}
          onDelete={this.deleteContact}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
