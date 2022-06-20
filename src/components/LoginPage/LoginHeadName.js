import React from "react";
import Image from '../../assets/Trello_logo.png'
import styled from "styled-components";

export const LoginHeadName = () => {
  return (
      <div>
         <Logo src={Image} />
      </div>
  );
};


export const Logo = styled.img`
  width: 33vh;
  margin-top: 34px;
`;
