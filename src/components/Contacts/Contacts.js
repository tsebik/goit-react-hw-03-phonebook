const Contacts = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ));
};

export default Contacts;
