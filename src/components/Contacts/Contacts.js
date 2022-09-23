import PropTypes from 'prop-types';
import {
  ListContacts,
  ItemContacts,
  Btn,
} from 'components/Contacts/Contacts.styled';

const Contacts = ({ contacts, remove }) => {
  return contacts.map(({ id, name, number }) => (
    <ListContacts>
      <ItemContacts key={id}>
        {name}: {number} <Btn onClick={() => remove(id)}>delete</Btn>
      </ItemContacts>
    </ListContacts>
  ));
};

Contacts.propTypes = {
  remove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default Contacts;
