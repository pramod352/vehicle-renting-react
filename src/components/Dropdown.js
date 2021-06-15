import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const DropdownContainer = styled.div `
display:grid;
align-items:center
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen}) =>(isOpen ? '1' : '0' )};
top:${({isOpen}) => (isOpen ? '0' : '-100%' )};
height:100%;
width:100%;
position:fixed;
z-index:999;
background:#cd853f;
`;

const Icon =styled.div `
position:absolute;
background:transparent;
top:1.2rem;
right:1.6rem;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon =styled(FaTimes) `
color:#000d1a;
`;
const DropdownWrapper =styled.div ``;

const DropdownMenu =styled.div `
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width:480px){
    grid-template-rows: repeat(4, 60px);
`;
const DropdownLink =styled(Link) `
display:flex;
align-items:center;
justify-content:center;
color:#fff;
cursor:pointer;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;

&:hover{
    color:#000d1a
}
`;
const BtnWrap =styled.div `
display:flex;
justify-content:center;
`;
const Btnlogout =styled.div `
margin-bottom:50px;
display:flex;
justify-content:center;
align-items:center;
`;

const Dropdown = ({isOpen,toggle,handleLogout}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item,index) =>(
                         <DropdownLink to ={item.Link} key={index}>
                         {item.title}
                     </DropdownLink>

                    ))}
                </DropdownMenu>
                {/* <div className="hero">
            <button primary='true' onClick={handleLogout}>Log Out</button>
            </div> */}
              <Btnlogout>
                <Button primary='true' onClick={handleLogout}>Log Out</Button>
                </Btnlogout>
                <BtnWrap>
                <Button to = "/Contact" primary='true' round='true' big='true'>Contact Us</Button>
              
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
