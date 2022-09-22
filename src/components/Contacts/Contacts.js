const Contacts = ({ contacts }) => {
  console.log(contacts);
  return contacts.map(({ id, data: { name, number } }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ));
};

export default Contacts;
