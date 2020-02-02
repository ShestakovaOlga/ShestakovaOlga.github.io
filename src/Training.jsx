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
                {'<training>'}<br />
                <br />
                <FaJsSquare />
                <FaReact />
                <FaNodeJs />
                <IoLogoHtml5 />
                <IoLogoCss3 />
                <FaSass />
                <FaBootstrap />
                <FaGitAlt />
                <br />
                <br />{' </training>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:350px;
margin:10px 0 30px 0;
`

const TextStyle = styled.div`
svg{
    vertical-align: middle;
    font-size:4.5rem;
    opacity: 0.9;
}
`