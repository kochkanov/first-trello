import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  return <Wrap>{props.children}</Wrap>;
};

export const Wrap = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
  width: 30%;
  margin: 40px;
  height: 120vh;
`;
