import React from 'react'
import styled from 'styled-components';
import Google from "../../assets/google.jpg";
import Microsoft from "../../assets/mic.png";
import Apple from "../../assets/apple.png";


export const LinkButtons = () => {
  return (
    <ButtonDiv>
    <Buttons>
      <GoogleImg src={Google} />
      Войти через Google
    </Buttons>
    <Buttons>
      <MicroImg src={Microsoft} />
      Войти через Microsoft
    </Buttons>
    <Buttons>
      <AppleImg src={Apple} />
      Войти через Apple
    </Buttons>
    <P>Вход с помошью SSO</P>
    <Hr></Hr>
    <Footer>
      <P>Не удается войти?</P>
      <P>Зарегистрировать аккаунт</P>
    </Footer>
  </ButtonDiv>
  )
}

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;


const Buttons = styled.button`
  height: 44px;
  width: 100%;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 15%) 0 0 10px;
  background-color: #ffffff;
  border: none;
  margin-top: 15px;
  font-family: sans-serif;
  font-weight: bolder;
  color: rgb(44, 41, 41);
`;

const GoogleImg = styled.img`
  width: 20px;
  padding-top: 2px;
  padding-right: 5px;
`;
const MicroImg = styled.img`
  width: 20px;
  padding-top: 2px;
  padding-right: 5px;
`;
const AppleImg = styled.img`
  width: 30px;
  padding-top: 2px;
  padding-right: 5px;
`;

const P = styled.p`
  margin-top: 18px;
  cursor: pointer;
  color: rgb(89, 167, 227);
  &:hover {
    text-decoration: underline rgb(99, 99, 227);
  }
`;

const Hr = styled.div`
  border-bottom: 1px solid grey;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;