import React, { useState, useRef } from "react";
import { Card } from "../UI/Card";
import styled, { createGlobalStyle } from "styled-components";
import assets from "../../assets/hero.svg";
import assets2 from "../../assets/hero2.png";
import { Link } from "react-router-dom";
import { LoginHeadName } from "./LoginHeadName";
import { HeadName } from "./HeadName";
import { LinkButtons } from "./LinkButtons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/reducers/uiSlice";
import { CircularProgress } from "@mui/material";

export const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [evalid, setEValid] = useState(false);
  const [evalid2, setEValid2] = useState(false);

  const [pvalid, setpValid] = useState(false);
  const [pvalid2, setpValid2] = useState(false);
  const ref = useRef();

  const {myEmail, myPassword}=useSelector(state=>state.title)

  const spinner = useSelector((state) => state.home.homeIsVisible);
  const dispatch = useDispatch();

  const emailHandler = (e) => {
    let email = e.target.value;
    setEmailValue(email);
    if (email.trim() !== "" && email === myEmail) {
      setEValid(true);
      setEValid2(false);
    } else {
      setEValid(false);
      setEValid2(true);
    }
  };

  const passwordHandler = (e) => {
    let password = e.target.value;
    setPasswordValue(password);
    if (password.trim() !== "" && password === myPassword) {
      setpValid(true);
      setpValid2(false);
    } else {
      setpValid(false);
      setpValid2(true);
    }
  };
  const formSubmithandler = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(evalid, pvalid);
    if (evalid === false) {
      setEValid2(true);
      return;
    }
    if (pvalid === false) {
      setpValid2(true);
      return;
    }
    if (evalid === true && pvalid === true) {
      dispatch(uiActions.toggle());
      setTimeout(() => {
        dispatch(uiActions.toggle());
        ref.current.click();
        setEmailValue("");
        setPasswordValue("");
      }, 2000);
    }
  };

  let cont = !evalid && evalid2;
  let cont2 = !pvalid && pvalid2;
  let content = cont ? (
    <FirstValid>Отсутствует адрес электронной почты</FirstValid>
  ) : cont2 ? (
    <FirstValid>
      У вас нет аккаунта Trello. Хотите создать его, используя учетную запись
      Atlassian?
    </FirstValid>
  ) : (
    ""
  );

  return (
    <Wrapper>
      <LoginHeadName />

      <Card>
        <FormDiv>
          {content}
          <HeadName />
          <Form onSubmit={formSubmithandler}>
            <Input
              type="email"
              placeholder="укажите адрес электронной почты"
              onChange={emailHandler}
              value={emailValue}
            />
            <Input
              type="password"
              placeholder="Введите пароль"
              onChange={passwordHandler}
              value={passwordValue}
            />
            {spinner && (
              <Circul>
                <CircularProgress style={{color:"rgb(75, 192, 251)"}}/>
              </Circul>
            )}
            <Link ref={ref} to="/homepage"></Link>
            <ExitBut type="submit">Войти</ExitBut>
          </Form>
          <Span>ИЛИ</Span>
          <LinkButtons />
        </FormDiv>
      </Card>
      <Picture />
    
    </Wrapper>
  );
};

const Circul = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  background-color: rgb(81, 83, 84);
  opacity: 70%;
  position: fixed;
`;

const FirstValid = styled.div`
  background-color: rgb(226, 81, 81);
  border-radius: 5px;
  color: white;
  font-size: 14px;
  margin-top: 30px;
  font-family: sans-serif;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  box-sizing: border-box;
  border-radius: 3px;
  height: 44px;
  width: 100%;
  margin-top: 19px;
  padding-left: 8px;
  color: #5e6c84;
  &:focus {
    outline-color: rgb(89, 167, 227);
    border-color: rgb(89, 167, 227);
  }
`;

const ExitBut = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: rgb(79, 186, 79);
  border: none;
  border-radius: 3px;
  height: 37px;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
`;

const Span = styled.p`
  padding-top: 5px;
  color: rgb(53, 51, 51);
  font-size: 14px;
  font-family: sans-serif;
  margin-bottom: -10px;
`;

const Picture = createGlobalStyle`
body{
  background:url(${assets}) 2% 90% fixed,
              url(${assets2}) 97% 98% fixed;
  background-repeat:no-repeat;
  background-size: 33%,33%;
  background-color: #F9FAFC;
}
`;
