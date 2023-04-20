import { Button } from 'components/BaseStyles/CommonStyle.styled';
import Select from 'react-select';
import styled from 'styled-components';

export const LoadMore = styled(Button)`
  display: block;
  margin: 16px auto 0;
  border: 1px solid grey;

  /* text-align: center; */
`;

export const Filter = styled(Select)`
  width: 380px;
  margin: 16px auto;
`;
