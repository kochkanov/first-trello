import React from "react";
import { Header } from "./Header";
import { createGlobalStyle } from "styled-components";
import backFon from "../../assets/fon.jpg";
import { MainTodo } from "./MainTodoList/MainTodo";

import styled from "styled-components";
export const HomePage = () => {
 

  return (
    <>
      <Header/>
      <ContentFlex>
      <MainTodo/>
      </ContentFlex>
     
      <Wrapper/>
    </>
  );
};

const Wrapper = createGlobalStyle`
body{
    background-image:url(${backFon});
    width:100%;
    height: 100%;
    background-repeat:no-repeat;
    background-size:cover;
    position: fixed;
    background-attachment:fixed;
    /* background-position:bottom center; */
}
`;

const ContentFlex = styled.div`
display: flex;
flex-direction:row;
align-items:flex-start;`
