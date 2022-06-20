import React from 'react'
import Plus from '../../../assets/plus.png'
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/reducers/uiSlice";
export const ListBlock = () => {

    const dispatch = useDispatch();

    const listToggle = () => {
      dispatch(uiActions.toggleList());
    };
  return (
    <>
         <BlockList>
       <AddButton onClick={listToggle}><Img>+</Img><Span>Добавьте еще одну колонку</Span></AddButton>
     </BlockList>
    </>
  )
}


const BlockList=styled.div`
margin-top:40px;
margin-left:30px;`

const AddButton = styled.button`
width: 248px;
height: 35px;
opacity: 0.8;
border:none;
border-radius:3px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
&:hover{
  opacity:0.7;
  cursor:pointer;
}
`

const Span =styled.span`
`

const Img = styled.p`
font-size: 25px;
background-color:white;
margin-right:10px;`