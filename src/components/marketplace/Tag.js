import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 5px 15px;
  background-color: #202327;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;
  font-weight: 700;
  font-size: 1.3rem;
  min-width: fit-content;

  &:hover {
    background-color: #f07f27;
    color: #fff;
  }
`;

const Tag = ({ item }) => {
  return <Container>{item}</Container>;
};

export default Tag;
