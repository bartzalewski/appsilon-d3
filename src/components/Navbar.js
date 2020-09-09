import React from 'react';
import styled from 'styled-components';
import bitcoin from '../images/bitcoin.png';

const StyledNavbar = styled.nav`
  width: 1400px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLeft = styled.div`
  font-weight: 700;
  color: #f7931a;
  display: flex;

  img {
    margin-right: 10px;
  }
`;
const StyledRight = styled.ul`
  display: flex;
`;
const StyledItem = styled.li`
  list-style: none;
`;
const StyledLink = styled.a`
  margin-left: 20px;
  text-decoration: none;
  color: inherit;
  position: relative;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLeft>
        <img src={bitcoin} alt="bithistory logo" />
        BIT
        <br />
        HISTORY
      </StyledLeft>
      <StyledRight>
        <StyledItem>
          <StyledLink href="#!">Code</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink href="mailto:me@bartzalewski.com">Contact</StyledLink>
        </StyledItem>
      </StyledRight>
    </StyledNavbar>
  );
}
