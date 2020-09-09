import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #333;
  height: 50px;
  width: 100%;
  margin-top: 100px;
`;

export default function Footer() {
  return <StyledFooter>Copyright 2020 &copy; Bart Zalewski</StyledFooter>;
}
