import styled from '@emotion/styled';

const ListContacts = styled.ul`
  display: flex;
  margin: 0px 0px 5px 0px;
`;

const ItemContacts = styled.li`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  align-items: flex-start;
`;

const Btn = styled.button`
  display: block;
  width: 100px;
  height: 25px;
  margin-bottom: 5px;
  border-radius: 4px;
  margin-left: 15px;
`;

export { ListContacts, ItemContacts, Btn };
