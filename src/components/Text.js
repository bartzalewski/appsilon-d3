import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-weight: 300;
  font-size: 18px;
  width: 700px;
`;

export default function Text({ text }) {
  return <StyledText className="text">{text}</StyledText>;
}
