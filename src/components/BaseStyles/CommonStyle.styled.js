import styled from 'styled-components';
import { baseColor, transition } from './Variables.styled';

const Section = styled.section`
  margin: ${props => props.margin || '0 auto'};
  padding-top: ${props => props.paddingTop || '16px'};
  padding-bottom: ${props => props.paddingBottom || '16px'};
  width: 100%;
  height: auto;
  background-color: ${baseColor.colors.textColor};
`;

const Container = styled.div`
  max-width: 480px;
  min-width: 412px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Button = styled.button`
  width: 196px;
  padding: 14px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${props =>
    props.active ? baseColor.colors.active : baseColor.colors.textColor};
  cursor: pointer;
  transition: all ${transition};
  &:hover {
    background-color: ${baseColor.colors.active};
  }
`;

export { Container, Section, Button };
