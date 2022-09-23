import styled from '@emotion/styled';

const Label = styled.label`
  display: grid;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 150px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Btn = styled.button`
  width: 100px;
  height: 25px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: greenyellow;
  }
`;

export { Label, FormInput, Btn };
