const Contacts = ({ contacts, remove }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number} <button onClick={() => remove(id)}>delete</button>
    </li>
  ));
};

export default Contacts;
