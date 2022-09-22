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

  render() {
    const { contacts } = this.state;

    return (
      <Div>
        <h1>Phonebook</h1>

        <Form onSubmit={this.addContacts} />

        <div>
          <h2>Contacts</h2>
          <ul>
            <Contacts contacts={contacts} />
          </ul>
        </div>
      </Div>
    );
  }
}

export default App;
