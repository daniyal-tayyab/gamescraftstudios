import React from "react";

import styled from "@emotion/styled";

const colorSpecial = "#2edb77";
const colorGiveaway = "#e35335";
const colorCommingSoon = "#414142";

const Container = styled.div`
  padding: 0.1rem 0.5rem;
  color: #fff;
  font-weight: 700;
  background-color: ${(props) =>
    props.type === "special"
      ? colorSpecial
      : props.type === "giveaway"
      ? colorGiveaway
      : colorCommingSoon};

  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Tag = ({ type, children }) => {
  return <Container type={type}>{children}</Container>;
};

export default Tag;
