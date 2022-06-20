import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import Close from "../../../assets/close.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/reducers/uiSlice";
import { formActions } from "../../../store/reducers/titleSlice";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { AddTitle } from "./AddTitle";
import { ListBlock } from './ListBlock';

export const MainTodo = (props) => {
  const isList = useSelector((state) => state.home.listIsVisible);
  const titleName = useSelector((state) => state.title.mainTitle);

  const [input, setInput] = useState("");
  const [isOpen,setIsOpen]=useState(false)
  const dispatch = useDispatch();



  const toglleClose = () => {
    dispatch(uiActions.toggleList());
  };

  const titleHandler = () => {
    if(input === ""){
      return
    }
    dispatch(
      formActions.addTitle({
        id: Math.random().toString(),
        title: input,
      }))
    setInput("")
  };

  return (
    <Container>
      {titleName.map((el) => {
        return <AddTitle key={el.id} title={el.title} id={el.id} itemsTitle={el.itemsTitle}/>
        
      })}

      {isList ? (
        <ParentIn>
          <Input
          autoFocus={true}
            type="text"
            placeholder="Вести заголовок списка"
            onChange={(e) => setInput(e.target.value)}
          value={input} />
          <Cont>
            <AddButton variant="contained" onClick={titleHandler}>
              Добавить список
            </AddButton>
            <Img src={Close} onClick={toglleClose} />
          </Cont>
        </ParentIn>
      ) : (
        <ListBlock />
      )}
    </Container>
  );
};

const ParentIn = styled.div`
  display: flex;
  width: 248px;
  border-radius: 3px;
  background-color: white;
  height: 85px;
  margin-top: 40px;
  margin-left: 30px;
  flex-direction: column;
`;

const Container = styled.div`
  align-items: flex-start;
  display: flex;
`;

const Input = styled.input`
  width: 240px;
  height: 35px;
  border-radius: 3px;
  margin: 2px 2px;
  border-color: blue;
  padding-left: 5px;

`;

const Cont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2px 2px;
`;

const AddButton = styled(Button)`
  height: 35px;
  font-size: 20px;
`;

const Img = styled.img`
  width: 17px;
  height: 17px;
  color: grey;
  margin-left: 8px;
`;
