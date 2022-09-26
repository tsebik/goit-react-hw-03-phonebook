import styled from '@emotion/styled';

const Div = styled.div`
  margin: 15px;
  padding: 15px;
`;
const ContainerForm = styled.div`
  width: 350px;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  margin-bottom: 10px;
  padding: 15px;
`;

const Title = styled.h2`
  margin: 0px 0px 10px 0px;
`;

export { Div, ContainerForm, Title };
