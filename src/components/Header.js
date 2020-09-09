import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 1000px;
  margin: 50px 0;
`;
const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  margin: 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>
        How does the population changed since the beginning of the world?
      </StyledTitle>
    </StyledHeader>
  );
}
