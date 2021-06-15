import React from 'react'
import styled, { css } from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
import './navbar.css'


const Nav = styled.nav `
height:60px;
display:flex;
background:#cd853f;
justify-content:space-between;
padding:1rem 2rem;
position:fixed;
width:100%;
z-index:100;
`;

const Navlink= css `
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

&:hover{
    color:#000d1a
}

`
const Logo =styled(Link) `
  ${Navlink}
  font-style:italic;
`;
const MenuBars = styled(FaBars) `
display:none;
@media screen and (max-width:760px){
    display : block;
    cursor:pointer;
    position:absolute;
    height:40px;
    width:40px;
    top:0;
    right:0;
    transform:translate(-50%,25%)
}
`;

const NavMenu = styled.div `
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width:760px){
    display : none;
}
`;

const NavMenuLinks =styled(Link) `
${Navlink}
`;

const NavBtn =styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:760px){
    display : none;
}
`;

const Navbar = ({toggle,handleLogout}) => {
    return (
        <Nav>
            <Logo>Vehicle Renting</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to ={item.Link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <div className="hero">
            <button primary='true' onClick={handleLogout}>Log Out</button>
            </div>
            <NavBtn>
                <Button to = "/Contact" primary='true'>Contact Us</Button>
            </NavBtn>
           
    
        </Nav>
    )
}

export default Navbar
