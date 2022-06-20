import React from 'react'
import { Button } from '@mui/material'
import Close from '../../assets/close.png'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { formActions } from '../../store/reducers/titleSlice'

export const ContentArea = (props) => {
 const[elem,setElem] = useState("")
 const [ isElem, setIsElem] = useState(false)
 const dispatch = useDispatch()

const addText=()=>{
  if(elem ===""){
    return
  }
  dispatch(formActions.addItems({
    toDoId:Math.random().toString(),
    toDoItem: elem,
    id: props.id
    
  }))

setElem("")

}
  function itemChangehandler(e){
    setElem(e.target.value)
  }
  

  return (
    <Wrap>

        <Text type="text" onChange={itemChangehandler} value={elem} key={props.id}/>
        <Cont>
        <Button variant="contained" onClick={addText}>
          Добавить карточку
        </Button>
        <Img src={Close} onClick={props.onClose}/>
      </Cont>
    </Wrap>
 )
}


const Wrap = styled.div`
width: 246px;
border-radius: 3px;
background-color:white;`


const Img =styled.img`
width: 20px;
height: 20px;
margin-left: 5px;`

const Cont = styled.div`
display: flex;
align-items:center;
`

const Text = styled.textarea`
width: 240px;
margin:5px;
box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
border:none;`