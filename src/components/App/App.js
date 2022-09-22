import React, { Component } from 'react';
import shortid from 'shortid';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Div from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    const contact = {
      id: shortid.generate(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
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
      const result = normalisedName.includes(normalisedFilter);

      return result;
    });

    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    const { addContacts, handleChange } = this;
    const contacts = this.getFiltredContacts();

    return (
      <Div>
        <h1>Phonebook</h1>

        <Form onSubmit={addContacts} />

        <div>
          <h2>Contacts</h2>

          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />

          <ul>
            <Contacts contacts={contacts} />
          </ul>
        </div>
      </Div>
    );
  }
}

export default App;
