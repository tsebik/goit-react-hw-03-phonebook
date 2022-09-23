import styled from '@emotion/styled';

const Div = styled.div`
  margin: 15px;
  padding: 15px;
`;
const ContainerForm = styled.div`
  display: inline-grid;
  width: 350px;
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 15px;
  grid-template-rows: 2;
`;

const Title = styled.h2`
  margin: 0px 0px 10px 0px;
`;

const ListContacts = styled.ul`
  display: flex;
  margin: 0px 0px 5px 0px;
`;

export { Div, ContainerForm, Title, ListContacts };
