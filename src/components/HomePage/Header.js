import React from 'react'
import styled from 'styled-components'
import trello from '../../assets/Trello_logo.png'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Header = () => {
  return (
    <Head>
        <NavBarParent>
             <NavBar>
                <Img src={trello}/>
            <NavLi><LiButton>Рабочие пространсва</LiButton></NavLi>
            <NavLi><LiButton>Недавние</LiButton></NavLi>
            <NavLi><LiButton>В избранном</LiButton></NavLi>
            <NavLi><LiButton>Шаблоны</LiButton></NavLi>
            <NavLi><LiButton>Создать</LiButton></NavLi>
          </NavBar>
        </NavBarParent>
        <div>
            <Search type="search" placeholder='Поиск'/>
            <Link to = "/"><Button variant="contained">Выйти</Button></Link>
        </div>
       
    </Head>
  )
}

const NavBarParent =styled.div`
width: 60%;`
const Head = styled.header`
width: 100%;
/* position: fixed; */
margin: 0;
height: 50px;
display: flex;
align-items: center;
background-color: hsl(15,80.9%,18.4%);
justify-content:space-between;`

const NavBar = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
list-style:none`

const Img = styled.img`
width: 90px;
color:white;
padding-right:10px`

const NavLi = styled.button`
color:black;
font-family:sans-serif;
background: 0;
opacity: 0.5;
border:none;
border-radius: 3px;
font-size:14px;
height: 30px;
position: relative;
z-index:1;
    height: 35px;
&:hover{
  position: relative;
    background-color: rgb(210, 216, 220);
    opacity:0.9;
    color:black;
    cursor: pointer;
    border: none;
    z-index: 1.5;
    
}`

const LiButton = styled.li`
color:white;`



const Search = styled.input`
opacity:65%;
background-color: aqua;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: none;
    box-sizing: border-box;
    color: white;
    float: left;
    color:black;
    font-size: 14px;
margin-right:70px;
height:35px;
width: 250px;
text-transform: none;
    text-indent: 0px;
    text-shadow: none;
border-radius:5px;
&:active{
background-color:white;
}`