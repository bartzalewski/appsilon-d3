import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: absolute;
  left: 100px;
  width: 300px;
  height: 300px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #fff;
  box-shadow: #ccc 1px 1px 1px 1px;
  color: #333;
  padding: 20px;
  overflow: hidden;

  h3 {
    margin-top: 0;
  }
`;

export default function Card({ top, title, desc }) {
  return (
    <StyledCard className="card" style={{ top }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </StyledCard>
  );
}
