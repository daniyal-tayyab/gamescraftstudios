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

  &:hover {
    background-color: #0084ff;
  }

  &:hover > span {
    background-color: #5b91f5;
  }

  span {
    margin-left: 10px;
    background-color: #383e46;
    padding: 0 7px;
    border-radius: 50%;
    font-size: 1.1rem;
    transition: all 0.15s;
  }
`;

const Tag = ({ item }) => {
  const { title, count } = item;

  return (
    <Container>
      {title}
      {count && <span>{count}</span>}
    </Container>
  );
};

export default Tag;
