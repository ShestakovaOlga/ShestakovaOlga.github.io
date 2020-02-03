import React from 'react'
import styled from 'styled-components'
import jshtmlcss from '../assets/img/jshtmlcss.svg'
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap, FaGitAlt, FaJsSquare, FaNodeJs, FaReact, FaSass } from "react-icons/fa";




export default () => {
    return (
        <Container>
            {/* <Logo src={jshtmlcss} /> */}
            <TextStyle>
                {'<training>'}
                <div>
                    <FaJsSquare />
                    <FaReact />
                    <FaNodeJs />
                    <IoLogoHtml5 />
                    <IoLogoCss3 />
                    <FaSass />
                    <FaBootstrap />
                    <FaGitAlt />
                </div>
                {' </training>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center; 
width:100%;
max-width:90%;
height:400px;
margin-top:30px;
margin-bottom:30px;
`

const TextStyle = styled.div`
padding:20px;
color:#A074BA;
svg{
    margin-bottom:15px;
    margin-top:15px;
    color:rgb(50,50,50);
    font-size:4.5rem;
    opacity: 0.6;
}
`