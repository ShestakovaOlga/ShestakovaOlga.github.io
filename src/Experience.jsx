import React from 'react'
import styled from 'styled-components'
import settings from '../assets/img/settings.svg'



export default () => {
    return (
        <Container>
            <Logo src={settings} />
            <TextStyle>
                {'<experience>'}<br />
                <br />
                Tecnologías aprendidas por ahora: React, React Native, HTML, CSS3, Javascript, SASS, ES6, Bootstrap.<br />
                <br />{' </experience>'}
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
const Logo = styled.img`
width:50%;
opacity:0.2;
height:350px;
`
const TextStyle = styled.div`
width:50%;
`