import styled from 'styled-components';
import { baseColor } from './Variables.styled';

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

export { Container, Section };
