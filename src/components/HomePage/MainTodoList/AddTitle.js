import React from "react";
import styled from "styled-components";
import { formActions, titleSlice } from "./../../../store/reducers/titleSlice";
import { useSelector } from "react-redux";
import { ContentArea } from "./../ContentArea";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import Rename from '../../../assets/rename.png'
export const AddTitle = (props) => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.title.mainTitle);
  console.log("l", item);

  
  let[st, setst]=useState(false)

  const openCart = () => {
    dispatch(formActions.openLittleCart());
    setst(true)
  };

  function close(){
    setst(false)
  }
  return <Cont>
  
      <div>
        <H2Title key={props.id}>{props.title}</H2Title>
        {props.itemsTitle.map((i)=><Pitem>{i.toDoItem}<RenameImg src={Rename}/></Pitem>)}
        {st ? (
          <ContentArea id={props.id} onClose={close} onTextId={props.id}/>
        ) : (
          <Addcart onClick={openCart}>
            <p>+</p> Добавить карточку
          </Addcart>
        )}
      </div>
    
  </Cont>
  
  
};

const RenameImg = styled.img`
width: 15px;
height: 15px;
position: absolute;
right:2px;
cursor: pointer;
top:6px;
`


const Pitem = styled.p`
  height: 30px;
  position: relative;
  width: 238px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
  border-radius: 4px;
  font-family:'Times New Roman', Times, serif;
  padding:7px;
  margin-left:4px;
`;

const Cont = styled.div`
  width: 248px;
  margin-top: 40px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ebecf0;
`;

const Addcart = styled.button`
  width: 244px;
  display: flex;
  padding-left: 30px;
  height: 30px;
  align-items: center;
  border-radius: 3px;
  border: none;
`;

const H2Title = styled.h2`
  background-color: #ebecf0;
  width: 244px;
  height: 30px;
  border-radius: 3px;
  border: none;
  padding-left:5px;
  font-family: cursive;
`;
