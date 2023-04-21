import styled from 'styled-components';

export const Input = styled.input`
  margin-left: auto;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: inset 1px 1px 3px ${props => props.theme.colors.accentLight},
    inset -1px -1px 5px ${props => props.theme.colors.accentLight};
`;

export const SearchField = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
