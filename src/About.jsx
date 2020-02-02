import React from 'react'
import styled from 'styled-components'
import girlNote from '../assets/img/girlNote.svg'



export default () => {
    return (
        <Container>
            <Logo src={girlNote} />
            <TextStyle>
                {'<about>'}<br />
                <br />Programadora front-end con ganas de seguir creciendo a nivel profesional.
                Tecnologías aprendidas por ahora: React, React Native, HTML, CSS3, Javascript, SASS, ES6, AntD.
                Me considero una persona responsable, pro-activa, capaz de trabajar en equipo.
                Me adapto con facilidad a nuevos entornos de trabajo.<br />
                <br />{' </about>'}
            </TextStyle>
        </Container>

    )
}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:350px;
margin:10px 0 30px 0;
`
const Logo = styled.img`
opacity:0.2;
width:50%;
`
const TextStyle = styled.div`
width:50%;

`