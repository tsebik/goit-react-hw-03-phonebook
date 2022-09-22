import React, { Component } from 'react';
import shortid from 'shortid';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import Div from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    if (this.isDuplicate(data)) {
      return alert(`${data.name} ia already contact`);
    }
    const contact = {
      id: shortid.generate(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  removeContacts = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );

      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalisedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalisedName = name.toLowerCase();
      return normalisedName.includes(normalisedFilter);
    });

    return filteredContacts;
  };

  isDuplicate = ({ name }) => {
    const { contacts } = this.state;
    return contacts.find(item => item.name === name);
  };

  render() {
    const { filter } = this.state;
    const { addContacts, handleChange, removeContacts } = this;
    const contacts = this.getFiltredContacts();

    return (
      <Div>
        <h1>Phonebook</h1>
        <Form onSubmit={addContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ul>
          <Contacts contacts={contacts} remove={removeContacts} />
        </ul>
      </Div>
    );
  }
}

export default App;
