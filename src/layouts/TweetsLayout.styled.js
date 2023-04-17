import { Container } from 'components/BaseStyles/CommonStyle.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { baseColor } from 'components/BaseStyles/Variables.styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

export const Header = styled.header`
  background-color: ${baseColor.colors.mainBg};
  color: ${baseColor.colors.textColor};
`;

export const HeaderContent = styled(Container)`
  /* max-width: 480px; */
  margin: 0 auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenuLink = styled(NavLink)`
  margin-right: 16px;
  &.active {
    /* color: blue; */
    color: ${baseColor.colors.active};

    text-decoration: underline;
    text-underline-offset: 16px;
    /* Толщина подчёркивания — 4 пикселя */
    text-decoration-thickness: 4px;
  }
  &:hover,
  &:focus {
    color: ${baseColor.colors.active};
  }
`;

export const Main = styled.main`
  height: 100%;
  /* background-color: ${baseColor.colors.textColor}; */
`;
