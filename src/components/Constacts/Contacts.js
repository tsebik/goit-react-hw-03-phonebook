import PropTypes from 'prop-types';
import {
  ItemContacts,
  Btn,
  Span,
  ListContacts,
} from 'components/Constacts/Contacts.styled';

const Contacts = ({ contacts, remove }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <ItemContacts key={id}>
          {name}: <Span>{number}</Span>{' '}
          <Btn onClick={() => remove(id)}>delete</Btn>
        </ItemContacts>
      ))}
    </ListContacts>
  );
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
