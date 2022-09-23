import React, { Component } from 'react';
import shortid from 'shortid';
import { Label, FormInput, Btn } from 'components/Form/Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = shortid.generate();
  numderId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, nameId, numberId, handleChange } = this;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Label htmlFor={nameId}>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              id={nameId}
            />
          </Label>
          <Label htmlFor={numberId}>
            Number
            <FormInput
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              id={numberId}
            />
          </Label>

          <Btn type="submit">Add contack</Btn>
        </form>
      </div>
    );
  }
}

export default Form;
